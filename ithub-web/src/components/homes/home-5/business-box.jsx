import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import shape_1 from "../../../../public/assets/img/cta/cta-shape-5-1.png";
import shape_2 from "../../../../public/assets/img/cta/cta-shape-5-2.png";

const business_content = {
    bg_img: "/assets/img/cta/cta-bg-5-1.png",
    sub_title: "All-in-one Business Manager",
    title: <>Supercharge Your Growing <br /> <span>Business</span> </>,
    btn_text: "Get Started Free"

}
const {bg_img, sub_title, title, btn_text}  = business_content
const BusinessBox = () => {
    return (
        <>
        <div className="tp-cta-area pt-120 pb-120 mb-120 tp-cta-five-bg p-relative" style={{backgroundImage: `url(${bg_img})`}}>
               <div className="tp-cta-five-shape-1 d-none d-md-block">
                  <Image src={shape_1} alt="theme-pure" />
               </div> 
               <div className="tp-cta-five-shape-2 d-none d-md-block">
                  <Image src={shape_2} alt="theme-pure" />
               </div> 
                  <div className="container-fluid g-0">
                     <div className="row g-0">
                        <div className="col-12">
                           <div className="tp-cta-five-section-box text-center">
                              <span className="tp-section-subtitle-5">{sub_title}</span>
                              <h3 className="tp-section-title-5 pb-30">{title}</h3>
                              <div className="tp-cta-five-btn">
                                 <Link className="tp-btn-yellow-lg circle-effect" href="/contact">{btn_text}</Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>            
        </>
    );
};

export default BusinessBox;