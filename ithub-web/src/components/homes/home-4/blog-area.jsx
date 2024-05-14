import blog_data from '@/data/blog-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const blog_content = {
    sub_title:"News Feeds",
    title:"Blog & Insights",
}
const {sub_title, title}  = blog_content

const BlogArea = () => {
    return (
        <>
        <div className="tp-blog-area blue-bg pb-90">
               <div className="container">
                  <div className="row align-items-end tp-blog-four-section-space">
                     <div className="col-xl-6 col-lg-6">
                        <div className="tp-blog-four-section-box">
                           <h5 className="tp-section-subtitle-4 pb-10">{sub_title}</h5>
                           <h3 className="tp-section-title-4">{title}</h3>
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="tp-blog-four-btn text-start text-lg-end">
                           <Link className="tp-btn-yellow-border" href="/blog-details">Show More <i className="far fa-angle-right"></i></Link>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                    {blog_data.slice(3, 5).map((item, i) => 
                        <div key={i} className="col-xl-6 col-lg-6 col-md-6 mb-40 wow tpfadeUp" data-wow-duration=".9s"
                            data-wow-delay=".7s">
                            <div className="tp-blog-four-item p-relative fix">
                            <div className="tp-blog-four-img fix">
                                <Link href="#"><Image src={item.img} alt="theme-pure" /></Link>
                            </div>
                            <div className="tp-blog-four-content-wrapper">
                                <div className="tp-blog-four-meta">
                                    <span className="child-1">{item.category}</span>
                                    <span className="child-2">{item.date}</span>
                                </div>
                                <div className="tp-blog-four-info">
                                    <h4 className="tp-blog-four-title-sm"><Link href="/blog-details">{item.title}</Link></h4>
                                    <p>{item.description}</p>
                                </div>
                                <div className="tp-blog-four-btn">
                                    <Link className="tp-btn-service" href="/blog-details">Read More</Link>
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