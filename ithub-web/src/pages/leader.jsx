import React from "react";
import SEO from "../common/seo";
import Team from "../components/team";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Ban chủ nhiệm"} />
      <Team />
    </Wrapper>
  );
};

export default index;
