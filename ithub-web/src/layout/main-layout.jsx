import React from "react";
import HeaderFour from "./headers/header-4";

function MainLayout({ children, white_header = false, style_error = true }) {
  return (
    <>
      <HeaderFour white_header={white_header} style_error={style_error} />
      {children}
    </>
  );
}

export default MainLayout;
