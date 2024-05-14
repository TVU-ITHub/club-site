import Image from "next/image";
import Link from "next/link";
import React from "react";


import avata_1 from "../../../public/assets/img/blog/blog-list-avata-1.jpg";
import avata_2 from "../../../public/assets/img/blog/blog-list-avata-2.jpg";
import avata_3 from "../../../public/assets/img/blog/blog-list-avata-3.jpg";

const recent_post_data = [
  {
    id: 1,
    img: avata_1,
    title: <>Is slower team communication a bad thing?</>,
    date: "4 March. 2022",
    cls: "mb-20",
  },
  {
    id: 1,
    img: avata_2,
    title: <>Is slower team communication a bad thing?</>,
    date: "4 March. 2022",
    cls: "mb-20",
  },
  {
    id: 1,
    img: avata_3,
    title: <>The Ultimate Marketing Design Handbook</>,
    date: "4 March. 2022",
    cls: "",
  },
];
const RecentPost = () => {
  return (
    <>
      <div className="sidebar__widget mb-40">
        <div className="sidebar__widge-title-box">
          <h3 className="sidebar__widget-title">Recent Post</h3>
        </div>
        <div className="sidebar__widget-content">
          <div className="sidebar__post rc__post">
            {recent_post_data.map((item, i) => (
              <div key={i} className="rc__post mb-20 d-flex">
                <div className="rc__post-thumb mr-20">
                  <Link href="/blog-details">
                    <Image src={item.img} alt="theme-pure" />
                  </Link>
                </div>
                <div className="rc__post-content">
                  <h3 className="rc__post-title">
                    <Link href="/blog-details">{item.title}</Link>
                  </h3>
                  <div className="rc__meta">
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentPost;
