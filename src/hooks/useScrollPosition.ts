import { useEffect, useState } from 'react';

interface IuseScrollPosition {
  targetId?: string;
  offset?: number;
}

const useScrollPosition = ({ targetId, offset = 0 }: IuseScrollPosition = {}) => {
  const [isTriggered, setIsTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let isAtTarget = false;

      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const { top } = targetElement.getBoundingClientRect();
          isAtTarget = top <= offset;
        }
      } else {
        isAtTarget = window.scrollY > offset;
      }

      setIsTriggered(isAtTarget);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [targetId, offset]);

  return isTriggered;
};

export default useScrollPosition;
