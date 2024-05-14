import gsap  from "gsap";
import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicEffect";

const useCharAnimation = (cls) => {
  useIsomorphicLayoutEffect(() => {
    // const text = titleRef.current;

    // // Split the text into individual characters
    // const chars = text.innerText.split('');
    // text.innerText = '';

    // // Create a span element for each character
    // chars.forEach(char => {
    //   const charSpan = document.createElement('span');
    //   charSpan.innerText = char;
    //   text.appendChild(charSpan);
    // });

    // // Set initial styles
    // const t1 = gsap.timeline()
    // gsap.set(text.children, { opacity: 0, y: 50 });

    // // Animate in
    // t1.to(text.children, {
    //   duration: 0.1,
    //   stagger: 0.1,
    //   opacity: 1,
    //   y: 0,
    //   ease: 'power4.easeOut',
    // });
    let tl = gsap.timeline({ default: { ease: "SlowMo.easeOut" } });
      tl.to(cls, { y: "0px", duration: 1, opacity: 1, stagger: 0.3, delay: .5 });
  }, []);

};

export default useCharAnimation;
