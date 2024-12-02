// src/hooks/useIntersectionObserver.tsx
import { useState, useEffect } from "react";

interface ObserverOptions {
  threshold: number;
}

const useIntersectionObserver = (id: string, options: ObserverOptions) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    }, options);

    const startPoint = document.getElementById(id);
    if (startPoint) {
      observer.observe(startPoint);
    }

    return () => {
      if (startPoint) {
        observer.unobserve(startPoint);
      }
    };
  }, [id, options]);

  return isInView;
};

export default useIntersectionObserver;
