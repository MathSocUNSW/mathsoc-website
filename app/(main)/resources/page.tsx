"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Wave from "../(components)/waves-bg";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Download,
  FileText,
  Folder,
  Search,
  SquareArrowOutUpRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import SymbolExplosion from "../(components)/symbol-explode";
import Image from "next/image";

interface DriveFile {
  id: string;
  name: string;
  mimeType: string;
  webViewLink?: string;
  webContentLink?: string;
}

interface Subfolder {
  id: string;
  name: string;
  files: DriveFile[];
}

interface DriveFolder {
  id: string;
  name: string;
  subfolders: Subfolder[];
}

const FOLDER_MIME_TYPE = "application/vnd.google-apps.folder";
const ROOT_FOLDER_ID = "1v7WrVhAzZxtIhkEXeDMUiaoKF8jHkV96";

const Resources: React.FC = () => {
  const [folders, setFolders] = useState<DriveFolder[]>([]);
  const [openFolders, setOpenFolders] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const getFolderContents = async (folderId: string): Promise<any[]> => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${process.env.NEXT_PUBLIC_GOOGLE_DRIVE_API_KEY}&fields=files(id,name,mimeType,parents,webViewLink,webContentLink)`
      );

      const data = await res.json();
      return data.files;
    } catch (error) {
      console.error("Error fetching folder content:", error);
      return [];
    }
  };

  const buildFolderStructure = async () => {
    try {
      // Get all folders
      const topLevelItems = await getFolderContents(ROOT_FOLDER_ID);
      const topLevelFolders = topLevelItems.filter(
        (item) => item.mimeType === FOLDER_MIME_TYPE
      );
      const folderStructure: DriveFolder[] = [];

      // For each folder, get its subfolders and files
      for (const folder of topLevelFolders) {
        const subfolderItems = await getFolderContents(folder.id);
        const subfolders: Subfolder[] = [];
        const subfolderList = subfolderItems.filter(
          (item) => item.mimeType === FOLDER_MIME_TYPE
        );

        // Add each file into subfolders
        for (const subfolder of subfolderList) {
          const subfolderContents = await getFolderContents(subfolder.id);
          // Get all elements that are not of type folder (files)
          const files = subfolderContents.filter(
            (item) => item.mimeType !== FOLDER_MIME_TYPE
          );

          subfolders.push({
            id: subfolder.id,
            name: subfolder.name,
            files: files,
          });
        }

        const directFiles = subfolderItems.filter(
          (item) => item.mimeType !== FOLDER_MIME_TYPE
        );
        if (directFiles.length > 0) {
          subfolders.unshift({
            id: `${folder.id}_direct`,
            name: "Direct Files",
            files: directFiles,
          });
        }

        folderStructure.push({
          id: folder.id,
          name: folder.name,
          subfolders: subfolders,
        });
      }

      setFolders(folderStructure);
      localStorage.setItem(
        "mathsoc_resources",
        JSON.stringify(folderStructure)
      );
    } catch (error) {
      console.error("Error building folder structure:", error);
      setError("Failed to load resources. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const toggleFolder = (folderId: string) => {
    setOpenFolders((prev) => ({
      ...prev,
      [folderId]: !prev[folderId],
    }));
  };

  useEffect(() => {
    const cached = localStorage.getItem("mathsoc_resources");

    if (cached) {
      const parsed = JSON.parse(cached);
      setFolders(parsed);
      setLoading(false);
    } else {
      buildFolderStructure();
    }
  }, []);

  // Loading page
  if (loading) {
    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-[100vh]"
      >
        {/* Wave background underneath navbar */}
        <div className="relative">
          <Wave containerId="about-wave" rotation={0} />

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full py-8 sm:py-12 flex justify-center px-6 sm:px-12 lg:px-16"
          >
            <div className="flex flex-col items-center"></div>
          </motion.section>
        </div>

        <motion.div
          className="text-center px-24 py-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-bold pb-2">Resources</h1>
          <p className="text-sm font-normal text-gray-400">
            Explore a curated collection of resources to support your studies.
            Find past exam papers, revision lecture recordings and summary
            sheets, and helpful guides on LaTeX, R, and more.
          </p>

          <div className="flex flex-col items-center space-y-12 pt-24">
            <div className="relative">
              <SymbolExplosion explosionDelay={0} constantExplosion={true}>
                <motion.div
                  className="w-32 h-32 border-4 border-slate-500 border-t-blue-600 bg-[#020817] rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/images/mathsoc-logo.svg"
                    alt="MathSoc Logo"
                    width={150}
                    height={50}
                    className="h-10 w-auto invert"
                    priority
                  />
                </motion.div>
              </SymbolExplosion>
            </div>

            <motion.p
              className="text-xl font-medium"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Loading Resources...
            </motion.p>
          </div>
        </motion.div>
      </motion.section>
    );
  }

  // Error page
  if (error) {
    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="min-h-[100vh]"
      >
        {/* Wave background underneath navbar */}
        <div className="relative">
          <Wave containerId="about-wave" rotation={0} />

          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full py-8 sm:py-12 flex justify-center px-6 sm:px-12 lg:px-16"
          >
            <div className="flex flex-col items-center"></div>
          </motion.section>
        </div>

        {/* Resources, description and error */}
        <motion.div
          className="text-center px-8 py-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-bold pb-2">Resources</h1>
          <p className="text-sm font-normal text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            vitae posuere massa. Proin vel ante tellus. Curabitur in orci id
            ligula pellentesque malesuada.{" "}
          </p>

          <p className="text-lg text-red-400 mt-4">{error}</p>
        </motion.div>
      </motion.section>
    );
  }

  // Filtering folders based on search query
  const filteredFolders = folders
    .map((folder) => {
      const matchedSubfolders = folder.subfolders
        .map((sub) => ({
          ...sub,
          files: sub.files.filter((file) =>
            file.name.toLowerCase().includes(searchQuery)
          ),
        }))
        .filter(
          (sub) =>
            sub.name.toLowerCase().includes(searchQuery) || sub.files.length > 0
        );

      const folderMatches = folder.name.toLowerCase().includes(searchQuery);

      if (folderMatches || matchedSubfolders.length > 0) {
        return {
          ...folder,
          subfolders: matchedSubfolders,
        };
      }

      return null;
    })
    .filter((folder) => folder !== null) as DriveFolder[];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-[100vh]"
    >
      {/* Wave background underneath navbar */}
      <div className="relative">
        <Wave containerId="about-wave" rotation={0} />

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full py-8 sm:py-12 flex justify-center px-6 sm:px-12 lg:px-16"
        >
          <div className="flex flex-col items-center"></div>
        </motion.section>
      </div>

      {/* Resources and description */}
      <motion.div
        className="text-center px-24 py-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-bold pb-2">Resources</h1>
        <p className="text-sm font-normal text-gray-400">
          Explore a curated collection of resources to support your studies.
          Find past exam papers, revision lecture recordings and summary sheets,
          and helpful guides on LaTeX, R, and more.
        </p>
      </motion.div>

      {/* Search bar and filter button */}
      <div className="flex gap-4 px-8 pt-4 mx-10 md:mx-24">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#9ca3af] w-5 h-5" />
          <Input
            value={searchQuery}
            placeholder="Search resources (e.g. MATH1081)"
            className="pl-12 bg-[#333e59] border-[#556080] text-white placeholder:text-[#9ca3af] h-12"
            onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
          />
        </div>
      </div>

      {/* All resource folders */}
      <div className="space-y-4 px-8 pt-8 mx-10 md:mx-24 pb-20">
        {filteredFolders.length === 0 ? (
          <div className="text-center text-gray-400 text-lg pt-4">
            No matching resources found
          </div>
        ) : (
          filteredFolders
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((folder) => (
              <Collapsible
                key={folder.id}
                open={openFolders[folder.id] || false}
                onOpenChange={() => toggleFolder(folder.id)}
                className="bg-[#333e59] rounded-lg w-full"
              >
                {/* Folder name */}
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full justify-between hover:bg-[#272f45] text-white h-auto px-6 py-6"
                  >
                    <div className="flex items-center space-x-2">
                      <Folder className="w-5 h-5" />
                      <p className="text-lg font-semibold">{folder.name}</p>
                    </div>

                    <motion.div
                      animate={{ rotate: openFolders[folder.id] ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </Button>
                </CollapsibleTrigger>

                {/* Folder content */}
                <CollapsibleContent className="mt-4 px-6 pb-4">
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {/* Card for each subfolder */}
                      {folder.subfolders
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((subfolder, index) => (
                          <motion.div
                            key={subfolder.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: index * 0.1,
                              ease: "easeOut",
                            }}
                          >
                            <Card
                              key={subfolder.id}
                              className="bg-[#272F45] border-[#556080] rounded-lg"
                            >
                              {/* Subfolder name */}
                              <CardHeader className="py-5 bg-[#1F2537] rounded-t-lg">
                                <CardTitle className="text-white text-lg flex items-center space-x-2">
                                  <span>{subfolder.name}</span>
                                </CardTitle>
                              </CardHeader>

                              {/* Subfolder content */}
                              <CardContent className="pt-4">
                                {/* Number of resources */}
                                <div className="flex items-center justify-between mb-4">
                                  <span className="text-white font-medium">
                                    Files
                                  </span>
                                  <Badge
                                    variant="secondary"
                                    className="bg-[#2b52c8] text-white"
                                  >
                                    {subfolder.files.length} Resource
                                    {subfolder.files.length !== 1 ? "s" : ""}
                                  </Badge>
                                </div>

                                {/* Subfolder files */}
                                <div className="space-y-2 max-h-60 overflow-y-auto">
                                  {/* Each file */}
                                  {subfolder.files.length > 0 ? (
                                    subfolder.files
                                      .sort((a, b) =>
                                        a.name.localeCompare(b.name)
                                      )
                                      .map((file) => (
                                        <div
                                          key={file.id}
                                          className="flex items-center justify-between bg-[#556080] rounded-lg p-3"
                                        >
                                          <div className="flex items-center space-x-2 flex-1 min-w-0">
                                            <span className="text-lg">
                                              <FileText className="w-4 h-4" />
                                            </span>

                                            {/* File name */}
                                            <span
                                              className="text-white text-sm truncate"
                                              title={file.name
                                                .replaceAll("_", " ")
                                                .replaceAll("-", " ")
                                                .replace(".pdf", "")}
                                            >
                                              {file.name
                                                .replaceAll("_", " ")
                                                .replaceAll("-", " ")
                                                .replace(".pdf", "")}
                                            </span>
                                          </div>

                                          {/* Open and download buttons */}
                                          <div className="flex space-x-1 ml-2">
                                            {file.webViewLink && (
                                              <Button
                                                size="sm"
                                                variant="ghost"
                                                className="text-white hover:bg-[#333e59] p-2"
                                                onClick={() =>
                                                  window.open(
                                                    file.webViewLink,
                                                    "_blank"
                                                  )
                                                }
                                              >
                                                <SquareArrowOutUpRight className="w-4 h-4" />
                                              </Button>
                                            )}
                                            {/* {file.webContentLink && (
                                  <Button
                                    size="sm"
                                    variant="ghost"
                                    className="text-white hover:bg-[#333e59] p-1"
                                    onClick={() =>
                                      window.open(file.webContentLink, "_blank")
                                    }
                                  >
                                    <Download className="w-4 h-4" />
                                  </Button>
                                )} */}
                                          </div>
                                        </div>
                                      ))
                                  ) : (
                                    <div className="text-gray-400 text-sm text-center py-4">
                                      No files found in this folder
                                    </div>
                                  )}
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                    </div>
                  </motion.div>
                </CollapsibleContent>
              </Collapsible>
            ))
        )}
      </div>
    </motion.section>
  );
};

export default Resources;
