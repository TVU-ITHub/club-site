import Link from "next/link";
import React from "react";

const tags_data = [
    "Envato",
    "Development",
    "Technology",
    "Wordpress",
    "PHP",
    "Branding",
]
const Tags = () => {
  return (
    <>
      <div className="sidebar__widget mb-40">
        <div className="sidebar__widge-title-box">
          <h3 className="sidebar__widget-title">Tag Cloud</h3>
        </div>
        <div className="sidebar__widget-content">
          <div className="tagcloud">
            {tags_data.map((item, i)  => 
                <Link key={i} href="#">{item}</Link>                
                )
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Tags;
