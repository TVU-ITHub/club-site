import React from "react";
import SEO from "../common/seo";
import Register from "../components/register";
import Wrapper from "../layout/wrapper";
import EmptyLayout from "@/layout/empty-layout";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Đăng ký"} />
      <Register />
    </Wrapper>
  );
};

index.Layout = EmptyLayout;

export default index;
