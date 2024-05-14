import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import img_1 from "../../../../public/assets/img/about/about-4-3.png";
import img_2 from "../../../../public/assets/img/about/about-4-1.png";
import img_3 from "../../../../public/assets/img/about/about-4-2.png";

// about content here
const about_content = { 
    sub_title: "Who we are",
    title: "Confidence in Your Security", 
    des: <>These cyberattacks are usually aimed at accessing, changing,or destroying sensitive information normal business processes.!</>,
    feature_1: <>High-Performance <br /> Solutions</>,
    feature_2: <>Best Cyber Security <br /> Solutions.</>,
    btn_text: "About Us",
}

const {sub_title, title, des, feature_1, feature_2, btn_text }  = about_content


const AboutArea = () => {
    return (
        <>
            <div className="tp-about-area pb-135 blue-bg p-relative">
               <div className="tp-about-top-img-2">
                  <Image src={img_1} alt="theme-pure" />
               </div>
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".3s">
                        <div className="tp-about-left-img text-md-center p-relative text-start z-index">
                           <Image src={img_2} alt="theme-pure" />
                           <div className="tp-about-top-img">
                              <Image src={img_3} alt="theme-pure" />
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="tp-security-section-wrapper">
                           <div className="tp-security-section-box mb-45">
                              <h5 className="tp-section-subtitle-4 pb-10">{sub_title}</h5>
                              <h3 className="tp-section-title-4 pb-25">{title}</h3>
                              <p>{des}</p>
                           </div>
                           <div className="tp-security-feature">
                              <ul>
                                 <li><i className="far fa-check"></i>{feature_1}</li>
                                 <li><i className="far fa-check"></i>{feature_2}</li>
                              </ul>
                           </div>
                           <div className="tp-security-btn">
                              <Link className="tp-btn-yellow-border" href="/about">{btn_text}<i className="far fa-angle-right"></i></Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default AboutArea;