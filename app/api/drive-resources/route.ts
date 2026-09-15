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

type FolderContentsResult = {
  files: DriveItem[];
  accessible: boolean;
};

function isFolderEmpty(node: FolderNode): boolean {
  return node.files.length === 0 && node.folders.length === 0;
}

async function getFolderContents(folderId: string): Promise<FolderContentsResult> {
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
      return { files: [], accessible: false };
    }

    const data = await res.json();
    files.push(...(data.files || []));
    pageToken = data.nextPageToken;
  } while (pageToken);

  return { files, accessible: true };
}

/** Build a nested folder tree (no path prefixes on file names). */
async function buildFolderTree(
  folderId: string,
  folderName: string,
  depth = 0
): Promise<FolderNode | null> {
  if (depth > MAX_DEPTH) {
    return { id: folderId, name: folderName, files: [], folders: [] };
  }

  const { files: items, accessible } = await getFolderContents(folderId);
  if (!accessible) {
    return null;
  }

  const files: DriveItem[] = [];
  const nestedFolderJobs: Promise<FolderNode | null>[] = [];

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

  const folders = (await Promise.all(nestedFolderJobs)).filter(
    (folder): folder is FolderNode => folder !== null && !isFolderEmpty(folder)
  );
  folders.sort((a, b) => a.name.localeCompare(b.name));
  files.sort((a, b) => a.name.localeCompare(b.name));

  const node = { id: folderId, name: folderName, files, folders };
  return isFolderEmpty(node) ? null : node;
}

export async function GET() {
  try {
    const { files: topLevelItems, accessible: rootAccessible } =
      await getFolderContents(ROOT_FOLDER_ID);

    if (!rootAccessible) {
      return NextResponse.json(
        { error: "Failed to fetch resources" },
        { status: 500 }
      );
    }

    const topLevelFolders = topLevelItems.filter(
      (item) =>
        item.mimeType === FOLDER_MIME_TYPE ||
        (item.mimeType === SHORTCUT_MIME_TYPE &&
          item.shortcutDetails?.targetMimeType === FOLDER_MIME_TYPE &&
          item.shortcutDetails?.targetId)
    );

    const folderPromises = topLevelFolders.map(async (folder) => {
      const folderId =
        folder.mimeType === SHORTCUT_MIME_TYPE
          ? folder.shortcutDetails!.targetId!
          : folder.id;
      const { files: subfolderItems, accessible } =
        await getFolderContents(folderId);

      if (!accessible) {
        return null;
      }

      const subfolderList = subfolderItems.filter(
        (item) => item.mimeType === FOLDER_MIME_TYPE
      );

      // Real child folders → Subfolder cards (with nested folders preserved)
      const builtSubfolders = (
        await Promise.all(
          subfolderList.map((subfolder) =>
            buildFolderTree(subfolder.id, subfolder.name)
          )
        )
      ).filter((subfolder): subfolder is FolderNode => subfolder !== null);

      // Files / folder-shortcuts sitting directly under the top-level section
      const directItems = subfolderItems.filter(
        (item) => item.mimeType !== FOLDER_MIME_TYPE
      );

      if (directItems.length > 0) {
        const directFiles: DriveItem[] = [];
        const nestedFolderJobs: Promise<FolderNode | null>[] = [];

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

        const nestedFolders = (await Promise.all(nestedFolderJobs)).filter(
          (nested): nested is FolderNode => nested !== null
        );

        if (directFiles.length > 0 || nestedFolders.length > 0) {
          nestedFolders.sort((a, b) => a.name.localeCompare(b.name));
          directFiles.sort((a, b) => a.name.localeCompare(b.name));
          builtSubfolders.unshift({
            id: `${folderId}_direct`,
            name: "Subfolder",
            files: directFiles,
            folders: nestedFolders,
          });
        }
      }

      if (builtSubfolders.length === 0) {
        return null;
      }

      return {
        id: folderId,
        name: folder.name,
        subfolders: builtSubfolders,
      };
    });

    const folderStructure = (await Promise.all(folderPromises)).filter(
      (folder): folder is NonNullable<typeof folder> => folder !== null
    );
    return NextResponse.json(folderStructure);
  } catch (error) {
    console.error("Error building drive structure:", error);
    return NextResponse.json(
      { error: "Failed to fetch resources" },
      { status: 500 }
    );
  }
}
