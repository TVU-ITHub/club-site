import Image from "next/image";
import React from "react";

// brand img import here
import brand_img_1 from "@/app-assets/img/work/code.png";
import brand_img_2 from "@/app-assets/img/work/design.png";
import brand_img_3 from "@/app-assets/img/work/software.png";
import brand_img_4 from "@/app-assets/img/work/database.png";
// import brand_img_5 from "../../../public/assets/img/brand/brand-inner-5.png";
// import brand_img_6 from "../../../public/assets/img/brand/brand-inner-6.png";
// import brand_img_7 from "../../../public/assets/img/brand/brand-inner-7.png";
// import brand_img_8 from "../../../public/assets/img/brand/brand-inner-8.png";
// import brand_img_9 from "../../../public/assets/img/brand/brand-inner-9.png";

const brand_content = {
  titel: "Câu lạc bộ ITHub",
  description: <>Nơi hội tụ đam mê lập trình của sinh viên TVU</>,

  brand_img: [
    { img: brand_img_1, delay: ".1s" },
    { img: brand_img_2, delay: ".2s" },
    { img: brand_img_3, delay: ".3s" },
    { img: brand_img_4, delay: ".4s" },
    // { img: brand_img_5, delay: ".9s" },
    // { img: brand_img_6, delay: "1s" },
    // { img: brand_img_7, delay: "1.1s" },
    // { img: brand_img_8, delay: "1.2s" },
    // { img: brand_img_9, delay: "1.3s" },
  ],
};
const { titel, description, brand_img } = brand_content;

const Brand = () => {
  return (
    <>
      <div className="ab-brand-area">
        <div className="container">
          <div className="ab-brand-border-bottom pb-90">
            <div className="row">
              <div className="col-12">
                <div className="ab-brand-section-box text-center mb-50">
                  <h4 className="ab-brand-title">{titel}</h4>
                  <p>{description}</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 justify-content-center">
                  {brand_img.map((item, i) => (
                    <div key={i} className="col wow tpfadeUp" data-wow-duration=".9s" data-wow-delay={item.delay}>
                      <div className="ab-brand-item mb-25">
                        <Image src={item.img} alt="theme-pure" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
