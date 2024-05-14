import NoticeTwo from '@/svg/notice-2';
import React from 'react';

import header_img from "../../../public/assets/img/price/price-4.1.png";
import Image from 'next/image';
import Link from 'next/link';

const pricing_data_monthly = {
   header_text: <>You pay <span>$59.00/mo</span> today Renews <br /> April  2024 For <span>$69.00/mo</span></>,
   // price header data 
   price_header: [
      {
         id: 1,
         title: "STARTER",
         description: <>Collect more submissions, <br /> access most of the features</>,
         price: 18,
         price_yearly: 36,
         date: "Billed monthly",
         active: "",
      },
      {
         id: 2,
         title: "Advance",
         description: <>Collect more submissions, <br /> access most of the features</>,
         price: 19,
         price_yearly: 59,
         date: "Billed monthly",
         active: "active",
      },
      {
         id: 3,
         title: "Team Plan",
         description: <>Collect more submissions, <br /> access most of the features</>,
         price: 14,
         price_yearly: 99,
         date: "Billed monthly",
         active: "",
      },
   ],

   // price feature  
   price_feature: [
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
         title: "Video Dedicated Support",
         notice: <>Add gradient heading, button, pricing table testimonial etc.</>
      },

   ],

   // price feature info
   price_feature_info: [
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


}
const {  header_text, price_header, price_feature, price_feature_info } = pricing_data_monthly




const PriceArea = () => {
   return (
      <>
         <div className="tp-price-area mb-120">
            <div className="container">
               <div className="price-tab-content">
                  <div className="tab-content" id="nav-tabContent">

                     <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
                        <div className="tp-price-table price-inner-white-bg z-index-3">
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
                                       {price_header.map((item, i) =>
                                          <div key={i} className={`tp-price-top-item text-center ${item.active}`}>
                                             <div className="tp-price-top-tag-wrapper">
                                                <span>{item.title}</span>
                                                <p>{item.description}</p>
                                             </div>
                                             <div className="tp-price-top-title-wrapper">
                                                <h4>${item.price} <span>/mo</span></h4>
                                                <p>{item.date}</p>
                                                <Link className="tp-btn-service" href="#">Get Started</Link>
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
                                          {price_feature.map((item, i) =>
                                             <div key={i} className="tp-price-feature-item p-relative">
                                                <div className="d-flex align-items-center">
                                                   <span>{item.title}</span>
                                                   <div className="tp-price-feature-tooltip-box p-relative">
                                                      <NoticeTwo />
                                                      <div className="tp-price-feature-tooltip">
                                                         <p>{item.notice}</p>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          )
                                          }
                                       </div>
                                    </div>
                                    <div className="col-8">
                                       {price_feature_info.map((item, i) =>
                                          <div key={i} className={`tp-price-feature-info-item ${item.active}`}>
                                             {item?.info?.map((inf, i) =>
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

                     <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
                        <div className="tp-price-table price-inner-white-bg z-index-3">
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
                                       {price_header.map((item, i) =>
                                          <div key={i} className={`tp-price-top-item text-center ${item.active}`}>
                                             <div className="tp-price-top-tag-wrapper">
                                                <span>{item.title}</span>
                                                <p>{item.description}</p>
                                             </div>
                                             <div className="tp-price-top-title-wrapper">
                                                <h4>${item.price_yearly} <span>/mo</span></h4>
                                                <p>{item.date}</p>
                                                <Link className="tp-btn-service" href="#">Get Started</Link>
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
                                          {price_feature.map((item, i) =>
                                             <div key={i} className="tp-price-feature-item p-relative">
                                                <div className="d-flex align-items-center">
                                                   <span>{item.title}</span>
                                                   <div className="tp-price-feature-tooltip-box p-relative">
                                                      <NoticeTwo />
                                                      <div className="tp-price-feature-tooltip">
                                                         <p>{item.notice}</p>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          )
                                          }
                                       </div>
                                    </div>
                                    <div className="col-8">
                                       {price_feature_info.map((item, i) =>
                                          <div key={i} className={`tp-price-feature-info-item ${item.active}`}>
                                             {item?.info?.map((inf, i) =>
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
               </div>
            </div>
         </div>
      </>
   );
};

export default PriceArea;