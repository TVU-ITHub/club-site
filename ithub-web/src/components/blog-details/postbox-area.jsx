import SocialLinks from '@/common/social-links';
import CommentPost from '@/forms/comment-post';
import DoubleSemicolon from '@/svg/double-semicolon';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Categories from '../blog-list/categories';
import RecentPost from '../blog-list/recent-post';
import Search from '../blog-list/search';
import Tags from '../blog-list/tags';
import Comments from './comments';


import blog_details_img_1  from "../../../public/assets/img/blog/blog-details-1.jpg";
import blog_details_img_2  from "../../../public/assets/img/blog/blog-details-2.jpg";
import blog_details_img_3  from "../../../public/assets/img/blog/blog-details-3.jpg";
import navigation_img_1  from "../../../public/assets/img/blog/navigation-1.png";
import navigation_img_2  from "../../../public/assets/img/blog/navigation-2.png";
import blog_details_avata  from "../../../public/assets/img/blog/blog-details-avata-1.jpg";


const post_box_content = {
    title_1: <>The History Of Web Design</>,
    des_1: <>While you want your sales team to be spending most of their time prospecting and selling, making sure they have the time and   space to keep the CRM up to date is critical. Remember to factor in time for these tasks when setting goals and benchmarks for them. Provide sales support where you can to ensure your sales team is spending.</>,
    des_2: <>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day going forward, a new normal that has evolved.!</>,
    checkmark_list: [
        "Say goodbye to bank fees.",
        "Leverage agile frameworks to provide",
        "Capitalize on low hanging fruit",
        "Deposit funds easily, securely.",
    ],
    title_2: "How to Update your Theme",
    des_3: <>Felis morbi ut tristique pretium libero. Eget purus, enim, orci, quis tempor sed. Sed nec eget nibh et Ut orci, sagittis tellus dui congue. Blandit laoreet nullam amet eget. Ut tincidunt diam tempor sed turpis odio vitae sem lobortis.</>,
    des_4: <>Felis morbi ut tristique pretium libero. Eget purus, enim, orci, quis tempor sed. Sed nec eget nibh et Ut orci, sagittis tellus dui congue. Blandit laoreet nullam amet eget. Ut tincidunt diam tempor sed turpis odio vitae sem lobortis. sed turpis odio vitae sem lobortis.</>,

    des_5: <>Ex erat referrentur vis. Vim ad consul molestie, eu malorum aliquando referrentur pro, erroribus gloriatur sed at. Eu illud saepe impetus ius. Cum graece libris abhorreant id, eu veri aeque ubique vel. Ut his malis similique. Ei vim blandit nominavi, quo elaboraret quaerendum et. At animal fabellas pericula est, ut cibo lobortis delicatissimi vel, cum ex putant probatus petentium. Elitr laboramus mel id. Admodum adolescens id eam, omnes reformidans comprehensam no vim, ex omnes alienum liberavisse usu. Mandamus tincidunt cu pro, vocent corrumpit no per. Vis ad malorum tacimates adipiscing. Elitr laboramus mel id.</>,

    des_6: <></>,
}
const {title_1, des_1, des_2, checkmark_list, title_2, des_3, des_4, des_5, des_6}  = post_box_content


const PostboxArea = ({style_details_2}) => {
    return (
        <>
            <div className={`postbox__area ${style_details_2 && "pt-100"} pb-100`}>
            <div className="container">
               <div className="row">
                  <div className="col-xxl-8 col-xl-8 col-lg-8">
                     <div className="postbox__details-wrapper pr-20">
                        <article>
                           {style_details_2 && 
                              <div className="postbox__thumb w-img">
                                 <Link href="/blog-details">
                                    <Image src={blog_details_img_1} alt="" />
                                 </Link>
                              </div>
                           }
                           <div className="postbox__details-title-box pb-30">
                              <h4 className="postbox__details-title">{title_1}</h4>
                              <p>{des_1}</p>
                              <p>{des_2}</p>
                           </div>
                           <div className="postbox__details-checkmark">
                              <ul>
                                {checkmark_list.map((item, i)  => <li key={i}><i className="fal fa-check"></i>{item}</li>)} 
                              </ul>
                           </div>
                           <div className="postbox__details-title-box pb-30">
                              <h4 className="postbox__details-title">{title_2}</h4>
                              <p>{des_3}</p>
                           </div>
                           <div className="postbox__details-img-box d-flex">
                              <div className="mr-20 text-center">
                                 <Image className="mb-20" src={blog_details_img_2} alt="theme-pure" />
                                 <h4 className="postbox__details-img-caption"><span>Images by</span>@sample</h4>
                              </div>
                              <div className="text-center">
                                 <Image className="mb-20" src={blog_details_img_3} alt="theme-pure" />
                                 <h5 className="postbox__details-img-caption"><span>Images by</span>@sample</h5>
                              </div>
                           </div>
                           <div className="postbox__details-title-box pb-15">
                              <p>{des_4}</p>
                           </div>
                           <div className="postbox__details-qoute mb-30">
                              <blockquote className="d-flex align-items-start">
                                 <div className="postbox__details-qoute-icon">
                                    <DoubleSemicolon /> 
                                 </div>
                                 <div className="postbox__details-qoute-text">
                                    <p>“The team at @softecagency is incredibly dedicated, knowledgeable, and helpful.</p>
                                    <span>Socrates</span>
                                 </div>
                              </blockquote>
                           </div>
                           <div className="postbox__details-title-box pb-15">
                              <p>{des_5}</p>
                           </div>
                           <div className="postbox__details tagcloud mb-50">
                              <span>Tags:</span>
                              <Link href="#">Envato</Link>
                              <Link href="#">Development</Link>
                              <Link href="#">Technology</Link>
                              <Link href="#">Wordpress</Link>
                           </div>

                           <div className="postbox__navigation-more mb-70 d-flex justify-content-between">
                              <div className="postbox__navigation-left d-flex align-items-center">
                                 <div className="postbox__navigation-img">
                                    <Link href="#"><Image src={navigation_img_1} alt="theme-pure" /></Link>
                                 </div>
                                 <div className="postbox__navigation-content">
                                    <Link href="#">
                                       <span>
                                          <i className="far fa-arrow-left"></i>
                                          Previous post
                                       </span>
                                    </Link>
                                    <h5><Link href="#">Leveraging Feedback...</Link></h5>
                                 </div>
                              </div>
                              <div className="postbox__navigation-right d-flex align-items-center">
                                 <div className="postbox__navigation-content">
                                    <Link href="#">
                                       <span>
                                          Next post
                                          <i className="far fa-arrow-right"></i> 
                                       </span>
                                    </Link>
                                    <h5><Link href="#">Typing Tutorials For...</Link></h5>
                                 </div>
                                 <div className="postbox__navigation-img">
                                    <Link href="#"><Image src={navigation_img_2} alt="theme-pure" /></Link>
                                 </div>
                              </div>
                           </div>

                           <div className="postbox__details-author-info-box mb-100 d-flex align-items-start">
                              <div className="postbox__details-author-avata">
                                 <Image src={blog_details_avata} alt="theme-pure" />
                              </div>
                              <div className="postbox__details-author-content">
                                 <h5 className="postbox__details-author-title">Dianne Ameter</h5>
                                 <p>Ex erat referrentur vis. Vim ad consul molestie, eu malorum aliquando
                                    referrentur pro, erroribus gloriatur sed at.!
                                 </p>
                                 <div className="postbox__details-author-social">
                                    <SocialLinks />  
                                 </div>
                              </div>
                           </div> 

                           <div className="postbox__comment mb-65">
                              <h3 className="postbox__comment-title">3 Comments</h3>
                              <Comments /> 
                           </div>
                           <div className="postbox__comment-form">
                              <h3 className="postbox__comment-form-title">Leave A Comment</h3>
                              <CommentPost /> 
                           </div>
                        </article>
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