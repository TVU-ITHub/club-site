import React from "react";
import HeroSlider from "../home/hero-slider";

const HomeMain = () => {
  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="fix" style={{ minHeight: 1000 }}>
            <HeroSlider />
          </main>
        </div>
      </div>
    </>
  );
};

export default HomeMain;
