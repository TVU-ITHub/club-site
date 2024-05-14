import React from 'react';
import Image from 'next/image';
import ReplyIcon from '@/svg/reply-icon';


import avata_1 from "../../../public/assets/img/blog/blog-avata-2.png";
import avata_2 from "../../../public/assets/img/blog/blog-avata-1.png";
import avata_3 from "../../../public/assets/img/blog/blog-list-avata-1.jpg";
import Link from 'next/link';

const comments_data = [
    {
        id: 1, 
        img: avata_1,
        name: "Justin Case",
        date: "April 8, 2022 at 7:38 am",
        comment: <>Patient Comments are a collection of comments submitted by viewers in <br /> response to a question posed by a MedicineNet doctor.</>,
        cls_reply: ""
    },
    {
        id: 2, 
        img: avata_2,
        name: "Farhan Firoz",
        date: "July 14, 2022",
        comment: <>Include anecdotal examples of your experience, or things you took notice of that you feel others would find useful.</>,
        cls_reply: "children"
    },
    {
        id: 3, 
        img: avata_3,
        name: "Jamil Rayhan",
        date: "April 8, 2022 at 7:38 am",
        comment: <>Patient Comments are a collection of comments submitted by viewers in <br /> response to a question posed by a MedicineNet doctor.</>,
        cls_reply: ""
    },

]

const Comments = () => {
    return (
      <>
        <ul>
          {comments_data.map((item, i) => (
            <li key={i} className={item.cls_reply}>
              <div className="postbox__comment-box  d-flex">
                <div className="postbox__comment-info">
                  <div className="postbox__comment-avater mr-20">
                    <Image src={item.img} alt="theme-pure" />
                  </div>
                </div>
                <div className="postbox__comment-text">
                  <div className="postbox__comment-name d-flex">
                    <h5>{item.name}</h5>
                    <span className="post-meta">{item.date}</span>
                  </div>
                  <p>{item.comment}</p>
                  <div className="postbox__comment-reply">
                    <Link href="#">
                      <ReplyIcon />
                      Reply
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </>
    );
};

export default Comments;