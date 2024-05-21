import VideoPopup from "@/modals/video-popup";
import React, { useState } from "react";

const company_content = {
  sub_title: "ITHub",
  title: (
    <>
      Mục tiêu
      <br />
      thành lập
    </>
  ),
  info_1: (
    <>Hỗ trợ việc học tập, nghiên cứu, phát triển kỹ năng lập trình và công nghệ của sinh viên Đại học Trà Vinh.</>
  ),
  info_2: <>Tạo môi trường trao đổi, thảo luận, và trải nghiệm giữa các sinh viên.</>,
  info_3: <>Tích lũy kinh nghiệm, chia sẻ kiến thức và hỗ trợ lẫn nhau trong quá trình học tập và làm việc.</>,
};
const { sub_title, title, info_1, info_2, info_3 } = company_content;

const CompanyArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div className="ab-company-area pt-105 pb-5">
        <div className="container">
          <div className="row ab-company-section-space">
            <div className="col-xl-6">
              <div className="ab-company-section-box">
                <h4 className="inner-section-subtitle">{sub_title}</h4>
                <h3 className="tp-section-title">{title}</h3>
              </div>
            </div>
            <div className="col-xl-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
              <div className="ab-company-right">
                <div className="ab-company-section-text">
                  <p className="pb-10">{info_1}</p>
                  <p className="pb-10">{info_2}</p>
                  <p>
                    <span>{info_3}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row align-items-center">
            <div className="col-xl-4">
              <div className="ab-company-video">
                <a className="popup-video" onClick={() => setIsVideoOpen(true)}>
                  <i className="fas fa-play"></i>
                </a>
                <span>Watch Demo</span>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="row">
                <div className="col-md-4 col-sm-4 mb-40">
                  <div className="ab-company-fun-fact-wrap d-flex justify-content-start">
                    <div className="ab-company-fun-fact">
                      <span>USED BY</span>
                      <h4>
                        11,000<em>+</em>
                      </h4>
                      <p>Creators</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-4 mb-40">
                  <div className="ab-company-fun-fact-wrap d-flex justify-content-md-center justify-content-left">
                    <div className="ab-company-fun-fact">
                      <span>VALUE</span>
                      <h4>
                        46<em>m</em>
                      </h4>
                      <p>Revenue per Year</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 mb-40">
                  <div className="ab-company-fun-fact-wrap ab-company-border-none d-flex justify-content-md-center justify-content-left">
                    <div className="ab-company-fun-fact">
                      <span>IN</span>
                      <h4>
                        150<em>+</em>
                      </h4>
                      <p>Countries using</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* video modal start */}
      <VideoPopup isVideoOpen={isVideoOpen} setIsVideoOpen={setIsVideoOpen} videoId={"EW4ZYb3mCZk"} />
      {/* video modal end */}
    </>
  );
};

export default CompanyArea;
