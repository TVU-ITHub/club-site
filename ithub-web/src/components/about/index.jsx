import AboutArea from "@/common/about-area";
import React from "react";
import Breadcrumb from "../../common/breadcrumbs/breadcrumb";
import HeroBanner from "../../common/hero-banner";
import CtaArea from "../contact/cta-area";
import TeamArea from "../homes/home-4/team-area";
import Brand from "./brand";
import CompanyArea from "./company-area";
import JobArea from "./job-area";
import JourneyArea from "./journey-area";

const About = () => {
  return (
    <>
      <Breadcrumb title_top="About" title_bottom="ITHub" />
      <HeroBanner title="About" subtitle="ITHub" bg_img="/app-assets/img/banner/breadcrumb-2.png" />
      <Brand />
      <CompanyArea />
      <JourneyArea />
      <AboutArea />
      <TeamArea bg_style={true} />
      <JobArea />
      <CtaArea />
    </>
  );
};

export default About;
