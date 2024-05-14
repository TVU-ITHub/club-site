import testimonial_data from '@/data/testimonial-data';
import testimonial_svg from '@/data/testimonial-svg';
import RightArrow from '@/svg/right-arrow';
import StartTwo from '@/svg/start-2';
import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import React,{useState, useEffect, useRef} from 'react';
import Slider from 'react-slick'; 


const tp_setting = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false, 
}

const brands_setting  = {	
    slidesToShow: 5,
    slidesToScroll: 1, 
    dots: false,
    arrows: false,
    focusOnSelect: true,
    centerPadding: '0',
    centerMode: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
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
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 1,
            }
        }
        
    ]
}

const TestimonialArea = () => { 
   const sliderRef = useRef(null)
   const [slider1, setSlider1] = useState(null);
   const [slider2, setSlider2] = useState(null);
   
   let g_title = new gsap.timeline(); 
   let title_anim = useRef(null)        
    useEffect(() => {   
        g_title.from(title_anim.current, {  
            duration: 1, 
            delay: 0.3, 
            opacity: 0, 
            rotationX: -60, 
            force3D: true, 
            transformOrigin: "top center -50", 
            stagger: 0.2             
        }); 
    });


    return (
        <>
        <div className="tp-testimonial__area pt-105 pb-200 fix">
               <div className="container">

                  <div className="row justify-content-center">
                     <div className="col-xl-6">
                        <div className="tp-testimonial__section-box text-center">
                           <h3 className="tp-section-title">Word From Our Client</h3>
                           <p>5 Stars Based on 4,700+ Real Users Reviews</p>
                           <div className="tp-testimonial__rating">
                                 <StartTwo />    
                                 <StartTwo />    
                                 <StartTwo />    
                                 <StartTwo />    
                                 <StartTwo />                                   
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="row justify-content-center mt-50">
                     <div className="col-xl-10">
                        <div className="tp-testimonial__slider-section">

                           <Slider 
                           asNavFor={slider2} 
                           // ref={sliderRef} 
                           ref={(slider) => setSlider1(slider)}
                           {...tp_setting} 
                           className="tp-testimonial__slider-active wow tpfadeUp" 
                           data-wow-duration=".9s" 
                           data-wow-delay=".5s">
                            {testimonial_data.slice(0, 12).map((item, i)  => 
                              <div key={i} className="tp-testimonial__wrapper-main">
                                 <div className="tp-testimonial__wrapper">
                                    <div className="row gx-0">
                                       <div className="col-xl-7 col-lg-7">
                                          <div className="tp-testimonial__left-item p-relative">
                                             <div className="tp-testimonial__logo">
                                                <Image src={item?.img} alt="theme-pure" />
                                             </div>
                                             <div className="tp-testimonial__content z-index">
                                                <p>{item.description} </p>
                                             </div>
                                             <div className="tp-testimonial__author-info z-index">
                                                <span>{item.name}</span>
                                                <i>{item.title}</i>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="col-xl-5 col-lg-5">
                                          <div className="tp-testimonial__right-item d-flex flex-column justify-content-between">
                                             <div className="tp-testimonial__increase">
                                                <span>{item.count}%</span>
                                                <p>{item.sub_des}</p>
                                             </div>
                                             <div className="tp-testimonial__link">
                                                <Link href="#">
                                                   Read Case Study
                                                   <RightArrow />
                                                </Link>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>                                
                            )}

                           </Slider>

                           <Slider
                           asNavFor={slider1} ref={(slider) => setSlider2(slider)}
                           {...brands_setting} 
                           className="tp-testimonial__img-active mt-50">
                            {testimonial_svg.map((item, i)  => 
                                <div key={i} className="tp-testimonial__img-wrap tp-title-anim" ref={title_anim}>
                                 <div className="tp-testimonial__img-item">
                                    {item?.svg_img}  
                                 </div>
                              </div>    
                            )} 
                           </Slider>
                        </div>
                     </div>
                  </div>


               </div>
            </div>            
        </>
    );
};

export default TestimonialArea;