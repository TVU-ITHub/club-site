import Link from "next/link";
import Image from "next/image";
import React, { useRef } from "react";

// internal
import useBreadcrumbTitleAnime from "@/hooks/useBreadcrumbTitleAnime";
import useTitleAnimation from "@/hooks/useTitleAnimation";

// import shap img 
import shape_1 from "../../../public/assets/img/breadcrumb/breadcrumb-shape-1.png";
import shape_2 from "../../../public/assets/img/breadcrumb/breadcrumb-shape-2.png";
import shape_3 from "../../../public/assets/img/breadcrumb/breadcrumb-4.png";

const BreadcrumbFour = () => {
   const { animeRef } = useBreadcrumbTitleAnime();
   let subtitleRef = useRef(null)
   useTitleAnimation(subtitleRef)
  return (
    <>
      <div className="breadcrumb__area breadcrumb-ptb-3 p-relative blue-bg-2">
        <div className="breadcrumb__shape-1">
          <Image src={shape_1} alt="theme-pure" />
        </div>
        <div className="breadcrumb__shape-2">
          <Image src={shape_2} alt="theme-pure" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-7">
              <div className="breadcrumb__content z-index-1">
                <h3
                  ref={animeRef}
                  className="breadcrumb__title tp-char-animation anime_text"
                > Integrations</h3>
                <div
                  className="breadcrumb__list tp__title_anime"
                  ref={subtitleRef}
                >
                  <span className="child-one">
                    <Link href="/">Home</Link>
                  </span>
                  <span className="dvdr">
                    <i className="fal fa-angle-right"></i>
                  </span>
                  <span>Integrations</span>
                </div>
              </div>
            </div>
            <div className="col-xl-7 col-lg-5 col-lg-4 text-center text-md-end">
              <div className="breadcrumb__img p-relative text-start z-index">
                <Image className="z-index-3" src={shape_3} alt="theme-pure" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadcrumbFour;
