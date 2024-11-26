import { useState, useEffect } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        className="fixed bottom-4 right-4 bg-yellow-200 text-black rounded-full p-3 hover:bg-secondary flex items-center justify-center"
        onClick={scrollToTop}
      >
        <FaLongArrowAltUp className="w-5 h-5" />
      </button>
    )
  );
};

export default ScrollToTop;
