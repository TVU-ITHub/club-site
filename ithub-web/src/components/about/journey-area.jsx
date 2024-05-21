import React, { useState, useEffect } from "react";
import { Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// slider setting
const setting = {
  loop: true,
  slidesPerView: 5,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
  scrollbar: {
    el: ".tp-scrollbar",
    clickable: true,
  },
};
// journey_data
const journey_data = [
  {
    id: "01",
    date: "01",
    title: (
      <>
        Team chuyên <br />
        môn
      </>
    ),
    description: <>Gia nhập team chuyên môn rèn luyện đúng lĩnh vực yêu thích</>,
  },
  {
    id: "02",
    date: "02",
    title: (
      <>
        Phát triển <br /> kỹ năng
      </>
    ),
    description: <>Phát triển kỹ năng lập trình phần mềm cho sinh viên TVU</>,
  },
  {
    id: "03",
    date: "03",
    title: (
      <>
        Môi trường <br />
        làm việc
      </>
    ),
    description: <>Môi trường chuyên nghiệp, năng động, sáng tạo và thân thiện.</>,
  },
  {
    id: "04",
    date: "04",
    title: (
      <>
        Dự án
        <br />
        thực tế
      </>
    ),
    description: <>Chung tay thực hiện dự án thực tế và cùng nhau phát triển.</>,
  },
  {
    id: "05",
    date: "05",
    title: (
      <>
        Sinh hoạt
        <br />
        chuyên đề
      </>
    ),
    description: <>Sinh hoạt chuyên đề hàng tháng với toàn CLB.</>,
  },
  {
    id: "06",
    date: "06",
    title: (
      <>
        Tương tác
        <br />
        thường xuyên
      </>
    ),
    description: <>Tương tác thường xuyên qua Slack và Zalo.</>,
  },
];

const JourneyArea = () => {
  const [isDragged, setIsDragged] = useState(false);

  const handleSlideChange = () => {
    setIsDragged(true);
  };

  const handleTransitionEnd = () => {
    setIsDragged(false);
  };

  return (
    <>
      <div className="journey-area p-relative fix">
        <div className="journey-grey-bg grey-bg"></div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="journey-section-box">
                <h5 className="inner-section-subtitle pb-10"></h5>
                <h3 className="ab-brand-title pb-0 mb-0">Lợi ích</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid g-0">
          <div className="row g-0">
            <div className="col-xl-12">
              <div className="journey-slider-wrapper">
                <Swiper
                  {...setting}
                  onSliderMove={handleSlideChange}
                  onTransitionEnd={handleTransitionEnd}
                  modules={[Navigation, Scrollbar]}
                  className={`swiper-container journey-slider-active ${isDragged ? "dragged" : ""}`}
                >
                  {journey_data.map((item, i) => (
                    <SwiperSlide key={i} className="journey-slider-item p-relative">
                      <div className="journey-stroke-text">
                        <h2>{item.id}</h2>
                      </div>
                      <div className="journey-slider-meta">
                        <span>{item.date}</span>
                      </div>
                      <div className="journey-slider-content">
                        <h4 className="journey-slider-title">{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="tp-scrollbar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JourneyArea;
