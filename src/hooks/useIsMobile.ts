import { useCallback, useEffect, useState } from 'react';
import Breakpoints from '../app/theme/Breakpoints';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean | undefined>();

  const updateIsMobile = useCallback(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= parseInt(Breakpoints['mobile-end'], 10));
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    updateIsMobile();

    window.addEventListener('resize', updateIsMobile);

    return () => {
      window.removeEventListener('resize', updateIsMobile);
    };
  }, [updateIsMobile]);

  return isMobile;
};

export default useIsMobile;
