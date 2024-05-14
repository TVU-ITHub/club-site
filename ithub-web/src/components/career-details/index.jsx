import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import React from "react";
import JobArea from "../about/job-area";
import CtaArea from "../contact/cta-area";
import CareerDetailsArea from "./career-details-area";

const CareerDetails = () => {
  return (
    <>
      <HeaderSix />
      <main>
      <BreadcrumbTwo title={"Careers Details"} innertitle={" Careers page"} career_details={true} />
      <CareerDetailsArea />
      <JobArea style_carrer={true}/>
      <CtaArea />
      </main>
      <FooterFive style_contact={true} style_team={true} />
    </>
  );
};

export default CareerDetails;
