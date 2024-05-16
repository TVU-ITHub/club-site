import React from "react";
import SEO from "@/common/seo";
import About from "@/components/about";
import Wrapper from "@/layout/wrapper";
import Link from "next/link";
import HeaderFour from "@/layout/headers/header-4";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Softec - Data analytics"} />
      <HeaderFour />
      <About />
    </Wrapper>
  );
};

export default index;
