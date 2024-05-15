import HeaderFive from "@/layout/headers/header-5";
import React from "react";

const HomeMain = () => {
  return (
    <>
      <HeaderFive />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="fix"></main>
        </div>
      </div>
    </>
  );
};

export default HomeMain;
