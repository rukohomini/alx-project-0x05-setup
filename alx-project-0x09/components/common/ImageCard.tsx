import React from "react";

interface ImageCardProps {
  imageUrl: string;
  prompt: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, prompt }) => {
  return (
    <div className="border rounded-lg shadow p-2">
      <img src={imageUrl} alt={prompt} className="w-full h-auto rounded" />
      <p className="mt-2 text-sm text-gray-600">{prompt}</p>
    </div>
  );
};

export default ImageCard;


