import Link from "next/link";
import React from "react";

const Developing = ({ padding = "100px" }) => {
  return (
    <div>
      <h6
        style={{
          textAlign: "center",
          paddingTop: padding,
          paddingBottom: padding,
          color: "#faa71a",
          fontSize: "2rem",
          fontWeight: "500",
        }}
      >
        Chức năng đang phát triển
      </h6>
    </div>
  );
};

export default Developing;
