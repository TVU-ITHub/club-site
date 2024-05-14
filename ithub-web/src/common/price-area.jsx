import Link from 'next/link';
import React from 'react';
import NoticIcon from '../svg/notic-icon';

import header_img  from "../../public/assets/img/price/price-4.1.png";
import Image from 'next/image';

const price_content  = {
    sub_title: "Who we are",
    title: "Confidence in Your Security",
    header_text: <>You pay <span>$59.00/mo</span> today Renews <br /> April 2024 For <span>$69.00/mo</span></>
}
const {sub_title, title,  header_text}  = price_content

// price header data 
const price_header = [
    {
        id: 1, 
        title: "STARTER",
        description: <>Collect more submissions, <br /> access most of the features</>,
        price: 18,
        date: "Billed monthly", 
        active: "",
    },
    {
        id: 2, 
        title: "Advance",
        description: <>Collect more submissions, <br /> access most of the features</>,
        price: 19,
        date: "Billed monthly", 
        active: "active",
    },
    {
        id: 3, 
        title: "Team Plan",
        description: <>Collect more submissions, <br /> access most of the features</>,
        price: 14,
        date: "Billed monthly", 
        active: "",
    },
]

// price feature 
const price_feature = [
    {
        id: 1, 
        title: "Team",
        notice: <>Add gradient heading, button, pricing table testimonial etc.</>
    },
    {
        id: 2, 
        title: "Installed Agent",
        notice: <>Add gradient heading, button, pricing table testimonial etc.</>
    },
    {
        id: 3, 
        title: "Real-Time Feedback",
        notice: <>Add gradient heading, button, pricing table testimonial etc.</>
    },
    {
        id: 4, 
        title: "Adding Time Manually",
        notice: <>Add gradient heading, button, pricing table testimonial etc.</>
    },
    {
        id: 5, 
        title: "Adding Time Manually",
        notice: <>Add gradient heading, button, pricing table testimonial etc.</>
    },

]

// price feature info
const price_feature_info = [
    {
        id: 1, 
        active: "",
        info: [
            "02",
            "12",
            "Limited",
            "100",
            "Limited",
        ]

    },
    {
        id: 2, 
        active: "active",
        info: [
            "02",
            "12",
            "Limited",
            "100",
            "Limited",
        ]

    },
    {
        id: 3, 
        active: "",
        info: [
            "02",
            "12",
            "Limited",
            "100",
            "Limited",
        ]

    },
]

const PriceArea = () => {
    return (
        <>
            <div className="tp-price-area pt-120 pb-145 blue-bg">
               <div className="container">

                  <div className="row g-0">
                     <div className="col-12">
                        <div className="tp-price-sction-box text-center mb-30">
                           <h5 className="tp-section-subtitle-4 both pb-10">{sub_title}</h5>
                           <h3 className="tp-section-title-4 pb-25">{title}</h3>
                        </div>
                     </div>
                  </div> 
                  <div className="tp-price-table">
                     <div className="tp-price-table-wrapper">
                        <div className="row g-0 align-items-center">

                           <div className="col-4">
                              <div className="tp-price-header">
                                 <div className="tp-price-header-img">
                                    <Image src={header_img} alt="theme-pure" />
                                 </div>
                                 <div className="tp-price-header-content">
                                    <p>{header_text}</p>
                                 </div>
                              </div>
                           </div>

                           <div className="col-8">
                              <div className="tp-price-top-wrapper">
                                {price_header.map((item, i)  => 
                                    <div key={i} className={`tp-price-top-item text-center ${item.active}`}>
                                        <div className="tp-price-top-tag-wrapper">
                                            <span>{item.title}</span>
                                            <p>{item.description}</p>
                                        </div>
                                        <div className="tp-price-top-title-wrapper">
                                            <h4><em>$</em>{item.price} <span>/mo</span></h4>
                                            <p>Billed monthly</p>
                                            <Link className="tp-btn-service" href="/price">Get Started</Link>
                                        </div>
                                    </div>
                                )}
                              </div>
                           </div>

                        </div>

                        <div className="tp-price-feature-wrapper">
                           <div className="row g-0">

                              <div className="col-4">
                                 <div className="tp-price-feature-box">
                                    {price_feature.map((item, i)   => 
                                        <div key={i} className="tp-price-feature-item">
                                            <div className="d-flex align-items-center">
                                                <span>{item.title}</span>
                                                <div className="tp-price-feature-tooltip-box p-relative">
                                                    <NoticIcon /> 
                                                    <div className="tp-price-feature-tooltip">
                                                        <p>{item.notice}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )} 
                                 </div>
                              </div>

                              <div className="col-8">
                                {price_feature_info.map((item, i )  => 
                                    <div key={i} className={`tp-price-feature-info-item ${item.active}`}>
                                        {item.info.map((inf, i)   => 
                                            <div key={i} className="tp-price-feature-info text-center">
                                                <span>{inf}</span>
                                            </div>
                                        )} 
                                    </div>
                                )}
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

export default PriceArea;