import { NextResponse } from 'next/server';

const FOLDER_MIME_TYPE = "application/vnd.google-apps.folder";
const ROOT_FOLDER_ID = "1v7WrVhAzZxtIhkEXeDMUiaoKF8jHkV96";

async function getFolderContents(folderId: string) {
  const res = await fetch(
    `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${process.env.GOOGLE_DRIVE_API_KEY}&fields=files(id,name,mimeType,parents,webViewLink,webContentLink,modifiedTime)`,
    {
      next: { revalidate: 3600 } // 1 hr cache
    }
  );

  if (!res.ok) {
    console.error("Google Drive API Error:", await res.text());
    return [];
  }

  const data = await res.json();
  return data.files || [];
}

export async function GET() {
  try {
    const topLevelItems = await getFolderContents(ROOT_FOLDER_ID);
    const topLevelFolders = topLevelItems.filter(
      (item: any) => item.mimeType === FOLDER_MIME_TYPE
    );

    const folderPromises = topLevelFolders.map(async (folder: any) => {
      const subfolderItems = await getFolderContents(folder.id);
      const subfolderList = subfolderItems.filter(
        (item: any) => item.mimeType === FOLDER_MIME_TYPE
      );

      const subfolderPromises = subfolderList.map(async (subfolder: any) => {
        const subfolderContents = await getFolderContents(subfolder.id);
        const files = subfolderContents.filter(
          (item: any) => item.mimeType !== FOLDER_MIME_TYPE
        );
        return {
          id: subfolder.id,
          name: subfolder.name,
          files: files,
        };
      });

      const subfolders = await Promise.all(subfolderPromises);

      const directFiles = subfolderItems.filter(
        (item: any) => item.mimeType !== FOLDER_MIME_TYPE
      );

      if (directFiles.length > 0) {
        subfolders.unshift({
          id: `${folder.id}_direct`,
          name: "Subfolder",
          files: directFiles,
        });
      }

      return {
        id: folder.id,
        name: folder.name,
        subfolders: subfolders,
      };
    });

    const folderStructure = await Promise.all(folderPromises);
    return NextResponse.json(folderStructure);

  } catch (error) {
    console.error("Error building drive structure:", error);
    return NextResponse.json({ error: "Failed to fetch resources" }, { status: 500 });
  }
}