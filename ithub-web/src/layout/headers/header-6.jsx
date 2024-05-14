import useSticky from '@/hooks/use-sticky';
import Offcanvus from '@/common/offcanvus';
import UserIcon from '@/svg/user-icon';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import NavMenu from './nav-menu';


import logo_black from "../../../public/assets/img/logo/logo-black.png";
import logo_white from "../../../public/assets/img/logo/logo-white.png";


const HeaderSix = ({ style_2 = false }) => {
   const { sticky } = useSticky()
   const [sidebarOpen, setSidebarOpen] = useState(false)

   return (
      <>
         <header>
            <div id="header-sticky" className={`header-bottom__area header-sticky-bg-2 header-bottom__transparent header-bottom__bdr z-index-5 ${style_2 ? 'inner-header-2' : ''} ${sticky ? "header-sticky" : ''}`}>
               <div className="container">
                  <div className="row g-0 align-items-center">
                     <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                        <div className="header-bottom__logo">
                           {style_2 ? <Link href="/">
                              <Image src={logo_black} alt="theme-pure" />
                           </Link> : <><Link className="white-logo" href="/">
                              <Image src={logo_white} alt="theme-pure" />
                           </Link>
                              <Link className="black-logo" href="/">
                                 <Image src={logo_black} alt="" />
                              </Link></>
                           }
                        </div>
                     </div>
                     <div className="col-xxl-7 col-xl-7 col-lg-7 d-none d-lg-block">
                        <div className="header-bottom__main-menu header-bottom__main-menu-4 header-bottom__main-menu-inner">
                           <nav id="mobile-menu">
                              <NavMenu />
                           </nav>
                        </div>
                     </div>
                     <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-8 col-6">
                        <div className="header-bottom__right d-flex align-items-center justify-content-end">
                           <div className="header-bottom__action header-bottom__action-4 d-none d-xl-block">
                              <Link className="d-none d-lg-inline-block header-bottom__action-2 border-none" href="/register">
                                 <UserIcon />
                                 <span>Log In</span>
                              </Link>
                           </div>
                           <div className="header-bottom__btn d-flex align-items-center">
                              <Link className={`${style_2 ? 'tp-btn-inner alt-color-orange' : 'tp-btn-white alt-color-black'} tp-btn-hover d-none d-md-inline-block`} href="/service-details">
                                 <span className="white-text">Get Started</span>
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

export default HeaderSix;