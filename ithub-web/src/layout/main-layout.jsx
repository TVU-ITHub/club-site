import React from "react";
import HeaderFour from "./headers/header-4";
import FooterTwo from "./footers/footer-2";

function MainLayout({ children, white_header = false, style_error = true }) {
  return (
    <>
      <HeaderFour white_header={white_header} style_error={style_error} />
      {children}
      <FooterTwo />
    </>
  );
}

export default MainLayout;
