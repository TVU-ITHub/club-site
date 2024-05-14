import Link from 'next/link';
import React from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicEffect';
import PlanLineIcon from '@/svg/plan-line-icon';


const plan_content  = {
    tp_title: "Compare our plans",
    tp_des: <>Comparing our pricing plans side-by-side so you can choose the best <br /> one for yourself.</>,
    feature_title: "Features and Services",
    feature_items: [
        {id: 1, cls: "", title: "BASIC", btn_text: "Get Basic"},
        {id: 2, cls: "active", title: "Growth", btn_text: "Get Growth"},
        {id: 3, cls: "", title: "Premium", btn_text: "Get Premium"},
    ],
    feature_lists : [
        {
            id: 1, 
            title: "Version history", 
            features : [<><span>30days</span></>,  <><i className="far fa-check"></i></>, <><i className="far fa-check"></i></>,],
        },
        {
            id: 2, 
            title: "Send invoices and quotes",
            features : [<><i className="far fa-check"></i></>,  <><i className="far fa-check"></i></>, <><i className="far fa-check"></i></>,],
        },
        {
            id: 3, 
            title: "Cross platform",
            features : [<><i className="far fa-check"></i></>,  <><i className="far fa-check"></i></>, <><i className="far fa-check"></i></>,],
        },
        {
            id: 4, 
            title: "Scan receipts and bills",
            features : [<><i className="far fa-check"></i></>,  <><i className="far fa-check"></i></>, <><i className="far fa-check"></i></>,],
        },
        {
            id: 5, 
            title: "Storage",
            features : [<><span>50gb</span></>,  <><span>100gb</span></>, <><span>Unlimited</span></>,],
        },
        {
            id: 6, 
            title: "Advanced analytics",
            features : [<><i className="far fa-times times"></i></>,  <><i className="far fa-times times"></i></>, <><i className="far fa-check"></i></>,],
        },
        {
            id: 7, 
            title: "Projections dashboard",
            features : [<><i className="far fa-times times"></i></>,  <><i className="far fa-check"></i></>, <><i className="far fa-check"></i></>,],
        },
        {
            id: 8, 
            title: "Invoice tracking and payments",
            features : [<><i className="far fa-check"></i></>,  <><i className="far fa-times times"></i></>, <><i className="far fa-check"></i></>,],
        },
        {
            id: 9, 
            title: "Collaboration",
            features : [<><span>100</span></>,  <><span>1000</span></>, <><span>Unlimited</span></>,],
        },
        {
            id: 10, 
            title: "Unlimited single-use virtual cards",
            features : [<><i className="far fa-check"></i></>,  <><i className="far fa-check"></i></>, <><i className="far fa-check"></i></>,],
        },
        {
            id: 11, 
            title: "Cross platform",
            features : [<><i className="far fa-times times"></i></>,  <><i className="far fa-times times"></i></>, <><i className="far fa-check"></i></>,],
        },
        {
            id: 12, 
            title: "Multi-currency functionality",
            features : [<><i className="far fa-check"></i></>,  <><i className="far fa-times times"></i></>, <><i className="far fa-check"></i></>,],
        }, 
    ],

}
const {tp_title, tp_des, feature_title, feature_items, feature_lists} = plan_content


const PlanArea = () => {
   
    useIsomorphicLayoutEffect(() => {
        ScrollTrigger.create({
            trigger: ".pr-feature-box",
            start: "top 80px",
            end: "bottom 54%",
            pin: ".pr-feature-wrapper",
            pinSpacing: false,
        });
     },[])

    return (
        <>
            <div className="plan-area pb-110">
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-xl-6">
                     <div className="plan-section-box text-center pb-20">
                        <h3 className="tp-section-title tp-section-title-shape p-relative">
                            {tp_title}
                           <PlanLineIcon />
                        </h3>
                        <p>{tp_des}</p>
                     </div>
                  </div>
               </div>
               <div className="pr-feature-box">
                  <div className="pr-feature-main">

                     <div className="pr-feature-wrapper">
                        <div className="row gx-0 align-items-center">
                           <div className="col-xl-4 col-lg-4 col-md-4">
                              <div className="pr-feature-head">
                                 <div className="pr-feature-title-box">
                                    <h5 className="pr-feature-title">{feature_title}</h5>
                                 </div>
                              </div>
                           </div>
                           <div className="col-xl-8 col-lg-8 col-md-8">
                              <div className="pr-feature-head">
                                 <ul>
                                    {feature_items.map((item, i)  => 
                                        <li key={i}>
                                            <div className={`pr-feature-item ${item.cls}`}>
                                                <h5>{item.title}</h5>
                                                <Link className="tp-btn-service black-bg text-white" href="/service-details">
                                                    {item.btn_text}
                                                </Link>
                                            </div>
                                        </li>
                                    )} 
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="pr-feature-wrapper-2">
                        {feature_lists.map((item, i)  => 
                            <div key={i} className="row gx-0 align-items-center pr-feature-height">
                                <div className="col-xl-4 col-lg-4 col-md-4">
                                    <div className="pr-feature-bottom">
                                        <div className="pr-feature-title-box">
                                            <h5 className="pr-feature-title-sm">{item.title}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-8 col-md-8">
                                    <div className="pr-feature-bottom">
                                        <ul>
                                            {item.features.map((list, i)  =>  <li key={i}> {list} </li> )}                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )} 
                     </div>
                  </div>
               </div>
            </div>
         </div>
        </>
    );
};

export default PlanArea;