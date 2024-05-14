import React from 'react';
import useBreadcrumbTitleAnime from '@/hooks/useBreadcrumbTitleAnime';
import Link from 'next/link';
import Image from 'next/image';

import shape_1 from "../../../public/assets/img/breadcrumb/breadcrumb-shape-1.png";
import shape_2 from "../../../public/assets/img/breadcrumb/breadcrumb-shape-2.png";


// breadcrumb our_service data
const our_service = [
    {
        id: 1,
        cls: "space-left-1", 
        title: "CLIENT",
        description: <>Microsoft App Holing Ltd, <br/> Australia Area</>
    },
    {
        id: 2, 
        cls: "space-left-2",
        title: "Services",
        description: <>October 23th, 2022 <br/> Release Started</>
    },
    {
        id: 3, 
        cls: "space-left-3",
        title: "Project Date",
        description: <>October 23th, 2022 <br/> Release Started</>
    },

]

const BreadcrumbEight = () => {
   const { animeRef } = useBreadcrumbTitleAnime();
    return (
        <>
            <div className="breadcrumb__area breadcrumb-height-3 p-relative blue-bg-2 fix">
               <div className="breadcrumb__shape-1">
                  <Image src={shape_1} alt="theme-pure" />               
               </div>
               <div className="breadcrumb__shape-2">
                  <Image src={shape_2} alt="theme-pure" />               
               </div>
               <div className="container">
                  <div className="breadcrumb__content-wrap">
                     <div className="row justify-content-center">
                        <div className="col-xl-12">
                           <div className="breadcrumb__content z-index-3 mb-60">
                              <div className="breadcrumb__text wow tpfadeIn" data-wow-duration=".9s" data-wow-delay=".6s">
                                 <span>Development,  App Design</span>
                              </div>
                              <h3 ref={animeRef} className="breadcrumb__title anime_text">Mobile App Design</h3>
                           </div>
                        </div>
                     </div>
                     <div className="row g-0 z-index-3">
                        {our_service.map((item, i)  => 
                            <div key={i} className="col-xl-3 col-lg-3 col-md-6 mb-40 pd-border-right">
                                <div className={`breadcrumb__client-info ${item.cls}`}>
                                <span>{item.title}</span>
                                <p>{item.description}</p>
                                </div>
                            </div>                        
                        )} 
                        <div className="col-xl-3 col-lg-3 col-md-6 mb-40 pd-border-right">
                           <div className="breadcrumb__client-info space-left-4">
                              <span>Project Date</span>
                              <div className="breadcrumb__live-btn">
                                 <Link className="tp-btn-inner-border" href="#">
                                    See live 
                                    <i className="fal fa-arrow-up"></i>
                                </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default BreadcrumbEight;