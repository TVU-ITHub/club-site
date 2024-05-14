import VideoPopup from '@/modals/video-popup';
import SearchIcon from '@/svg/search-icon';
import Link from 'next/link';
import React,{useState} from 'react';
import Categories from './categories';
import RecentPost from './recent-post';
import Search from './search';
import Tags from './tags';
 

import img_1 from "../../../public/assets/img/blog/blog-list-1.jpg";
import img_2 from "../../../public/assets/img/blog/blog-list-3.jpg";
import thumb from "../../../public/assets/img/blog/blog-list-2.jpg";
import Image from 'next/image';



// blog page data  
const blog_page_data = [
    {
      id: 1,
      img: img_1,
      cls: "format-image",
      slider_img: false,
      category: "Resources",
      date: "April 12, 2023",
      video: [],
      title: "Typing Tutorials For Kids And Beginners",
      des: (
        <>
          From publishing content and hoping to acquire leads to gaining audience insights and making personalized content, content marketing.                             
        </>
      ),
    },
    {
      id: 2,
      img: "",
      cls: "format-video",
      slider_img: false,
      category: "Resources",
      date: "April 20, 2023",
      video: [
        {
          video_tum: thumb,
          videoId: "-WRZI63emjs",
        },
      ],
      title: "Designing the Kids Space Universe",
      des: (
        <>
          From publishing content and hoping to acquire leads to gaining audience insights and making personalized content, content marketing.
        </>
      ),
    },
    {
      id: 3,
      img: img_2,
      cls: "format-image fix",
      slider_img: false,
      category: "Resources",
      date: "April 12, 2023",
      video: [],
      title: "Typing Tutorials For Kids And Beginners",
      des: (
        <>
          From publishing content and hoping to acquire leads to gaining audience insights and making personalized content, content marketing.
        </>
      ),
    },
  ];
   
  
const PostboxArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
    return (
        <>
        <div className="postbox__area pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-8 col-xl-8 col-lg-8">
                     <div id="blog" className="postbox__wrapper pr-20">
                        {blog_page_data.map((item, i)  => 
                            <article key={i} className={`postbox__item ${item.cls} mb-70 transition-3`}>
                                {item.img && 
                                    <div className="postbox__thumb w-img">
                                        <Link href="/blog-details">
                                            <Image src={item.img} alt="theme-pure" />
                                        </Link>
                                    </div>
                                }
                                {item.video  && 
                                item.video.map((item, i) => 
                                    <div key={i} className="postbox__thumb postbox__video w-img  p-relative">
                                        <Link href="/blog-details">
                                            <Image src={item.video_tum} alt="theme-pure" />
                                        </Link>
                                        {/* video modal start */}
                                        <VideoPopup
                                            isVideoOpen={isVideoOpen}
                                            setIsVideoOpen={setIsVideoOpen}
                                            videoId={item.videoId}
                                        />
                                        {/* video modal end */}
                                        <button onClick={() => setIsVideoOpen(true)}
                                        className="play-btn pulse-btn popup-video"
                                        ><i className="fas fa-play"></i></button>
                                    </div>
                                
                                )
                                }

                                <div className="postbox__content">
                                    <div className="postbox__meta">
                                        <span><Link href="#">{item.category}</Link></span>
                                        <span><Link href="#">{item.date}</Link></span>
                                    </div>
                                    <h3 className="postbox__title">
                                        <Link href="/blog-details">{item.title}</Link>
                                    </h3>
                                    <div className="postbox__text">
                                        <p>{item.des}</p>
                                    </div>
                                    <div className="postbox__btn mt-35">
                                        <Link className="tp-btn-inner tp-btn-hover alt-color-black" href="/blog-details">
                                            <span>Read More</span>
                                            <b></b>
                                        </Link>
                                    </div>
                                </div>
                            </article>
                            
                            )
                        } 

                        <div className="basic-pagination">
                           <nav>
                              <ul>
                                 <li>
                                    <Link href="/blog">
                                       <i className="far fa-angle-left"></i>
                                    </Link>
                                 </li>
                                 <li>
                                    <Link className="current" href="/blog">1</Link>
                                 </li>
                                 <li>
                                    <Link href="/blog">2</Link>
                                 </li>
                                 <li>
                                    <span>...</span>
                                 </li>
                                 <li>
                                    <Link href="/blog">3</Link>
                                 </li>
                                 <li>
                                    <Link href="/blog">
                                       <i className="far fa-angle-right"></i>
                                    </Link>
                                 </li>
                              </ul>
                              </nav>
                        </div>
                     </div>
                  </div>

                  <div className="col-xxl-4 col-xl-4 col-lg-4">
                     <div className="sidebar__wrapper"> 
                        <Search />
                        <RecentPost />  
                        <Categories /> 
                        <Tags /> 
                     </div>
                  </div>
               </div>
            </div>
         </div>            
        </>
    );
};

export default PostboxArea;