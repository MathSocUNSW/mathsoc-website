import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Import shadcn button

interface BlockColumnProps {
  heading: string;
  content: string;
  image?: string;
  imagePosition?: "left" | "right";
  buttonText?: string;
  buttonLink?: string;
}

export const BlockColumn: React.FC<BlockColumnProps> = ({
  heading,
  content,
  image,
  imagePosition = "left",
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="flex items-center justify-center px-4 sm:px-8 md:px-12 py-8 sm:py-12">
      <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-5xl">
        {image && imagePosition === "left" && (
          <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={heading}
                fill
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        )}

        <div className="w-full md:w-1/2 text-left md:text-left">
          <h1 className="text-3xl font-bold text-left text-white mb-6">{heading}</h1>
          <p className="text-white text-left text-xl mb-6">{content}</p>

          {buttonText && buttonLink && (
            <Link href={buttonLink} passHref>
              <Button className="mt-6 w-full sm:w-auto px-6 py-3 rounded-full text-lg">
                {buttonText}
              </Button>
            </Link>
          )}
        </div>

        {image && imagePosition === "right" && (
          <div className="w-full md:w-1/2 rounded-lg overflow-hidden">
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={heading}
                fill
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
