import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

// img and icon import here 
import bg_right_img from "../../../../public/assets/img/rank/rank-bg-shape.png" ;
import top_img_1 from "../../../../public/assets/img/rank/rank-cup.png";
import img_1 from "../../../../public/assets/img/rank/amazon.png";
import img_2 from "../../../../public/assets/img/rank/ebay.png";
import img_3 from "../../../../public/assets/img/rank/walmart.png";
import img_4 from "../../../../public/assets/img/rank/shopify.png";
// circle 
import cirimg_1 from "../../../../public/assets/img/rank/sky-circle.png";
import cirimg_2 from "../../../../public/assets/img/rank/yellow-circle.png";
import cirimg_3 from "../../../../public/assets/img/rank/black-circle.png";
import cirimg_4 from "../../../../public/assets/img/rank/black-sm-circle.png";
import cirimg_5 from "../../../../public/assets/img/rank/black-sm-circle.png";
import cirimg_6 from "../../../../public/assets/img/rank/black-sm-circle.png";
import cirimg_7 from "../../../../public/assets/img/rank/black-sm-circle.png";


// rank_data
const rank_data = [
    {
        id: 1,
        clg_1: "active z-index",
        clg_2: "tp-rank__cup",
        top_img: top_img_1,
        count: 1,
        img: img_1,
        // clg_3: "",
        domain: "amazon.com",
        visitors: "2.4B Visits",

    },
    {
        id: 2,
        clg_1: "",
        // clg_2: "",
        // top_img: "",
        count: 2,
        img: img_2,
        // clg_3: "",
        domain: "ebay.com",
        visitors: "700.2M Visits",

    },
    {
        id: 3,
        clg_1: "z-index",
        // clg_2: "",
        // top_img: "",
        count: 3,
        img: img_3,
        // clg_3: "",
        domain: "walmart.com",
        visitors: "489.6M Visits",

    },
    {
        id: 4,
        clg_1: "",
        // clg_2: "",
        // top_img: "",
        count: 4,
        img: img_4,
        // clg_3: "",
        domain: "shopify.com",
        visitors: "386.6M Visits",

    },
]

// circle_shape
const circle_shape  = [
    {
        id: 1, 
        cls:"1 tpfadeUp",
        img: cirimg_1,
        delay: ".3s",
    },
    {
        id: 2, 
        cls:"2 tpfadeLeft",
        img: cirimg_2,
        delay: ".5s",
    },
    {
        id: 3, 
        cls:"3 tpfadeRight",
        img: cirimg_3,
        delay: ".4s",
    },
    {
        id: 4, 
        cls:"4 tpfadeIn",
        img: cirimg_4,
        delay: ".7s",
    },
    {
        id: 5, 
        cls:"5 tpfadeUp",
        img: cirimg_5,
        delay: ".9s",
    },
    {
        id: 6, 
        cls:"6 tpfadeUp",
        img: cirimg_6,
        delay: ".2s",
    },
    {
        id: 7, 
        cls:"7 tpfadeIn",
        img: cirimg_7,
        delay: ".1s",
    },
]

const rank_content = {
    sub_title: "Key Benefits",
    title: <>Get more Sales <br /> by Improving <br /> Results</>,
    btn_text: "Explore More",
    
}
const {sub_title, title, btn_text}  = rank_content
const RankArea = () => {
    return (
        <>
            <div className="tp-rank__area pb-200">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-5 col-lg-5 order-1 order-lg-1">
                        <div className="tp-rank__section-box pb-25 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                           <h4 className="tp-section-subtitle">{sub_title}</h4>
                           <h3 className="tp-section-title">{title}</h3>
                        </div>
                        <div className="tp-rank__btn wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                           <Link className="tp-btn tp-btn-hover alt-color-black" href="/service-details">
                              <span>{btn_text}</span>
                              <b></b>
                           </Link>
                        </div>
                     </div>
                     <div className="col-xl-7 col-lg-7 order-0 order-lg-2">
                        <div className="tp-rank__wrapper p-relative">

                            {circle_shape.map((item, i )  => 
                                <div key={i} 
                                className={`tp-rank__circle-shape-${item.cls} d-none d-sm-block wow`} 
                                data-wow-duration=".9s" 
                                data-wow-delay={item.delay}>
                                    <Image src={item.img} alt="circle" />
                                </div>
                                
                             )}

                           <div className="tp-rank__bg-shape">
                              <Image className="wow tpfadeRight" 
                              data-wow-duration=".9s" 
                              data-wow-delay="1.2s" 
                              src={bg_right_img} alt={title} />
                           </div>


                           <div className="tp-rank__rank-card wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">

                            {rank_data.map((item, i)  => 
                                <div key={i} className={`tp-rank__item p-relative ${item.clg_1}`}>
                                {item.top_img && 
                                <div className="tp-rank__cup">
                                <span><Image src={item.top_img} alt="" /></span>
                                </div>}

                                <div className="tp-rank__number d-flex align-items-center justify-content-center">
                                <i>#</i>
                                <span>{item.count}</span>
                                </div>
                                <div className="tp-rank__company">
                                <span><Image src={item.img} alt="" /></span>
                                </div>
                                <div className="tp-rank__company-info">
                                <Link href="#">{item.domain} </Link> 
                                <span>{item.visitors}</span>
                                </div>
                            </div>
                                )
                            }
                           </div>

                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default RankArea;