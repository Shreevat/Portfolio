// src/hooks/useIntersectionObserver.tsx

import { useState, useEffect } from "react";

// Define the type for options passed to the observer
interface ObserverOptions {
  threshold: number; //  esle chai tyo id wala element katiko view ma xa herxa (0.0 to 1.0)
}


// this is to racks whether anelement with a `id` is in view
const useIntersectionObserver = (id: string, options: ObserverOptions) => {
  // State 
  const [isInView, setIsInView] = useState(false);

  // Effect halne ra hataune
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      options 
    );

    const startPoint = document.getElementById(id);
    if (startPoint) {
      observer.observe(startPoint);
    }

    //yo bhayena bhane kaile kahi second wala ma chai effect kam gardaina
    return () => {
      if (startPoint) {
        observer.unobserve(startPoint);
      }
    };
  }, [id, options]); 


  return isInView;
};

export default useIntersectionObserver;
