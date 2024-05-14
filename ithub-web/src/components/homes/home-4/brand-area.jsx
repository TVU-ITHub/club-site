import React, {useRef} from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

import brand_img_1 from "../../../../public/assets/img/hero/hero-slider-icon-2.jpg";
import brand_img_2 from "../../../../public/assets/img/hero/hero-slider-icon-3.jpg";
import brand_img_3 from "../../../../public/assets/img/hero/hero-slider-icon-4.jpg";
import brand_img_4 from "../../../../public/assets/img/hero/hero-slider-icon-5.jpg";
import brand_img_5 from "../../../../public/assets/img/hero/hero-slider-icon-3.jpg";
import shape_1 from "../../../../public/assets/img/brand/image_01.png";
import shape_2 from "../../../../public/assets/img/hero/hero-slider-icon-1.jpg";


const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false, 
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
}



const brand_data = [
   brand_img_1,
   brand_img_2,
   brand_img_3,
   brand_img_4,
   brand_img_5,
]
const BrandArea = () => {

    const sliderRef = useRef(null)


    return (
        <>
           <div className="tp-barnd-area tp-barnd-plr blue-bg z-index-3 fix">
               <div className="tp-barnd-main-wrapper p-relative">
                  <div className="tp-barnd-shape-1">
                     <Image src={shape_1} alt="theme-pure" />
                  </div>
                  <div className="container">
                     <div className="row align-items-center">
                        <div className="col-xl-4 col-lg-4">
                           <div className="tp-barnd-left-item d-flex align-items-center">
                              <div className="tp-barnd-icon">
                                 <Image src={shape_2} alt="theme-pure" />
                              </div>
                              <h5 className="tp-barnd-title-sm">2k Companies <br /> Trusted in the world</h5>
                           </div>
                        </div>
                        <div className="col-xl-8 col-lg-8">
                           <div className="tp-barnd-slider-wrapper"> 
                              <div className="tp-barnd-slider-active p-relative">
                                  <button type="button" onClick={() => sliderRef.current?.slickPrev()} className="slick-prev"><i className="fal fa-angle-left"></i></button>                           
                                  <button type="button" onClick={() => sliderRef.current?.slickNext()} className="slick-next"><i className="fal fa-angle-right"></i></button>
                                <Slider ref={sliderRef} {...settings}>
                                {brand_data.map((item, i)  => 
                                <div key={i} className="tp-brand-item">
                                    <Image src={item} alt="theme-pure" />
                                 </div>
                                 )} 
                                 </Slider>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div> 
        </>
    );
};

export default BrandArea;