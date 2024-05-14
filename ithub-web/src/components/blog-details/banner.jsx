import React from 'react';
import Image from 'next/image';
import brand_img from "../../../public/assets/img/blog/blog-details-1.jpg";


const Banner = () => {
    return (
        <>
           <div className="blog-details-img-area mb-80">
            <div className="container">
               <div className="row">
                  <div className="col-xl-12">
                     <div className="blog-details-big-img z-index-2">
                        <Image src={brand_img} alt="theme-pure" />
                     </div>
                  </div>
               </div>
            </div>
         </div> 
        </>
    );
};

export default Banner;