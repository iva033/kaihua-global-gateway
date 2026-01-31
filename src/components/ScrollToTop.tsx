import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // Don't scroll to top if we have scrollTo parameter (used for homepage navigation)
    const params = new URLSearchParams(search);
    if (params.get('scrollTo')) {
      return;
    }
    
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname, search]);

  return null;
};

export default ScrollToTop;
