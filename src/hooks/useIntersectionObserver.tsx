import { useState, useEffect } from "react";

interface ObserverOptions {
  threshold: number; //  esle chai tyo id wala element katiko view ma xa herxa (0.0 to 1.0)
}

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
