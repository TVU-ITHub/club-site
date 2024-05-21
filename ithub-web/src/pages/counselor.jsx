import React from "react";
import SEO from "../common/seo";
import Wrapper from "../layout/wrapper";
import CounselorTeam from "@/components/team/counselor";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Ban cố vấn"} />
      <CounselorTeam />
    </Wrapper>
  );
};

export default index;
