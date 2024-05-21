import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import CtaArea from "@/components/contact/cta-area";
import React from "react";
import CounselorTeamArea from "./counselor-team-area";

const CounselorTeam = () => {
  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title={"Ban cố vấn"} innertitle={"Ban cố vấn"} />
            <CounselorTeamArea sub_title={"Counselor Team"} title={"Tâm huyết, sẵn sàng chia sẻ"} />
            <CtaArea />
          </main>
        </div>
      </div>
    </>
  );
};

export default CounselorTeam;
