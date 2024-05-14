import Link from 'next/link';
import React from "react";
import ArrowLine from '@/svg/arrow-line';
import RoundLine from '@/svg/round-line';
import useCharAnimation from '@/hooks/useCharAnimation';
import Image from 'next/image';

// img import 
import scroll_bg from "../../../../public/assets/img/hero/scroll-down.png";
import users_img from "../../../../public/assets/img/hero/hero-user.jpg";
import hero_shape_1 from "../../../../public/assets/img/hero/hero-img-2-1.png";
import hero_shape_2 from "../../../../public/assets/img/hero/image_02.png";
import hero_shape_3 from "../../../../public/assets/img/hero/hero-img-2-3.png";
import hero_shape_4 from "../../../../public/assets/img/hero/hero-img-2-4.png";
import hero_shape_5 from "../../../../public/assets/img/hero/hero-shape-2-2.png";



// hero_content
const hero_content = {
  bg_img: "/assets/img/hero/hero-bg-2.png",
  scroll_btn: "Scroll Down",
  title: <><i><i className="child-1">The next</i> </i>{" "}
  <i><i className="child-1">generation</i> </i>{" "}
  <i><i className="child-1">payment</i> </i>{" "}
  <i><i className="child-1">ways.</i></i>
  </>,
  btn_text: "Get Started For Free",
  sub_title: <>Over<span>5Ok+ Client</span> all over the world</>,
  
}
const {
  bg_img, 
  scroll_btn,
  title,
  btn_text,
  sub_title, 
} = hero_content;


const HeroArea = () => {
  useCharAnimation('.tp-hero-2__title i.child-1');
  return (
    <>
      <div
        className="tp-hero-2__area tp-hero-2__ptb tp-hero-2__plr z-index fix p-relative"
        style={{ backgroundImage: `url(${bg_img})` }}
      >
        <div className="scroll-bg d-none d-sm-block">
          <Image src={scroll_bg} alt="theme-pure" />
        </div>
        <div className="tp-hero-2__mouse-scroll smooth d-none d-sm-block">
          <a className="mouse-scroll-btn" href="#payment-method"></a>
          <span>{scroll_btn}</span>
        </div>
        <div className="tp-hero-2__shape-img-1 d-none d-sm-block">
          <ArrowLine />
        </div>
        <div className="container-fluid g-0">
          <div className="row g-0 align-items-end">
            <div className="col-xl-6 col-lg-6">
              <div className="tp-hero-2__title-box">

                <h3 className="tp-hero-2__title tp-char-animation">
                  {title}
                </h3>

              </div>
              <div className="tp-hero-2__btn">
                <Link
                  className="tp-btn-green wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".5s"
                  href="/service-details"
                >
                  {btn_text}
                </Link>
              </div>
              <div className="tp-hero-2__user p-relative">
                <h4 className="tp-char-animation-2" >{sub_title}</h4>
                <div className="tp-hero-2__user-img">
                  <Image src={users_img} alt="theme-pure" />
                </div>
                <div className="tp-hero-2__shape-1">
                  <RoundLine />
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="tp-hero-2__right text-end p-relative">
                <div
                  className="tp-hero-2__main-img wow tpfadeRight"
                  data-wow-duration=".9s"
                  data-wow-delay=".5s" >
                  <Image src={hero_shape_1} alt="theme-pure" />
                </div>

                <div
                  className="tp-hero-2__sub-img-1 d-none d-sm-block"
                  data-parallax='{"x": 100, "smoothness": 30}' >
                  <Image src={hero_shape_2} alt="theme-pure" />
                </div>

                <div
                  className="tp-hero-2__sub-img-2 d-none d-sm-block"
                  data-parallax='{"x": -100, "smoothness": 10}' >
                  <Image src={hero_shape_3} alt="theme-pure" />
                </div>

                <div
                  className="tp-hero-2__sub-img-3 d-none d-sm-block"
                  data-parallax='{"y": -80, "smoothness": 30}' >
                  <Image src={hero_shape_4} alt="theme-pure" />
                </div>

                <div className="tp-hero-2__sub-img-4">
                  <Image src={hero_shape_5} alt="theme-pure" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroArea;