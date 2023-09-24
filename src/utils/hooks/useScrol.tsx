import { useEffect, useState } from 'react';

export const useScroll = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {

    const scroll = () => setScroll(window.scrollY);
    
    document.addEventListener('scroll', scroll);
  } , []);

  return scroll >= 100;
};