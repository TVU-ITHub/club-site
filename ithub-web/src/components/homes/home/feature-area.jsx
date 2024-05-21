import Link from "next/link";
import Image from "next/image";
import React, { useRef } from "react";

// icon import
import icon_1 from "@/app-assets/img/logo/cpp.png";
import icon_2 from "@/app-assets/img/logo/react.png";
import icon_3 from "@/app-assets/img/logo/nodejs.png";
import icon_4 from "@/app-assets/img/logo/cshap.png";
import feature_bottom_shape from "../../../../public/assets/img/feature/fea-bg-shape-1.png";
import useTitleAnimation from "../../../../hooks/useTitleAnimation";
import RightArrow from "@/svg/right-arrow";

// feature data
const feature_data = [
  {
    id: 1,
    img: icon_1,
    title: <>Novice</>,
    sub_title: "Thuật toán, cấu trúc dữ liệu, kỹ thuật lập trình, DB",
    delay: ".4s",
  },
  {
    id: 2,
    img: icon_2,
    title: <>Front-end</>,
    sub_title: "HTML, CSS, JS, ReactJS, NextJS, Redux, TailwindCSS...",
    delay: ".6s",
  },
  {
    id: 3,
    img: icon_3,
    title: <>Fast Track</>,
    sub_title: "Phát triển web nhanh và nhẹ với NodeJS, PHP,...",
    delay: ".8s",
  },
  {
    id: 4,
    img: icon_4,
    title: <>Enterprise</>,
    sub_title: "Lập trình back-end cho doanh nghiệp với Java, .NET,...",
    delay: "1s",
  },
];

// feature content
const feature_content = {
  title: "ITHub Teams",
  sub_title: "",
};
const { title, sub_title } = feature_content;

const FeatureArea = () => {
  let titleRef = useRef(null);
  useTitleAnimation(titleRef);

  return (
    <>
      <div className="tp-feature__area tp-feature__pt-pb pt-165 pb-170 p-relative">
        <div className="tp-feature__bottom-shape">
          <Image style={{ height: "auto" }} src={feature_bottom_shape} alt="them-pure" />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 wow tpfadeUpp" data-wow-duration=".6s" data-wow-delay=".1s">
              <div ref={titleRef} className="tp-feature__section-box tp__title_anime text-center mb-55 tp-title-anim">
                <h2 className="tp-section-title">{title}</h2>
                <p>{sub_title}</p>
              </div>
            </div>
          </div>

          <div className="row" style={{ justifyContent: "center" }}>
            {feature_data.map((item, i) => (
              <div
                key={i}
                className="col-xl-4 col-lg-4 col-md-6 mb-30 wow tpfadeUp"
                data-wow-duration=".9s"
                data-wow-delay={item.delay}
              >
                <div id="divtest" className="tp-feature__item">
                  <div className="tp-feature__icon">
                    <Image src={item.img} alt={item.title} />
                  </div>
                  <h3 className="tp-feature__title-sm" style={{ paddingBottom: 0 }}>
                    {item.title}
                  </h3>
                  <p>{item.sub_title}</p>
                  <div className="tp-feature__link tp-common-btn">
                    <Link href="/service-details">
                      <RightArrow />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureArea;
