import Offcanvus from "@/common/offcanvus";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavMenu from "./nav-menu";
import Image from "next/image";

import logo from "@/app-assets/img/logo/ithub-logo2.svg";
import white_logo from "../../../public/assets/img/logo/logo-white.png";
import black_logo from "../../../public/assets/img/logo/logo-black.png";
import useSticky from "../../../hooks/use-sticky";

const HeaderFour = ({ style_error = true, white_header = true }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { sticky } = useSticky();

  return (
    <>
      <header className={`${style_error ? "" : "tp-header-heightt"}`}>
        <div
          id="header-sticky"
          className={`header-bottom__area ${
            (style_error && !white_header) || sticky
              ? "header-sticky-bg-2 tp-error-header z-index-5"
              : "header-bottom__plr-4 z-index-3"
          }  header-bottom__transparent ${sticky && "header-sticky"}`}
        >
          <div className="container">
            <div className="row g-0 align-items-center">
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                <div className="header-bottom__logo">
                  {style_error ? (
                    <Link href="/">
                      <Image src={logo} alt="theme-pure" width={140} />
                    </Link>
                  ) : (
                    <>
                      <Link className="white-logo" href="/">
                        <Image src={white_logo} alt="theme-pure" />
                      </Link>
                      <Link className="black-logo" href="/">
                        <Image src={black_logo} alt="theme-pure" />
                      </Link>
                    </>
                  )}
                </div>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7 d-none d-lg-block">
                <div className="header-bottom__main-menu header-bottom__main-menu-4">
                  <nav id="mobile-menu">
                    <NavMenu />
                  </nav>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-8 col-6">
                <div className="header-bottom__right d-flex align-items-center justify-content-end">
                  <div className={`header-bottom__action ${style_error ? "" : "header-bottom__action-4"}`}>
                    <Link className="d-none d-lg-inline-block header-bottom__action-2 border-none" href="/dang-nhap">
                      <span>Đăng nhập</span>
                    </Link>
                  </div>
                  <div className="header-bottom__btn d-flex align-items-center">
                    <Link
                      className={`tp-btn-blue-sm ${
                        style_error ? "inner-color alt-color-black" : "alt-color-white"
                      } tp-btn-hover d-none d-md-inline-block`}
                      href="/dang-ky"
                    >
                      <span>Đăng ký</span>
                      <b></b>
                    </Link>
                    <a className="header-bottom__bar tp-menu-bar d-lg-none" onClick={() => setSidebarOpen(true)}>
                      <i className="fal fa-bars"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvus sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>
  );
};

export default HeaderFour;
