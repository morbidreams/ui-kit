import { useState, useEffect } from 'react';

const useElementHeight = (elementId: string) => {
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const updateHeight = () => {
      const element = document.getElementById(elementId);
      if (element) {
        setHeight(element.offsetHeight);
      }
    };

    updateHeight();

    window.addEventListener('resize', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, [elementId]);

  return height;
};

export default useElementHeight;
