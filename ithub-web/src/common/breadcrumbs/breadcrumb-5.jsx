import React from "react";
import SaveLineIcon from "@/svg/save-line-icon";
import useBreadcrumbTitleAnime from "@/hooks/useBreadcrumbTitleAnime";


// shape import 
import shape_1 from "../../../public/assets/img/breadcrumb/breadcrumb-shape-1.png";
import shape_2 from "../../../public/assets/img/breadcrumb/breadcrumb-shape-2.png";
import Image from "next/image";


const BreadcrumbFive = () => {
  const { animeRef } = useBreadcrumbTitleAnime();
  return (
    <>
      <div className="breadcrumb__area breadcrumb-ptb-5 p-relative blue-bg-2">
        <div className="breadcrumb__shape-1">
          <Image
            src={shape_1}
            alt="theme-pure"
          />
        </div>
        <div className="breadcrumb__shape-2">
          <Image
            src={shape_2}
            alt="theme-pure"
          />
        </div>
        <div className="container">
          <div className="row align-items-end">
            <div className="col-xl-9 col-lg-7 col-md-7">
              <div className="price-banner z-index-3">
                <div className="price-banner-title-box">
                  <h3
                    ref={animeRef}
                    className="price-banner-title tp-char-animation anime_text"
                  >
                    Pricing plans
                  </h3>
                  <p>Clear, affordable plans for every team and requirement.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-5 col-md-5">
              <div className="tp-price__btn-box tp-price__btn-inner">
                <div className="tp-price__btn-line d-none d-md-block">
                  <SaveLineIcon />
                </div>
                <div className="tp-price__btn-offer-tag d-none d-md-block">
                  <span>
                    SAVE <br /> 35%
                  </span>
                </div>
                <nav>
                  <div
                    className="nav nav-tab tp-price__btn-bg"
                    id="nav-tab"
                    role="tabList"
                  >
                    <button
                      className="nav-link active monthly"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                      tabIndex={-1}
                    >
                      Monthly
                    </button>
                    <button
                      className="nav-link yearly"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      Yearly
                    </button>
                    <span className="test"></span>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadcrumbFive;
