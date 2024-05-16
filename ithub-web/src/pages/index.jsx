import React from "react";
import SEO from "@/common/seo";
import HomeMain from "@/components/homes/home-main";
import Wrapper from "@/layout/wrapper";
import HeaderFour from "@/layout/headers/header-4";

const Home = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Trang chủ"} />
      <HeaderFour />
      <HomeMain />
    </Wrapper>
  );
};

export default Home;
