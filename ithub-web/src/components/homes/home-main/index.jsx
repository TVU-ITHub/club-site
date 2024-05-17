import React from "react";
import HeroSlider from "../home/hero-slider";
import FeatureArea from "../home/feature-area";
import TeamArea from "../home-4/team-area";
import Portfolio from "@/components/blog-list/portfolio";
import PaymentMethodArea from "../home-2/payment-method-area";

const HomeMain = () => {
  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="fix" style={{ minHeight: 1000 }}>
            <HeroSlider />
            <FeatureArea />
            <Portfolio />
            <PaymentMethodArea />
          </main>
        </div>
      </div>
    </>
  );
};

export default HomeMain;
