import React from 'react';

interface BlockColumnProps {
    heading: string,
    content: string;
    image?: string;
}

export const BlockColumn: React.FC<BlockColumnProps> = ({ heading, content, image }) => {
    // for any vars
    
    return (
        <div>
            {image && (
                <div className="relative mb-4 h-48 w-full">
                    {image}
                </div>
            )}
            <h1 className="text-2xl font-bold mb-4">{heading}</h1>
            <p className="text-white">{content}</p>
        </div>
    )
}