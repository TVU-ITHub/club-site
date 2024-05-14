import PriceArea from "@/common/price-area";
import FooterFour from "@/layout/footers/footer-4";
import HeaderFour from "@/layout/headers/header-4";
import React from "react";
import AboutArea from "./about-area";
import BlogArea from "./blog-area";
import BrandArea from "./brand-area";
import ContactArea from "./contact-area";
import FunFactArea from "./fun-fact-area";
import HeroArea from "./hero-area";
import PlatformArea from "../../../common/platform-area";
import SecurityArea from "./security-area";
import ServiceArea from "./service-area";
import TeamArea from "./team-area"; 

const HomeFour = () => {
  return (
    <> 
      <HeaderFour />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="fix">
            <HeroArea />
            <BrandArea />
            <ServiceArea />
            <AboutArea />
            <FunFactArea />
            <PlatformArea />
            <PriceArea />
            <TeamArea />
            <SecurityArea />
            <BlogArea />
            <ContactArea />
          </main>
          <FooterFour />
        </div>
      </div>
    </>
  );
};

export default HomeFour;
