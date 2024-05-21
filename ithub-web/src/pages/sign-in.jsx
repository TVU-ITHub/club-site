import React from "react";
import SEO from "../common/seo";
import SignIn from "../components/sign-in";
import Wrapper from "../layout/wrapper";
import EmptyLayout from "@/layout/empty-layout";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Đăng nhập"} />
      <SignIn />
    </Wrapper>
  );
};

index.Layout = EmptyLayout;

export default index;
