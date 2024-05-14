import React from "react";
import EmailIcon from "../svg/email";

const HeroForm = () => {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="p-relative">
          <input type="text" placeholder="Business email adress" />
         {/* email icon */}
         <EmailIcon />
        </div>
        <button className="tp-btn tp-btn-hover alt-color-black">
          <span>Get A Demo</span>
          <b></b>
        </button>
      </form>
    </>
  );
};

export default HeroForm;
