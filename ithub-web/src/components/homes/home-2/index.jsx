import FooterTwo from "@/layout/footers/footer-2";
import HeaderTwo from "@/layout/headers/header-2";
import React from "react";
import CtaArea from "./cta-area";
import FaqArea from "./faq-area";
import HeroArea from "./hero-area";
import OpenAccountArea from "./open-account-area";
import PaymentArea from "./payment-area";
import PaymentMethodArea from "./payment-method-area";
import ServiceArea from "./service-area";
import TestimonialArea from "./testimonial-area";

const HomeTwo = () => {
  return (
    <>

      <HeaderTwo />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="fix">
            <HeroArea />
            <PaymentArea />
            <PaymentMethodArea />
            <ServiceArea />
            <OpenAccountArea />
            <TestimonialArea />
            <FaqArea />
            <CtaArea />
          </main>
          <FooterTwo />
        </div>
      </div>

    </>
  );
};

export default HomeTwo;
