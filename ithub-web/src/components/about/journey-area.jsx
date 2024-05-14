import React, {useState, useEffect} from 'react';
import { Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// slider setting
const setting = {
    loop: true, 
    slidesPerView: 5,
    spaceBetween: 30,
    breakpoints: {
        '1200': {
            slidesPerView: 5,
        },
        '992': {
            slidesPerView: 3,
        },
        '768': {
            slidesPerView: 2,
        },
        '576': {
            slidesPerView: 2,
        },
        '0': {
            slidesPerView: 1,
        },
    }, 
      scrollbar: {
        el: ".tp-scrollbar",
        clickable: true,
    },
  }
// journey_data
  const journey_data =[
    {
        id: "01", 
        date: "OCT 2019",
        title: <>Our Vision <br /> Of a better Way</>,
        description: <>We envision sales teams having the tools <br />
        and talent they need to make remote <br /> work.</>,
    },
    {
        id: "02", 
        date: "OCT 2020",
        title: <>Official <br /> Beta Launch</>,
        description: <>We envision sales teams having the tools <br />
        and talent they need to make remote <br /> work.</>,
    },
    {
        id: "03", 
        date: "OCT 2021",
        title: <>Rolling <br /> Up Sleeves</>,
        description: <>We envision sales teams having the tools <br />
        and talent they need to make remote <br /> work.</>,
    },
    {
        id: '04', 
        date: "OCT 2022",
        title: <>Design <br />Rewards In NYC</>,
        description: <>We envision sales teams having the tools <br />
        and talent they need to make remote <br /> work.</>,
    },
    {
        id: "05", 
        date: "Present",
        title: <>Featured On <br /> Envato</>,
        description: <>We envision sales teams having the tools <br />
        and talent they need to make remote <br /> work.</>,
    },
    {
        id: "06", 
        date: "OCT 2020",
        title: <>Official <br /> Beta Launch</>,
        description: <>We envision sales teams having the tools <br />
        and talent they need to make remote <br /> work.</>,
    },
    {
      id: "07", 
      date: "OCT 2021",
      title: <>Rolling <br /> Up Sleeves</>,
      description: <>We envision sales teams having the tools <br />
      and talent they need to make remote <br /> work.</>,
  },
  {
      id: '08', 
      date: "OCT 2022",
      title: <>Design <br />Rewards In NYC</>,
      description: <>We envision sales teams having the tools <br />
      and talent they need to make remote <br /> work.</>,
  },
  {
      id: "09", 
      date: "Present",
      title: <>Featured On <br /> Envato</>,
      description: <>We envision sales teams having the tools <br />
      and talent they need to make remote <br /> work.</>,
  },
  {
      id: "10", 
      date: "OCT 2020",
      title: <>Official <br /> Beta Launch</>,
      description: <>We envision sales teams having the tools <br />
      and talent they need to make remote <br /> work.</>,
  },
  {
    id: "11", 
    date: "OCT 2019",
    title: <>Our Vision <br /> Of a better Way</>,
    description: <>We envision sales teams having the tools <br />
    and talent they need to make remote <br /> work.</>,
  },
  {
      id: "12", 
      date: "OCT 2020",
      title: <>Official <br /> Beta Launch</>,
      description: <>We envision sales teams having the tools <br />
      and talent they need to make remote <br /> work.</>,
  },
  {
    id: "13", 
    date: "OCT 2021",
    title: <>Rolling <br /> Up Sleeves</>,
    description: <>We envision sales teams having the tools <br />
    and talent they need to make remote <br /> work.</>,
  },
  {
    id: '14', 
    date: "OCT 2022",
    title: <>Design <br />Rewards In NYC</>,
    description: <>We envision sales teams having the tools <br />
    and talent they need to make remote <br /> work.</>,
  },
  {
    id: "15", 
    date: "Present",
    title: <>Featured On <br /> Envato</>,
    description: <>We envision sales teams having the tools <br />
    and talent they need to make remote <br /> work.</>,
  },
  {
    id: "16", 
    date: "OCT 2020",
    title: <>Official <br /> Beta Launch</>,
    description: <>We envision sales teams having the tools <br />
    and talent they need to make remote <br /> work.</>,
  },
  ]

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
                  <h5 className="inner-section-subtitle pb-10">TIMELINE</h5>
                  <h3 className="ab-brand-title pb-0 mb-0">
                    Journey Was Started
                  </h3>
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
                      <SwiperSlide
                        key={i}
                        className="journey-slider-item p-relative"
                      > 
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