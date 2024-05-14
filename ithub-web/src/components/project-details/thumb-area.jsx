import React from "react";
import Image from "next/image";
import thumb_img from "../../../public/assets/img/project/pd-img-1.jpg"

const ThumbArea = () => {
  return (
    <>
      <div className="pd-thumb-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="pd-thumb">
                <Image src={thumb_img} alt="theme-pure" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThumbArea;
