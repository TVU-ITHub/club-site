import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import React from "react";
import CtaArea from "../contact/cta-area";
import TeamArea from "./team-area";

const Team = () => {
  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title={"Ban chủ nhiệm"} innertitle={"Ban chủ nhiệm"} />
            <TeamArea sub_title={"Leader Team"} title={"Tâm huyết, sẵn sàng chia sẻ"} />
            <CtaArea />
          </main>
        </div>
      </div>
    </>
  );
};

export default Team;
