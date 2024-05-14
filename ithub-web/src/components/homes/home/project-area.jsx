import project_data from '@/data/project-data';
import RightArrow from '@/svg/right-arrow';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const setting = {
   loop: true,
   slidesPerView: 3,
   centeredSlides: true,
   spaceBetween: 30,
   breakpoints: {
      '1200': {
         slidesPerView: 3,
      },
      '992': {
         slidesPerView: 1,
      },
      '768': {
         slidesPerView: 1,
      },
      '576': {
         slidesPerView: 1,
      },
      '0': {
         slidesPerView: 1,
      },
   },

   scrollbar: {
      el: ".tp-scrollbar",
      clickable: true,
   },
}

const ProjectArea = () => {
   const [isDragged, setIsDragged] = useState(false);

   const handleSlideChange = () => {
      setIsDragged(true);
   };

   const handleTransitionEnd = () => {
      setIsDragged(false);
   };
   return (
      <>
         <div className="tp-project__area grey-bg pt-50 pb-110 fix">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6">
                     <div className="tp-project__section-box wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".3s">
                        <h3 className="tp-section-title">Check Some Of Our Recent Work.</h3>
                     </div>
                  </div>
               </div>
            </div>
            <div className="container-fluid gx-0">
               <div className="row gx-0">
                  <div className="col-xl-12">
                     <div className="tp-project__slider-section">
                        <Swiper
                           {...setting}
                           onSliderMove={handleSlideChange}
                           onTransitionEnd={handleTransitionEnd}
                           modules={[Navigation, Scrollbar]}
                           className={`swiper-container tp-project__slider-active ${isDragged ? "dragged" : ""
                              }`}>
                           {project_data.map((item, i) =>
                              <SwiperSlide
                                 key={i}
                                 className="swiper-slide wow tpfadeUp"
                                 data-wow-duration=".9s"
                                 data-wow-delay={item.delay}
                              >
                                 <div className="tp-project__slider-wrapper">
                                    <div className="tp-project__item d-flex align-items-center">
                                       <div className="tp-project__thumb">
                                          <Image src={item.img_1} alt="theme-pure" />
                                       </div>
                                       <div className="tp-project__content">
                                          <div className="tp-project__brand-icon">
                                             <Image src={item.img_2} alt="theme-pure" />
                                          </div>
                                          <div className="tp-project__title-box">
                                             <h4 className="tp-project__title-sm">
                                                <Link href="/project-details">{item.title}</Link>
                                             </h4>
                                             <p>{item.description}</p>
                                          </div>
                                          <div className="tp-project__meta d-flex align-items-center">
                                             <div className="tp-project__author-info">
                                                <span>Client Name</span>
                                                <h4>{item.client_name}</h4>
                                             </div>
                                             <div className="tp-project__budget">
                                                <span>Budget</span>
                                                <h4>${item.budget}{item.budget_simble}</h4>
                                             </div>
                                             <div className="tp-project__link">
                                                <Link href="/project-details">
                                                   <RightArrow />
                                                </Link>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </SwiperSlide>
                           )}
                        </Swiper>
                        <div className="tp-scrollbar"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default ProjectArea;