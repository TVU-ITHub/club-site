import Image from 'next/image';
import React, { useState } from 'react';

import shape_1 from "../../../public/assets/img/breadcrumb/breadcrumb-shape-1.png"
import shape_2 from "../../../public/assets/img/breadcrumb/breadcrumb-shape-2.png"

const Breadcrumb = ({ title_top, title_bottom }) => {
   const [offset, setOffset] = useState(0);

   function handleScroll() {
      setOffset(window.scrollY);
   }
   // Add an event listener to update the offset on scroll
   React.useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);


   return (
      <>

         <div className="about-banner-area p-relative">
            <div className="about-shape-1 z-index-3">
               <Image src={shape_1} alt="theme-pure" />
            </div>
            <div className="about-shape-2 z-index-3">
               <Image src={shape_2} alt="theme-pure" />
            </div>
            <div className="about-banner p-relative z-index fix">
               <div className="container">
                  <div className="row">
                     <div className="col-xl-12">
                        <div className="about-banner-content">
                           <h4 style={{ transform: `translateY(${offset * 0.9}px)` }} 
                                 className="about-banner-title" 
                                 data-parallax='{"y": 1000, "smoothness": 10}'>
                              <span>{title_top}</span> <br />
                              <span>{title_bottom}</span>
                           </h4>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Breadcrumb;