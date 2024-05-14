import React, { useEffect, useState } from "react";

import img_1 from "../../../public/assets/img/career/image-1.png";
import img_2 from "../../../public/assets/img/career/image-2.png";
import img_3 from "../../../public/assets/img/career/image-3.png";
import img_4 from "../../../public/assets/img/career/image-4.png";
import Image from "next/image";

 

const CarrerBanner = () => {
  const [offset, setOffset] = useState(0);

  function handleScroll() {
    setOffset(window.scrollY);
  }

  // Add an event listener to update the offset on scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="carrer-banner-area carrer-banner-space">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="carrer-banner-img-item">
                <Image src={img_1} alt="theme-pure" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="carrer-banner-img-item parallax-main">
                <Image
                  className="parallax-img"
                  src={img_2}
                  alt=""
                  style={{ transform: `translateY(${offset * 0.4}px)` }}
                />
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 d-none d-lg-block">
              <div className="carrer-banner-img-item mb-20">
                <Image src={img_3} alt="theme-pure" />
              </div>
              <div className="carrer-banner-img-item">
                <Image src={img_4} alt="theme-pure" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarrerBanner;
