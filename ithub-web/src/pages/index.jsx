import React from "react";
import SEO from "@/common/seo";
import Wrapper from "@/layout/wrapper";
import HomeMain from "@/components/homes/home-main";

const Home = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Trang chủ"} />
      <HomeMain />
    </Wrapper>
  );
};

export default Home;
