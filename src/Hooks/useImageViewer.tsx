
import { useState } from "react";

const useImageViewer = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const openViewer = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setTimeout(() => setIsAnimating(true), 10); // Delay
  };

  const closeViewer = () => {
    setIsAnimating(false); // fade-out
    setTimeout(() => setSelectedImage(null), 300); // Delay 
  };

  return { selectedImage, isAnimating, openViewer, closeViewer };
};

export default useImageViewer;
