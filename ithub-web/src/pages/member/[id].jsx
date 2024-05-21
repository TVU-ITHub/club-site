import React from "react";
import SEO from "@/common/seo";
import Wrapper from "@/layout/wrapper";
import Developing from "@/components/dev/developing";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Thành viên"} />
      <Developing padding={"50vh"} />
    </Wrapper>
  );
};

export default index;
