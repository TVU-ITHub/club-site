import React, { useState, useEffect } from "react";
import useSticky from "./use-sticky";

const ScrollToTop = () => {
  const { sticky } = useSticky();

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <>
      {/* <!-- Scroll-top --> */}
      <button
        onClick={scrollTop}
        className={`scroll-top scroll-to-target ${sticky ? "open" : ""}`}
        data-target="html"
      >
         <i className="far fa-angle-double-up"></i>
      </button>
       {/* <button onClick={scrollTop} className="scroll-top scroll-to-target" data-target="html">
          <i className="far fa-angle-double-up"></i>
      </button> */}
      {/* <!-- Scroll-top-end--> */}
    </>
  );
};

export default ScrollToTop;
