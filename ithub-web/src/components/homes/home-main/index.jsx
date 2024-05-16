import React from "react";
import HeroArea from "./hero-area";

const HomeMain = () => {
  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="fix" style={{ minHeight: 1000 }}>
            <HeroArea />
          </main>
        </div>
      </div>
    </>
  );
};

export default HomeMain;
