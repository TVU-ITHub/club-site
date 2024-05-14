import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import card_img_1 from "../../public/assets/img/card/card-bg.png";
import card_img_2 from "../../public/assets/img/card/card-shape-1.png";
import card_img_3 from "../../public/assets/img/card/card-img-1.png";
import card_img_4 from "../../public/assets/img/card/card-img-2.png";
import card_img_5 from "../../public/assets/img/card/card-img-3.png";
import card_img_6 from "../../public/assets/img/card/card-img-4.png" ;


const card_content = {
    card_images: [
        {
            id: 1,
            cls: "main-img",
            data_parallax: "",
            img: card_img_1,
        },
        {
            id: 2,
            cls: "img-1 d-none d-sm-block",
            data_parallax: "",
            img: card_img_2,
        },
        {
            id: 3,
            cls: "img-2 d-none d-sm-block",
            data_parallax: '{"x": 50, "smoothness": 30}',
            img: card_img_3,
        },
        {
            id: 4,
            cls: "img-3 d-none d-sm-block",
            data_parallax: '{"x": -50, "smoothness": 30}',
            img: card_img_4,
        },
        {
            id: 5,
            cls: "img-4 d-none d-sm-block",
            data_parallax: "",
            img: card_img_5,
        },
        {
            id: 6,
            cls: "img-5 d-none d-sm-block",
            data_parallax: "",
            img: card_img_6,
        },
    ],

    title: <>Manage <span>All your Cards</span> in one Place</>,
    description: <>Digital products are where it’s at! There are so many benefits
    to selling digital products. It’s easy to get started and they <br />
    can be extremely profitable</>,
    btn_text: "Get Started Free"
}
const {card_images, title, description, btn_text}  = card_content



const CardArea = ({style_service}) => {
    return (
        <>
        <div className="tp-card-area tp-card-space pt-175 pb-185">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="tp-card-thumb-wrapper p-relative">
                            {card_images.map((item, i)  => 
                                <div key={i} className={`tp-card-${item.cls}`} data-parallax={item.data_parallax}>
                                    <Image src={item.img} alt="theme-pure" />
                                </div>
                            )} 
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">
                        <div className="tp-card-title-box">
                           <h3 className="tp-section-title-3 pb-15">{title}</h3>
                           <p className="">{description}</p>
                              <Link className={`${style_service ? "tp-btn-inner" : "tp-btn-blue-lg"} tp-btn-hover alt-color-black`} 
                                 href="/service-details">
                                 <span>{btn_text}</span> 
                                 <b></b>
                              </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            
        </>
    );
};

export default CardArea;