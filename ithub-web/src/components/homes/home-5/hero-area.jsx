import LineShapTwo from '@/svg/line-shap-2';
import {gsap} from 'gsap';
import Link from 'next/link';
import Image from 'next/image';
import React, {useEffect} from 'react';

// import shape images
import shape_1 from "../../../../public/assets/img/hero/hero-circle-5-1.png";
import shape_2 from "../../../../public/assets/img/hero/hero-circle-5-2.png";
import shape_3 from "../../../../public/assets/img/hero/hero-circle-5-3.png";
import shape_4 from "../../../../public/assets/img/hero/hero-shape-5-1-1.png";
import shape_5 from "../../../../public/assets/img/hero/home-shape-1-1.png";
import shape_6 from "../../../../public/assets/img/hero/home-shape-1-2.png";


const HeroArea = () => { 
   useEffect(() => {
      let tl = gsap.timeline({default:{ease:"SlowMo.easeOut"}});
		tl.to(".hero-text-anim-2 i.child-2", {y: "0px", duration: .9, opacity:1, stagger:0.3, delay:.3});
   })
   
    return (
        <>
            <div className="tp-hero-area tp-hero-five__ptb-5 p-relative grey-bg-2 fix">
                  <div className="tp-hero-five__shape-2">
                     <Image src={shape_1} alt="theme-pure" />
                  </div>
                  <div className="tp-hero-five__shape-3">
                     <Image src={shape_2} alt="theme-pure" />
                  </div>
                  <div className="tp-hero-five__shape-4">
                     <Image src={shape_3} alt="theme-pure" />
                  </div>
                  <div className="container">
                     <div className="row align-items-center">
                        <div className="col-xl-7 col-lg-6 order-2">
                           <div className="tp-hero-five-section-wrap">
                              <div className="tp-hero-five-section-box z-index">
                                 <h3 className="tp-hero-title-5 hero-text-anim-2">
                                    <i><i className="child-2">Offer The <br /></i></i>
                                    <i>
                                       <i className="child-2">
                                          Best <span className="child-1 p-relative">Business 
                                          <LineShapTwo />  
                                          </span>  
                                          <br /> 
                                       </i>
                                    </i>
                                    <i><i className="child-2"><span className="child-2">Management</span> With <br /></i></i>
                                    <i><i className="child-2">Software</i></i>
                                 </h3>
                                 <p className="wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">A simple solution for building the optimal work <br /> schedule for your business.</p>
                              </div>
                              <div className="tp-hero-five-btn-box d-flex align-items-center wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                                 <Link className="tp-btn-blue-lg purple-bg circle-effect mr-15 mb-20" href="/">Get Started</Link>
                                 <Link className="tp-btn-grey mb-20" href="/service-details">Try a Damo</Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="tp-hero-five-2-thumb-main p-relative">
                     <div className="tp-hero-five-2-thumb">
                        <Image src={shape_4} className="tp-hero-five-2-thumb-inner" alt="theme-pure" />
                     </div>
                     <div className="tp-hero-five-2-sub-img-1 d-none d-md-block">
                        <Image src={shape_5} alt="theme-pure" />
                     </div>
                     <div className="tp-hero-five-2-sub-img-2 d-none d-md-block">
                        <Image src={shape_6} alt="theme-pure" />
                     </div>
                  </div>
               </div>
        </>
    );
};

export default HeroArea;