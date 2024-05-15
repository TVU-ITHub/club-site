import FooterTwo from "@/layout/footers/footer-2";
import HeaderFour from "@/layout/headers/header-4";
import React from "react";

const HomeMain = () => {
  return (
    <>
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="fix" style={{ minHeight: 1000 }}></main>
        </div>
      </div>
    </>
  );
};

export default HomeMain;
