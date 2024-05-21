import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import React from "react";
import LeaderTeamArea from "./leader-team-area";
import CtaArea from "@/components/contact/cta-area";

const LeaderTeam = () => {
  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title={"Ban chủ nhiệm"} innertitle={"Ban chủ nhiệm"} />
            <LeaderTeamArea sub_title={"Leader Team"} title={"Tâm huyết, sẵn sàng chia sẻ"} />
            <CtaArea />
          </main>
        </div>
      </div>
    </>
  );
};

export default LeaderTeam;
