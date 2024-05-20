import ClockIcon from "@/svg/clock-icon";
import LocationIconThree from "@/svg/location-icon-3";
import Link from "next/link";
import React from "react";

const job_data = {
  sub_title: "Tham gia",
  title: (
    <>
      Team <br />
      chuyên môn.
    </>
  ),
  carrer_title: "Open Positions",
  carrer_info: <></>,
  job_info: [
    {
      id: 1,
      category: "Novice",
      job_time: "Năm nhất",
      job_location: "Kỹ thuật lập trình, thuật toán, cấu trúc dữ liệu,...",
    },
    {
      id: 2,
      category: "Front-end",
      job_time: "Năm 2-3",
      job_location: "Design, ReactJS, AngularJS, VueJS,...",
    },
    {
      id: 3,
      category: "Fast Track",
      job_time: "Năm 2-3",
      job_location: "NodeJS, PHP, Laravel, WordPress,...",
    },
    {
      id: 4,
      category: "Enterprise",
      job_time: "Năm 3-4",
      job_location: "Java Spring Boot, .NET(C#),...",
    },
  ],
};
const { sub_title, carrer_info, title, carrer_title, job_info } = job_data;

const JobArea = ({ style_carrer }) => {
  return (
    <>
      <div className="job-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="job-section-box text-center mb-40">
                {style_carrer ? (
                  <>
                    <h3 className="tp-section-title">{carrer_title}</h3>
                    <p>{carrer_info}</p>
                  </>
                ) : (
                  <>
                    <h4 className="inner-section-subtitle">{sub_title}</h4>
                    <h3 className="tp-section-title">{title}</h3>
                  </>
                )}
              </div>
            </div>
          </div>
          {job_info.map((item, i) => (
            <div key={i} className="job-post-box">
              <div className="row align-items-center">
                <div className=" col-lg-2 col-md-2">
                  <div className="job-post-info d-flex justify-content-start align-items-center">
                    <div className="job-post-category">
                      <span>{item.category}</span>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-7 col-md-7">
                  <div className="job-post-wrapper d-flex align-items-center">
                    <div className="job-post-time d-flex align-items-center">
                      <ClockIcon />
                      <span>{item.job_time}</span>
                    </div>
                    <div className="job-post-location d-flex align-items-center">
                      <span>{item.job_location}</span>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-3 col-md-3">
                  <div className="job-post-apply-btn text-start text-md-end">
                    <Link className="tp-btn-inner tp-btn-hover alt-color-orange" href="/career-details">
                      <span>Tham gia</span> <b></b>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default JobArea;
