import React from 'react';
import Image from 'next/image';


import sales_img_1 from "../../public/assets/img/card/sale-1.png"
import sales_img_2 from "../../public/assets/img/card/sale-2.png"
import sales_img_3 from "../../public/assets/img/card/sale-3.png"

const sales_content = {
    title: <>Track and <span>Analyze Sales</span> in Real time</>,
    dub_title: <>Track and Analyze Sales in Real time</>,
    description: <>Centralize and simplify payments, and get comprehensive <br /> insights on your financials softuch.!</>,

    sales_feature: [
        {
            id: 1,
            color: "yellow-1",
            list: "No hidden fees."
        },
        {
            id: 2,
            color: "purple-2",
            list: "100% security. Guaranteed."
        },
        {
            id: 3,
            color: "green-3",
            list: "No training or maintenance needed"
        },
    ],

    sales_img: [
        {
            id: 1,
            cls: "main-thumb",
            img: sales_img_1,
        },
        {
            id: 2,
            cls: "sub-img-1",
            img: sales_img_2,
        },
        {
            id: 3,
            cls: "sub-img-2 d-none d-sm-block",
            img: sales_img_3,
        },
    ],


}
const {title, dub_title, description, sales_feature, sales_img}  = sales_content

const SalesArea = ({style_service}) => {
    return (
        <>
            <div className="tp-sales-area tp-sales-space">
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-xl-6 col-lg-6 order-1 order-md-1 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="tp-sales-section-box pb-20">
                           <h3 className="tp-section-title-3 pb-15 ">{ style_service ?  dub_title : title}</h3>
                           <p className="tp-title-anim">{description}</p>
                        </div>
                        <div className="tp-sales-feature">
                           <ul>
                            {sales_feature.map((item, i)  => 
                                <li key={i} className={item.color}><span><i className="far fa-check"></i> <em>{item.list}</em></span></li>
                                )}
                            </ul>
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-6 order-0 order-md-2 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">
                        <div className="tp-sales-img-wrapper p-relative text-end">
                            {sales_img.map((item, i ) => 
                                <div key={i} className={`tp-sales-${item.cls}`}>
                                    <Image src={item.img} alt="theme-pure" />
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

export default SalesArea;