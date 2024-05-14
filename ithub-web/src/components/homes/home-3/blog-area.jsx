import blog_data from '@/data/blog-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogArea = () => {
    return (
        <>
            <div className="tp-blog-area pb-80">
               <div className="container">
                  <div className="row justify-content-center">
                     <div className="col-xl-5">
                        <div className="tp-blog-section-box text-center mb-50">
                           <h3 className="tp-section-title-3">
                            Our Latest <span>News and Articles</span>
                           </h3>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                    {blog_data.slice(0, 3).map((item, i)  => 
                        <div key={i} className="col-xl-4 col-lg-4 col-md-6 mb-60">
                        <div className="tp-blog-item">
                           <div className="tp-blog-thumb fix">
                              <Link href="/blog-details"><Image src={item.img} alt={item.title} /></Link>
                           </div>
                           <div className="tp-blog-meta d-flex align-items-center">
                              <div className={`tp-blog-category category-color-${item.color}`}>
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
                                 <Image src={item.author_img} alt={item.author_name} />
                              </div>
                              <div className="tp-blog-author-info">
                                 <h5>{item.author_name}</h5>
                                 <span>{item.job_title}</span>
                              </div>
                           </div>
                        </div>
                     </div>
                        )
                    }
                  </div>
               </div>
            </div>
        </>
    );
};

export default BlogArea;