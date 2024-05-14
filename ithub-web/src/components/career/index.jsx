import BreadcrumbThree from "@/common/breadcrumbs/breadcrumb-3";
import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import React from "react";
import PlatformArea from "../../common/platform-area";
import JobArea from "../about/job-area";
import CtaArea from "../contact/cta-area";
import CarrerBanner from "./carrer-banner";

const Career = () => {
  return (
    <>
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main> 
            <BreadcrumbThree />
            <CarrerBanner />
            <PlatformArea style_carrer={true} />
            <JobArea style_carrer={true} />
            <CtaArea />
          </main>
          <FooterFive style_contact={true} style_team={true}/>
        </div>
      </div>
    </>
  );
};

export default Career;
