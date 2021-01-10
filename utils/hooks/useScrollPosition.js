import { useState, useEffect } from 'react';

export default function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollPositionBottom, setScrollPositionBottom] = useState(0);

  useEffect(() => {
    function setScroll(){
      setScrollPosition(window.scrollY);
      setScrollPositionBottom(window.scrollY + window.innerHeight);
    }
    setScroll();
    window.addEventListener('scroll', setScroll);
    return () => window.removeEventListener('scroll', setScroll);
  }, []);

  return {
    scrollPosition,
    scrollPositionBottom,
  };
}
