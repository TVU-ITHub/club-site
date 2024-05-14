import BreadcrumbSeven from "@/common/breadcrumbs/breadcrumb-7";
import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import React from "react";
import CtaArea from "../contact/cta-area";
import Portfolio from "./portfolio";

const Project = () => {
  return (
    <>
      <HeaderSix style_2={true} />
      <main>
        <BreadcrumbSeven />
        <Portfolio />
        <CtaArea />
      </main>
      <FooterFive style_contact={true}  style_team={true} />
    </>
  );
};

export default Project;
