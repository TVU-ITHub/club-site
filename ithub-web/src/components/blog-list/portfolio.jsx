import Link from "next/link";
import React from "react";
import useMultipleAnime from "@/hooks/useMultipleAnime";
import portfolio_blog from "@/data/portfolio-blog";
import Image from "next/image";

const Portfolio = () => {
  const { dataRef } = useMultipleAnime();
  return (
    <>
      <div className="blog-grid-inner mb-80">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="popular-blog-title mb-40 text-center">
                <h3>Bài viết nổi bật</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {portfolio_blog.slice(0, 3).map((item, i) => (
              <div key={"blog" + i} data-index={i} className="col-xl-4 col-lg-6 col-md-6 mb-30">
                <div className="tp-blog-item">
                  <div className="tp-blog-thumb fix">
                    <Link href="/blog-details">
                      <img src={item.thumb_img} alt="theme-pure" />
                    </Link>
                  </div>
                  <div className="tp-blog-content">
                    <div className="tp-blog-meta d-flex align-items-center">
                      <div className="tp-blog-category category-color-1">
                        <span>{item.category}</span>
                      </div>
                      <div className="tp-blog-date">
                        <span>{item.date}</span>
                      </div>
                    </div>
                    <div className="tp-blog-title-box">
                      <Link className="tp-blog-title-sm" href="/blog-details">
                        {item.title}
                      </Link>
                    </div>
                    <div className="tp-blog-author-info-box d-flex align-items-center">
                      <div className="tp-blog-avata">
                        <img
                          src={item.avata_img}
                          style={{ width: 40, height: 40, borderRadius: 100 }}
                          alt="theme-pure"
                        />
                      </div>
                      <div className="tp-blog-author-info">
                        <h5>{item.name}</h5>
                        <span>{item.job_title}</span>
                      </div>
                    </div>
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

export default Portfolio;
