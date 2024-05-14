import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import account_img_1 from "../../../../public/assets/img/account/account-bg.png"
import account_img_2 from "../../../../public/assets/img/account/acc-main.png"
import account_img_3 from "../../../../public/assets/img/account/ac-author.png"
import account_img_4 from "../../../../public/assets/img/account/ac-shape-1.png"
import account_img_5 from "../../../../public/assets/img/account/ac-shape-2.png"


const account_content ={
    account_shape: [
        {
            id: 1,
            cls: "bg",
            img: account_img_1 
        },
        {
            id: 2,
            cls: "main-img",
            img: account_img_2 
        },
        {
            id: 3,
            cls: "author",
            img: account_img_3 
        },
        {
            id: 4,
            cls: "shape-1",
            img: account_img_4
        },
        {
            id: 5,
            cls: "shape-2",
            img: account_img_5
        },
    ],
    sub_title: "Open An Account",
    title: "Let’s get started",
    account_step: [
        {
            id: 1, 
            number: "01",
            info: <>Sign up in a few minutes</>,
        },
        {
            id: 2, 
            number: "02",
            info: <>Let us verify your identity</>,
        },
        {
            id: 3, 
            number: "03",
            info: <>Your account is open; you can send <br /> your first payment</>,
        },

    ],
    btn_text: "Open An Account in Minutes",
    info: "Try it for 30 days. For free. No obligations.",
}
const {account_shape, sub_title, title, account_step, btn_text, info}  = account_content



const OpenAccountArea = () => {
    return (
      <>
        <div className="tp-account-area pb-120">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div
                  className="tp-account-thumb-wrapper p-relative text-center wow tpfadeLeft"
                  data-wow-duration=".9s"
                  data-wow-delay=".5s"
                >
                  {account_shape.map((item, i) => (
                    <div key={i} className={`tp-account-${item.cls}`}>
                      <Image src={item.img} alt="theme-pure" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="tp-account-step-wrapper">
                  <div className="tp-account-section-box mb-40">
                    <h4 className="tp-section-subtitle-2">{sub_title}</h4>
                    <h3 className="tp-section-title-lg">{title}</h3>
                  </div>
                  <div className="tp-account-step mb-50">
                    {account_step.map((setp, i) => (
                      <div
                        key={i}
                        className="tp-account-item d-flex align-items-center"
                      >
                        <span>{setp.number}</span>
                        <p>{setp.info}</p>
                      </div>
                    ))}
                  </div>
                  <div className="tp-account-btn-box">
                    <Link className="tp-btn-green mb-15" href="/register">
                      {btn_text}
                    </Link>
                    <p>{info}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default OpenAccountArea;