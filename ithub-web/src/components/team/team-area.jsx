import React from "react";
import Link from "next/link";
import { SocialLinksTwo } from "@/common/social-links";
import team_data from "@/data/team-data";

const TeamArea = ({ sub_title, title }) => {
  return (
    <>
      <div className="tp-team-area tp-team-inner pt-100 pb-75">
        <div className="container">
          <div className="tp-team-section-wrapper tp-team-inner-section mb-70">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="tp-team-section-box text-center">
                  <h5 className="inner-section-subtitle pb-10">{sub_title}</h5>
                  <h3 className="tp-section-title mb-0 text-black">{title}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {team_data.map((item, i) => (
              <div
                key={"team-" + i}
                className={`col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-70 tp-border-after-${item.cls} team-inner-border-right`}
              >
                <div className="tp-team-item text-center tp-team-inner-title-color z-index">
                  <div className="tp-team-img">
                    <img src={item.img} alt="theme-pure" />
                  </div>
                  <div className="tp-team-content">
                    <h4 className="tp-team-title-sm">
                      <Link href="/team-details">{item.name}</Link>
                    </h4>
                    <span>{item.job_title}</span>
                  </div>
                  <div className="tp-team-social">
                    <SocialLinksTwo social_links={item.social_links} />
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

export default TeamArea;
