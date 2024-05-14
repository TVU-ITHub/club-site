import Link from "next/link";
import React from "react";

const categories_data = [
  { id: 1, titile: "Technology", items: "01" },
  { id: 2, titile: "Softec", items: "02" },
  { id: 3, titile: "Development", items: "03" },
  { id: 4, titile: "Tips & Tricks", items: "04" },
  { id: 5, titile: "News", items: "05" },
];
const Categories = () => {
  return (
    <>
      <div className="sidebar__widget mb-40">
        <div className="sidebar__widge-title-box">
          <h3 className="sidebar__widget-title">Categories</h3>
        </div>
        <div className="sidebar__widget-content">
          <ul>
            {categories_data.map((item, i) => (
              <li key={i}>
                <Link href="/blog">
                  <span>
                    <i className="fal fa-angle-right"></i>
                    {item.titile}
                  </span>
                  <span>{item.items}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Categories;
