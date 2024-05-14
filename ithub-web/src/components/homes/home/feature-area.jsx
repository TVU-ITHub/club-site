 
import Link from 'next/link';
import Image from 'next/image';
import React, { useRef } from 'react'; 

// icon import 
import icon_1 from "../../../../public/assets/img/feature/fea-icon-1.png";
import icon_2 from "../../../../public/assets/img/feature/fea-icon-2.png";
import icon_3 from "../../../../public/assets/img/feature/fea-icon-3.png";
import feature_bottom_shape from "../../../../public/assets/img/feature/fea-bg-shape-1.png";
import useTitleAnimation from '../../../../hooks/useTitleAnimation';
import RightArrow from '@/svg/right-arrow';

// feature data
const feature_data = [
   {
      id: 1,
      img: icon_1,
      title: <>A Unified View of The Customer</>,
      delay: ".4s",
   },
   {
      id: 2,
      img: icon_2,
      title: <>Industry Leading Procedures</>,
      delay: ".6s",
   },
   {
      id: 3,
      img: icon_3,
      title: <>Collaboration Across <br /> All Areas</>,
      delay: ".8s",
   },
]

// feature content
const feature_content = {
   title: "Our Exciting Features",
   sub_title: "More than 15,000 companies trust and choose Itech",
}
const { title, sub_title } = feature_content

const FeatureArea = () => {
   let titleRef = useRef(null)
   useTitleAnimation(titleRef)

   return (
      <>
         <div className="tp-feature__area tp-feature__pt-pb pt-165 pb-170 p-relative">
            <div className="tp-feature__bottom-shape">
               <Image style={{width: "auto", height: "auto"}} src={feature_bottom_shape} alt="them-pure" />
            </div>
            <div className="container">

               <div className="row justify-content-center">
                  <div className="col-xl-6 wow tpfadeUpp" data-wow-duration=".9s" data-wow-delay=".2s">
                     <div ref={titleRef} className="tp-feature__section-box tp__title_anime text-center mb-55 tp-title-anim">
                        <h2 className="tp-section-title">{title}</h2>
                        <p>{sub_title}</p>
                     </div>
                  </div>
               </div>

               <div className="row">
                  {feature_data.map((item, i) =>
                     <div key={i} className="col-xl-4 col-lg-4 col-md-6 mb-30 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay={item.delay} >
                        <div id="divtest" className="tp-feature__item">
                           <div className="tp-feature__icon">
                              <Image src={item.img} alt={item.title} />
                           </div>
                           <h3 className="tp-feature__title-sm">{item.title}</h3>
                           <div className="tp-feature__link tp-common-btn">
                              <Link href="/service-details">
                                 <RightArrow />
                              </Link>
                           </div>
                        </div>
                     </div>
                  )}
               </div>

            </div>
         </div>

      </>
   );
};

export default FeatureArea;