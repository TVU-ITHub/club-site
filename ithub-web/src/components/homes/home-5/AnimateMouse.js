import { AppContext } from "@/context/ContextProvider";
import Link from "next/link";
import React, { useContext, useEffect, useRef } from "react";

const AnimateMouse = () => {
  const {isEnter} = useContext(AppContext);
  const eRef = useRef(null);
  const tRef = useRef(null);
  let n,
    i = 0,
    o = false;

  useEffect(() => {
    const handleMouseMove = (s) => {
      if (!o) {
        tRef.current.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`;
      }
      eRef.current.style.transform = `translate(${s.clientX}px, ${s.clientY}px)`;
      n = s.clientY;
      i = s.clientX;
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <React.Fragment>
      <div
        ref={eRef}
        style={{ visibility: "visible" }}
        className={`mouseCursor cursor-outer ${isEnter ? "cursor-big" : ""}`}
      ></div>
      <div
        ref={tRef}
        className={`mouseCursor cursor-inner ${isEnter ? "cursor-big" : ""}`}
        style={{ visibility: "visible" }}
      >
        <Link  href="#"><i className="fas fa-play"></i></Link>
      </div>
    </React.Fragment>
  );
};

export default AnimateMouse;
