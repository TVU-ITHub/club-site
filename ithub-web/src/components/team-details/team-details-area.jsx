import CheckboxIcon from '@/svg/checkbox-icon';
import EmailFive from '@/svg/email-5';
import LocationIconThree from '@/svg/location-icon-3';
import ShareIcon from '@/svg/share-icon';
import React from 'react';


import team_img from "../../../public/assets/img/team/team-details-1.jpg";
import Image from 'next/image';
import Link from 'next/link';


const team_details_content = {
    name: "Imdat Cimsit",
    feature_list: [
        <>Cras sed felis eget velit aliquet. Morbi quis commodo odio</>,
        <>Pharetra vel turpis nunc eget lorem dolor. Quam vulputate <br />dignissim</>,
        <>Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.</>,
    ],
    expricence: [
        {id: 1, title: "Role:", info: "Design"},
        {id: 2, title: "Experience:", info: "14 years"},
    ],
    skill_title: "Superpower Skills:",
    details_skill: ["Interaction Design", "User Research", "Figma"],
    membur_about_title: "About Imdat Cimsit",
    about_info_1: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 </>,
    about_info_2: <>Cras sed felis eget velit aliquet. Morbi quis commodo odio aenean sed adipiscing diam donec adipiscing. Nibh tellus molestie nunc non blandit massa enim nec. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Posuere morbi leo urna molestie.
    </>,
}
const {
    name, 
    feature_list, 
    expricence,  
    skill_title, 
    details_skill, 
    membur_about_title, 
    about_info_1, 
    about_info_2
}  = team_details_content

const TeamDetailsArea = () => {
    return (
        <>
            <div className="team-details-area pt-100 pb-100">
               <div className="container">
                  <div className="row justify-content-center">
                     <div className="col-xl-10">
                        <div className="team-details-wrapper">
                           <div className="row">
                              <div className="col-xl-4 col-lg-4 col-md-4">
                                 <div className="team-details-img-box text-center">
                                    <div className="team-details-img">
                                       <Image src={team_img} alt="theme-pure" />
                                    </div>
                                    <div className="team-details-work-tag">
                                       <span> 
                                          <CheckboxIcon />
                                       </span>
                                       <span>Looking for Work</span>
                                    </div>
                                    <div className="team-details-work-location">
                                       <span> 
                                          <LocationIconThree />
                                       </span>
                                       <span>Newark, NJ</span>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-8 col-lg-8 col-md-8">
                                 <div className="team-details-info-box">
                                    <h3 className="team-details-client-title">{name}</h3>
                                    <div className="team-details-contact-box d-flex align-items-center">
                                       <div className="team-details-social-info">
                                          <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                                          <Link href="#"><i className="fab fa-twitter"></i></Link>
                                          <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                                          <Link href="#"><i className="fab fa-instagram"></i></Link>
                                       </div>
                                       <div className="team-details-personal-info">
                                          <Link href="#"> 
                                             <EmailFive />
                                             <span>Message</span>
                                          </Link>
                                          <Link href="#"> 
                                             <ShareIcon />
                                             <span>Share</span>
                                          </Link>
                                       </div>
                                    </div>
                                    <div className="team-details-expricence-box d-flex align-items-center">
                                       {expricence.map((item, i) => 
                                          <div key={i} className="team-details-expricence-box-1">
                                             <span>{item.title}</span> <br />
                                             <em>{item.info}</em>
                                          </div>
                                       )} 
                                    </div>
                                    <div className="team-details-skill">
                                       <h5>{skill_title}</h5>
                                       {details_skill.map((item, i)  => <span key={i}>{item}</span>)} 
                                    </div>
                                 </div>
                              </div>
                           </div> 
                        </div>
                     </div>
                  </div>
                  <div className="row justify-content-center">
                     <div className="col-xl-8 col-lg-10">
                        <div className="team-details-text-wrapper pt-80">
                           <div className="team-details-text">
                              <h4 className="team-details-title">{membur_about_title}</h4>
                              <p>{about_info_1}</p>
                           </div>
                           <div className="team-details-feature-list">
                              <ul>
                              {feature_list.map((item, i) => <li key={i}>{item}</li>)} 
                              </ul>
                              <p>{about_info_2}</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
         </div>
        </>
    );
};

export default TeamDetailsArea;