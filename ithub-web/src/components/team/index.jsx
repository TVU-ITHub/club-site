import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import React from "react";
import TeamArea from "./team-area";
import CtaArea from "../contact/cta-area";
import Developing from "../dev/developing";

const Team = () => {
  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title={"Thành viên"} innertitle={"Thành viên"} />
            <TeamArea sub_title={"Member"} title={"Sáng tạo, Năng động, Chuyên nghiệp"} />
            <Developing />
            <CtaArea />
          </main>
        </div>
      </div>
    </>
  );
};

export default Team;
