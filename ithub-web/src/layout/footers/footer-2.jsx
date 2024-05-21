import { CopyRight } from "@/common/social-links";
import EmailTwo from "@/svg/email-2";
import PhoneTwo from "@/svg/phone-2";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
// img import
import footer_logo from "@/app-assets/img/logo/ithub-logo2.png";
import qr_code from "@/app-assets/img/qr/group-zalo.png";
import i_phone from "../../../public/assets/img/footer/dwnld-2.png";
import google_ply from "../../../public/assets/img/footer/dwnld-3.png";
import shape_img_1 from "@/app-assets/img/logo/ithub-logo-3d.svg";
import shape_img_2 from "@/assets/img/footer/footer-inner-2.png";

const footer_content = {
  address: (
    <>
      126, Nguyễn Thiện Thành,
      <br /> khóm 4, phường 5, <br />
      TP. Trà Vinh, tỉnh Trà Vinh
    </>
  ),
  phone: "0123456789",
  email: "contact@ithub.club",
  download: "Download App",
  footer_lisks: [
    {
      id: 1,
      cls: "footer-col-2-2",
      title: "ITHub Teams",
      delay: ".4s",
      links: [
        { name: "Novice", link: "#" },
        { name: "Front-end", link: "#" },
        { name: "Fast Track", link: "#" },
        { name: "Enterprise", link: "#" },
      ],
    },
    {
      id: 2,
      cls: "footer-col-2-3",
      title: "Trang khác",
      delay: ".5s",
      links: [
        { name: "Giới thiệu", link: "/about" },
        { name: "Sự kiện", link: "/event" },
        { name: "Liên hệ", link: "/contact" },
        { name: "Thông tin sinh viên", link: "https://ttsv.tvu.edu.vn/", target: "_blank" },
        { name: "Trường ĐH Trà Vinh", link: "https://tvu.edu.vn/", target: "_blank" },
      ],
    },
  ],
  social_links: [
    {
      link: "https://www.facebook.com/ithub.tvu/",
      target: "_blank",
      icon: "fab fa-facebook-f",
    },
    {
      link: "https://github.com/TVU-ITHub",
      target: "_blank",
      icon: "fab fa-github",
    },
    //  {
    //    link: "http://www.vimeo.com",
    //    target: "_blank",
    //    icon: "fab fa-vimeo-v",
    //  },
    //  {
    //    link: "http://www.instagram.com",
    //    target: "_blank",
    //    icon: "fab fa-instagram",
    //  },
  ],
};
const { address, phone, email, footer_lisks, download, social_links } = footer_content;

const FooterTwo = () => {
  const [isOppen, setIsOppen] = useState(false);
  const oppenLan = () => {
    setIsOppen(!isOppen);
  };
  return (
    <>
      <footer>
        <div className="tp-footer__pl-pr grey-bg-2 pt-50">
          <div className="tp-footer__area pt-90 p-relative tp-footer__tp-border-bottom">
            <>
              <div className="tp-footer__shape-1 d-none d-xxl-block">
                <Image src={shape_img_1} style={{ width: 120 }} alt="theme-pure" />
              </div>
              <div className="tp-footer__shape-2 d-none d-xxl-block">
                <Image src={shape_img_2} alt="" />
              </div>
            </>
            <div className="container">
              <div className="row">
                <div
                  className="col-xl-3 col-lg-3 col-md-6 pb-30 wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".3s"
                >
                  <div className="tp-footer__widget footer-widget-2 footer-col-2-1">
                    <div className="tp-footer__logo mb-25">
                      <Link href="/">
                        <Image src={footer_logo} style={{ height: 36 }} alt="them-pure" />
                      </Link>
                    </div>
                    <div className="tp-footer__contact-info">
                      <Link href="https://maps.app.goo.gl/fSR5iXxTiBc2aQBs9" target="_blank">
                        {address}
                      </Link>
                      <ul>
                        {/* <li>
                          <span>
                            <PhoneTwo />
                          </span>
                          <Link className="first-child" href={`tel:${phone}`}>
                            {phone}
                          </Link>
                        </li> */}
                        {/* <li>
                          <span>
                            <EmailTwo />
                          </span>
                          <Link href={`mailto:${email}`}>{email}</Link>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
                {footer_lisks.map((item, i) => (
                  <div
                    key={i}
                    className="col-xl-3 col-lg-3 col-md-6 pb-30 wow tpfadeUp"
                    data-wow-duration=".6s"
                    data-wow-delay={item.delay}
                  >
                    <div className={`tp-footer__widget footer-widget-2 ${item.cls}`}>
                      <h4 className="tp-footer__widget-title">{item.title}</h4>
                      <div className="tp-footer__content">
                        <ul>
                          {item.links.map((link, i) => (
                            <li key={i}>
                              <Link href={link.link} target={!link.target ? "" : link.target}>
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}

                <div
                  className="col-xl-3 col-lg-3 col-md-6 pb-30 wow tpfadeUp"
                  data-wow-duration=".9s"
                  data-wow-delay=".9s"
                >
                  <div className="tp-footer__widget footer-widget-2 footer-col-2-4">
                    <h4 className="tp-footer__widget-title">{download}</h4>
                    <div className="tp-footer__download-box d-flex align-items-center">
                      <div className="tp-footer__qrcode mr-15">
                        <Link href="#">
                          {" "}
                          <Image src={qr_code} alt="them-pure" />
                        </Link>
                      </div>
                      <div className="tp-footer__app">
                        <Link href="#">
                          <Image className="mb-15" src={i_phone} alt="them-pure" />
                        </Link>
                        <Link href="#">
                          <Image src={google_ply} alt="them-pure" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tp-copyright__area pt-20 pb-20">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                  <div className="tp-copyright__social">
                    {social_links.map((l, i) => (
                      <Link key={i} href={l.link} target={l.target ? l.target : ""}>
                        <i className={l.icon}></i>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6  d-none d-md-block">
                  <div className="tp-copyright__text tp-copyright__text-2 text-center">
                    <span>
                      <CopyRight />
                    </span>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                  <div className="tp-copyright__lang-box  d-flex align-items-center justify-content-md-end justify-content-sm-end justify-content-start">
                    <div className="tp-copyright__lang tp-copyright__lang-2">
                      <ul>
                        <li>
                          <button id="tp-copyright__lang-toggle" onClick={() => oppenLan()}>
                            <span>
                              Tiếng Việt<i className="fal fa-angle-down"></i>
                            </span>
                          </button>
                          {isOppen && (
                            <ul className={`tp-copyright__lang-submenu ${isOppen && "open"}`}>
                              <li>
                                <Link href="#">...</Link>
                              </li>
                            </ul>
                          )}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterTwo;
