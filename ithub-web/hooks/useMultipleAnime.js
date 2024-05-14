import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

const useMultipleAnime = () => {
  
  const dataRef = useRef(null);

  useEffect(() => {
    if (dataRef.current) {
      gsap.from(dataRef.current.children, {
        delay: dataRef.current.dataset.index * 0.15,
        duration: 1,
        y: '+100',
        autoAlpha: 0,
        ease: 'back.out(1.7)',
        stagger: 0.25,
        scrollTrigger: {
          trigger: dataRef.current.children,
          start: 'top 90%',
        },
      });
    }
  }, []);

  return {dataRef}
};

export default useMultipleAnime;