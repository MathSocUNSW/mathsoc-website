import { NextResponse } from "next/server";

const FOLDER_MIME_TYPE = "application/vnd.google-apps.folder";
const SHORTCUT_MIME_TYPE = "application/vnd.google-apps.shortcut";
const ROOT_FOLDER_ID = "1v7WrVhAzZxtIhkEXeDMUiaoKF8jHkV96";
const MAX_DEPTH = 10;

type DriveItem = {
  id: string;
  name: string;
  mimeType: string;
  parents?: string[];
  webViewLink?: string;
  webContentLink?: string;
  modifiedTime?: string;
  shortcutDetails?: {
    targetId?: string;
    targetMimeType?: string;
  };
};

type FolderNode = {
  id: string;
  name: string;
  files: DriveItem[];
  folders: FolderNode[];
};

async function getFolderContents(folderId: string): Promise<DriveItem[]> {
  const files: DriveItem[] = [];
  let pageToken: string | undefined;

  do {
    const params = new URLSearchParams({
      q: `'${folderId}' in parents and trashed = false`,
      key:
        process.env.GOOGLE_DRIVE_API_KEY ||
        process.env.NEXT_PUBLIC_GOOGLE_DRIVE_API_KEY ||
        "",
      fields:
        "nextPageToken,files(id,name,mimeType,parents,webViewLink,webContentLink,modifiedTime,shortcutDetails)",
      pageSize: "1000",
    });
    if (pageToken) params.set("pageToken", pageToken);

    const res = await fetch(
      `https://www.googleapis.com/drive/v3/files?${params.toString()}`,
      {
        next: { revalidate: 3600 }, // 1 hr cache
      }
    );

    if (!res.ok) {
      console.error("Google Drive API Error:", await res.text());
      return files;
    }

    const data = await res.json();
    files.push(...(data.files || []));
    pageToken = data.nextPageToken;
  } while (pageToken);

  return files;
}

/** Build a nested folder tree (no path prefixes on file names). */
async function buildFolderTree(
  folderId: string,
  folderName: string,
  depth = 0
): Promise<FolderNode> {
  if (depth > MAX_DEPTH) {
    return { id: folderId, name: folderName, files: [], folders: [] };
  }

  const items = await getFolderContents(folderId);
  const files: DriveItem[] = [];
  const nestedFolderJobs: Promise<FolderNode>[] = [];

  for (const item of items) {
    const isFolder = item.mimeType === FOLDER_MIME_TYPE;
    const isFolderShortcut =
      item.mimeType === SHORTCUT_MIME_TYPE &&
      item.shortcutDetails?.targetMimeType === FOLDER_MIME_TYPE &&
      item.shortcutDetails?.targetId;

    if (isFolder || isFolderShortcut) {
      const targetId = isFolderShortcut
        ? item.shortcutDetails!.targetId!
        : item.id;
      nestedFolderJobs.push(buildFolderTree(targetId, item.name, depth + 1));
      continue;
    }

    if (
      item.mimeType === SHORTCUT_MIME_TYPE &&
      item.shortcutDetails?.targetId
    ) {
      files.push({
        ...item,
        id: item.shortcutDetails.targetId,
        mimeType: item.shortcutDetails.targetMimeType || item.mimeType,
      });
      continue;
    }

    files.push(item);
  }

  const folders = await Promise.all(nestedFolderJobs);
  folders.sort((a, b) => a.name.localeCompare(b.name));
  files.sort((a, b) => a.name.localeCompare(b.name));

  return { id: folderId, name: folderName, files, folders };
}

export async function GET() {
  try {
    const topLevelItems = await getFolderContents(ROOT_FOLDER_ID);
    const topLevelFolders = topLevelItems.filter(
      (item) => item.mimeType === FOLDER_MIME_TYPE
    );

    const folderPromises = topLevelFolders.map(async (folder) => {
      const subfolderItems = await getFolderContents(folder.id);
      const subfolderList = subfolderItems.filter(
        (item) => item.mimeType === FOLDER_MIME_TYPE
      );

      // Real child folders → Subfolder cards (with nested folders preserved)
      const subfolders = await Promise.all(
        subfolderList.map((subfolder) =>
          buildFolderTree(subfolder.id, subfolder.name)
        )
      );

      // Files / folder-shortcuts sitting directly under the top-level section
      const directItems = subfolderItems.filter(
        (item) => item.mimeType !== FOLDER_MIME_TYPE
      );

      if (directItems.length > 0) {
        const directFiles: DriveItem[] = [];
        const nestedFolderJobs: Promise<FolderNode>[] = [];

        for (const item of directItems) {
          const isFolderShortcut =
            item.mimeType === SHORTCUT_MIME_TYPE &&
            item.shortcutDetails?.targetMimeType === FOLDER_MIME_TYPE &&
            item.shortcutDetails?.targetId;

          if (isFolderShortcut) {
            nestedFolderJobs.push(
              buildFolderTree(item.shortcutDetails!.targetId!, item.name, 1)
            );
            continue;
          }

          if (
            item.mimeType === SHORTCUT_MIME_TYPE &&
            item.shortcutDetails?.targetId
          ) {
            directFiles.push({
              ...item,
              id: item.shortcutDetails.targetId,
              mimeType:
                item.shortcutDetails.targetMimeType || item.mimeType,
            });
            continue;
          }

          directFiles.push(item);
        }

        const nestedFolders = await Promise.all(nestedFolderJobs);

        if (directFiles.length > 0 || nestedFolders.length > 0) {
          nestedFolders.sort((a, b) => a.name.localeCompare(b.name));
          directFiles.sort((a, b) => a.name.localeCompare(b.name));
          subfolders.unshift({
            id: `${folder.id}_direct`,
            name: "Subfolder",
            files: directFiles,
            folders: nestedFolders,
          });
        }
      }

      return {
        id: folder.id,
        name: folder.name,
        subfolders,
      };
    });

    const folderStructure = await Promise.all(folderPromises);
    return NextResponse.json(folderStructure);
  } catch (error) {
    console.error("Error building drive structure:", error);
    return NextResponse.json(
      { error: "Failed to fetch resources" },
      { status: 500 }
    );
  }
}
