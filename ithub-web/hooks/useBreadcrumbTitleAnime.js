import gsap from 'gsap';
import React, { useRef } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicEffect';

const useBreadcrumbTitleAnime = () => {
  const animeRef = useRef(null)
  useIsomorphicLayoutEffect(() => {
    let tl = gsap.timeline({ default: { ease: "SlowMo.easeOut" } });
    gsap.to(animeRef.current, {
      x: "0px",
      duration: 1,
      opacity: 1,
      stagger: 0.3,
      delay: 0.5,
      scrollTrigger:{
        trigger:animeRef.current
      }
    });
  }, []);

  return {animeRef}
};

export default useBreadcrumbTitleAnime;