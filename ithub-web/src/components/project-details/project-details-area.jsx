import React from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicEffect';
import SocialLinks from '@/common/social-links';
import Image from 'next/image';
import solution_1  from "../../../public/assets/img/project/solution-1.jpg";
import solution_2  from "../../../public/assets/img/project/solution-2.jpg";


const project_details_data = [
    {
        id: 1,
        cls: "info", 
        title: "Duis aute irure dolor in reprehenderit",
        feture_list: false,
        description: <>Posuere nibh vestibulum, velit pulvinar interdum sed in. Magnis netus magna urna, in tempor magna. Tortor vel vitae vel mi. Leo pellentesque eget pellentesque magnis. Pellentesque molestie sem massa nibh suspendisse ante eget. Sit dolor arcu scelerisque sit nibh nunc, vulputate cursus. Feugiat in tortor non mauris, sit. Hac adipiscing dui sit magna. Integer elementum et amet hac turpis. Sagittis magna nulla ut gravida integer pellentesque.</>,
        
    },
    {
        id: 2,
        cls: "overview", 
        title: "Overview",
        feture_list: [
            <>Create & Save your notes with multi-media</>,
            <>Complete note editor with rich text options</>,
            <>Automatically sync in real time</>,
            <>Web Clipper Extension</>,
        ],
        description: <>Felis morbi ut tristique pretium libero. Eget purus, enim, orci, quis tempor sed. Sed nec eget nibh et Ut orci, sagittis tellus dui congue. Blandit laoreet nullam amet eget. Ut tincidunt diam tempor sed turpis odio vitae sem lobortis. Lobortis enim non eu a.</>, 

    },
]

const project_details_content = { 
    solution_title: "Solution & Result",
    des_1: <>Felis morbi ut tristique pretium libero. Eget purus, enim, orci, quis tempor sed. Sed nec eget nibh et Ut orci, sagittis tellus dui congue. Blandit laoreet nullam amet eget. Ut tincidunt diam tempor sed turpis odio vitae sem lobortis. Lobortis enim non eu a. In gravida velit pretium commodo odio ridiculus odio enim.Tincidunt eget tellus pellentesque nulla.</>,
    des_2: <>Sed morbi dignissim odio enim volutpat. Viverra facilisi aliquet sed purus id ornare nunc, sit ipsum.Risus amet non eget velit nunc, libero vitae. Arcu maecenas in montes, tincidunt pulvinar euismod ac proin</>,
}
const {solution_title, des_1, des_2 }  = project_details_content;

const ProjectDetailsArea = () => {
   
   useIsomorphicLayoutEffect(() => {
      ScrollTrigger.create({
         trigger: ".social-box-pin",
         start: "top 10%",
         end: "bottom 60%",
         pin: ".social-box-pin",
         pinSpacing: false
        });
   },[])

    return (
        <>
            <div className="pd-details-area pt-100 pb-100">
               <div className="container">
                  <div className="row g-0">
                     <div className="col-xl-2 col-lg-2 social-box-pin">
                        <div className="pd-details-social-box text-lg-center text-start p-relative">
                           <div className="pd-details-social-title">
                              <span>Share This <br />Story</span>
                           </div>
                           <div className="pd-details-social">
                            <SocialLinks /> 
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-10 col-lg-10 ">
                        <div className="pd-details-wrapper">
                            {project_details_data.map((item, i)  => 
                                <div key={i} className={`pd-details-${item.cls}`}>
                                    <h4 className="pd-details-title">{item.title}</h4>
                                    {item.feture_list && 
                                        <ul>{item.feture_list?.map((list, i)  => 
                                        <li key={i}>{list}</li>)} 
                                        </ul> 
                                    }
                                    <p>{item.description}</p>
                                </div>                                
                            )} 
                           <div className="pd-details-solution">
                              <div className="pd-details-solution-img-box d-flex align-items-center">
                                 <div className="pd-details-solution-img mr-30">
                                    <Image src={solution_1} alt="theme-pure" />
                                 </div>
                                 <div className="pd-details-solution-img">
                                    <Image src={solution_2} alt="theme-pure" />
                                 </div>
                              </div>
                              <div className="row">
                                 <div className="col-md-3">
                                    <div className="pd-solution-title-box">
                                       <h4 className="pd-details-title">{solution_title}</h4>
                                    </div>
                                 </div>
                                 <div className="col-md-9">
                                    <div className="pd-solution-paragraph">
                                       <p>{des_1}</p>
                                       <p>{des_2}</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default ProjectDetailsArea;