import React from "react";
import RegisterForm from "@/forms/register-form";
import AppleIcon from "@/svg/apple-icon";
import GoogleIcon from "@/svg/google-icon";
import Image from "next/image";
import Link from "next/link";

// shape import here
import shape_1 from "../../../public/assets/img/login/login-shape-1.png";
import shape_2 from "@/app-assets/img/about/chuyennghiep.png";
import shape_3 from "@/app-assets/img/about/sangtao.png";
import shape_4 from "@/app-assets/img/about/nhom.png";
import shape_5 from "../../../public/assets/img/login/login-4.png";
import MicrosoftIcon from "@/svg/microsoft-icon";

const register_content = {
  bg_img: "/assets/img/login/login-bg-shape.png",
  banner_title: (
    <>
      Welcome To <br />
      ITHub Club
    </>
  ),
};
const { bg_img, banner_title } = register_content;

const RegisterArea = () => {
  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div className="signin-banner-area signin-banner-main-wrap d-flex align-items-center">
              <div
                className="signin-banner-left-box signin-banner-bg p-relative"
                // style={{ backgroundImage: `url(${bg_img})` }}
                style={{ backgroundColor: "var(--tp-theme-primary)" }}
              >
                <div className="signin-banner-bottom-shape">
                  <Image src={shape_1} alt="theme-pure" />
                </div>
                <div className="signin-banner-left-wrap">
                  <div className="signin-banner-title-box mb-100">
                    <h4 className="signin-banner-title tp-char-animation">{banner_title}</h4>
                  </div>
                  <div className="signin-banner-img-box position-relative">
                    <div className="signin-banner-img signin-img-1 d-none d-md-block z-index-3">
                      <Image src={shape_2} alt="theme-pure" />
                    </div>
                    <div className="signin-banner-img signin-img-2 d-none d-md-block">
                      <Image src={shape_3} alt="theme-pure" />
                    </div>
                    <div className="signin-banner-img signin-img-3 d-none d-md-block z-index-5">
                      <Image src={shape_4} alt="theme-pure" />
                    </div>
                    <div className="signin-banner-img signin-img-4 d-none d-sm-block">
                      <Image src={shape_5} alt="theme-pure" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="signin-banner-from d-flex justify-content-center align-items-center">
                <div className="signin-banner-from-wrap">
                  <div className="signin-banner-title-box">
                    <h4 className="signin-banner-from-title">Đăng ký tài khoản</h4>
                  </div>
                  <div className="signin-banner-login-browser">
                    <Link href="#">
                      <MicrosoftIcon />
                      Đăng nhập với Microsoft
                    </Link>
                    <Link href="#">
                      <GoogleIcon />
                    </Link>
                  </div>
                  <div className="signin-banner-from-box">
                    <h5 className="signin-banner-from-subtitle">Hoặc</h5>
                    <RegisterForm />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default RegisterArea;
