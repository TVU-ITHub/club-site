import React from "react";

const NoticIcon = () => {
  return (
    <>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          opacity="0.5"
          cx="8"
          cy="8"
          r="7"
          stroke="white"
          strokeWidth="1.5"
        />
        <path
          d="M8 11.5V7.3"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle
          r="0.7"
          transform="matrix(1 0 0 -1 7.99883 5.19966)"
          fill="white"
        />
      </svg>
    </>
  );
};

export default NoticIcon;
