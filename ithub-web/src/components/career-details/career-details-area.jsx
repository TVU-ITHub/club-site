import ClockIcon from '@/svg/clock-icon';
import LocationIconThree from '@/svg/location-icon-3';
import NiceSelect from '@/ui/nice-select';
import Link from 'next/link';
import React,{useState} from 'react';


const career_content ={
    sub_title: "Developer",
    title: "Senior Frontend Developer",
    job_post_details: [
        {
            id: 1, 
            cls: "mb-45",
            title: "Job Responsibilities",
            description: <>There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered alteration in some form, by injected humour, or randomised words which don't
            look even slightly believable. If you are going to use a passage
            of Lorem Ipsum,anything embarrassing hidden.</>, 
        },
        {
            id: 2, 
            cls: "mb-45",
            title: "Job Requirements",
            description: <>There are many variations of passages of Lorem Ipsum available, but the
            majority have suffered alteration in some form, by injected humour, or randomised words
            which don't look even slightly believable. If you are going to use a passage
            of Lorem Ipsum,anything embarrassing hidden.</>,
            experiences: [
                <>5+ years experience in backend engineering, <br />
                ideally in Python or Node</>,
                <>Experience building and operating backend <br />
                distributed systems</>,
                <>Experience designing serverless architectures <br />
                on AWS infrastructure</>, 

            ],
        },
        {
            id: 3, 
            cls: "mb-45",
            title: "Our Benefits",
            description: <>Now, the paradigm has shifted. The question is not why you should include
            a content marketing strategy.</>,
            experiences: [
                <>Flexible hours</>,
                <>Unlimited PTO</>,
                <>Medical insurance</>,
                <>Career growth</>,

            ],
        },
        {
            id: 4, 
            cls: "mb-20",
            title: "Job Requirements",
            description: <>There are many variations of passages of Lorem Ipsum available, but the
            majority have suffered alteration in some form, by injected humour, or randomised words
            which don't look even slightly believable. If you are going to use a passage
            of Lorem Ipsum,anything embarrassing hidden.</>,
            experiences: [
                <>Experience building software and systems that balance <br /> simplicity,
                flexibility, and security.</>,
                <>Track record with a smart contract language <br /> such as Solidity</>,
                <>A customer-focused and product-focused mindset.</>,
                

            ],
        },
        {
            id: 5, 
            cls: "",
            title: "Education & Experience",
            description: <>TBachelors Degree in Interaction, Graphic Design, Media Arts or similar.</>, 
        },

    ]
}
const {sub_title, title, job_post_details}  = career_content


const CareerDetailsArea = () => {
    const [isOpen, setIsOpen]  = useState(false)
    const applyHandler = () =>{
        setIsOpen(true) 
    }

  const selectHandler = (e) => {};


    return (
        <>
            <div className="career-details-area career-border-bottom pt-110 pb-110">
               <div className="container">
                  <div className="row align-content-start">
                     <div className="col-xl-7 col-lg-7">
                        <div className="career-details-wrapper">
                           <div className="career-details-title-box">
                              <span>{sub_title}</span>
                              <h4 className="career-details-title">{title}</h4>
                           </div>
                           <div className="career-details-location-box">
                              <span> 
                                 <LocationIconThree />
                                 London, UK
                              </span>
                              <span> 
                                 <ClockIcon />
                                 Full-time
                              </span>
                              <span>Senior</span>
                           </div>
                           {job_post_details.map((item, i)  => 
                              <div key={i} className={`career-details-job-responsiblity ${item.cls}`}>
                              <h4 className="career-details-title-sm">{item.title}</h4>
                              <p className="pb-15">{item.description}</p>
                              {item.experiences && 
                              <div className="career-details-job-list">
                                 <ul>
                                 {item?.experiences?.map((list , index)  =>
                                    <li key={index}> 
                                          <i className="fal fa-long-arrow-right"></i>
                                             {list}
                                    </li>
                                 )} 
                                 </ul>
                              </div>
                              }
                           </div>
                              )
                           } 
                        </div>
                     </div>
                     <div className="col-xl-5 col-lg-5 career-details-pin">
                        <div className="col-xxl-12">
                           <div className="postbox__apply-btn-border">
                              <div id="my-btn" className="postbox__apply-btn-box">
                                 {!isOpen && 
                                 <button onClick={() => applyHandler()} className="submit-btn mb-50 w-100" 
                                 >Apply For This Job</button>
                                 }
                              </div>
                           </div>
                        </div>
                        {isOpen &&
                        <div id="show" className="career-details-hide-wrapper" >
                        
                           <div className="career-details-apply-info-box pb-10">
                              <div className="career-details-profile-box pb-20">
                                 <h4 className="career-details-title-xs">Profile</h4>
                                 <p>Basic information about you</p>
                              </div>
                              <div className="postbox__comment-form">
                                 <form  onSubmit={(e) => e.preventDefault()} className="box">
                                    <div className="row gx-20">
                                       <div className="col-12">
                                          <div className="postbox__comment-input mb-30">
                                             <input type="text" className="inputText" required />
                                             <span className="floating-label">Full  Name</span>
                                          </div>
                                       </div>
                                       <div className="col-12">
                                          <div className="postbox__comment-input mb-30">
                                             <input type="text" className="inputText" required />
                                             <span className="floating-label">Your Email</span>
                                          </div>
                                       </div>
                                       <div className="col-12">
                                          <div className="postbox__comment-input mb-30">
                                             <input type="text" className="inputText" required />
                                             <span className="floating-label">Phone</span>
                                          </div>
                                       </div>
                                       <div className="col-12">
                                          <div className="postbox__comment-input mb-35">
                                             <input type="text" className="inputText" required />
                                             <span className="floating-label">Address</span>
                                          </div>
                                       </div>
                                    </div>
                                 </form>
                              </div>
                           </div>

                           <div className="career-details-apply-info-box">
                              <div className="career-details-profile-box pb-20">
                                 <h4 className="career-details-title-xs">Application Details</h4>
                                 <p>Summarize your relevant experience</p>
                              </div>
                              <div className="postbox__comment-form">
                                 <form onSubmit={(e) => e.preventDefault()} className="box">
                                    <div className="row gx-20">
                                       <div className="col-12">
                                          <div className="postbox__comment-input mb-30">
                                             <input type="text" className="inputText" required />
                                             <span className="floating-label">LinkedIn Profile</span>
                                          </div>
                                       </div>
                                       <div className="col-12">
                                          <div className="postbox__comment-input mb-30">
                                             <input type="text" className="inputText" required />
                                             <span className="floating-label">Personal website</span>
                                          </div>
                                       </div>
                                       <div className="col-12">
                                          <div className="postbox__select mb-30"> 
                                             <NiceSelect
                                             options={[
                                             { value: "Your Inquiry about", text: "Your Inquiry about" },
                                             { value: "01 Year", text: "01 Year" },
                                             { value: "02 Year", text: "02 Year" },
                                             { value: "03 Year", text: "03 Year" },
                                             { value: "04 Year", text: "04 Year" },
                                             { value: "05 Year", text: "05 Year" },
                                             ]}
                                             defaultCurrent={0}
                                             onChange={selectHandler}
                                             />
                                          </div>
                                       </div>
                                       <div className="col-12">
                                          <div className="postbox__comment-input mb-35">
                                             <input type="text" className="inputText" required />
                                             <span className="floating-label">Expected salary</span>
                                          </div>
                                       </div>
                                    </div>
                                 </form>
                              </div>
                              <div className="col-xxl-12">
                                 <div className="postbox__authorization-title-box">
                                    <h5 className="career-details-title-xs pb-15">US work authorization<span>*</span></h5>
                                 </div>
                                 <div className="postbox__authorization p-relative">
                                    <div className="switcher mb-15">
                                       <label htmlFor="toggle-0">
                                          <small className="switcher-icon"> 
                                             Are you legally authorized to work in the <br /> United States?
                                          </small>
                                          <input type="checkbox" id="toggle-0" />
                                          <span><small></small></span>
                                       </label>
                                    </div>
                                    <div className="switcher">
                                       <label htmlFor="toggle-1">
                                          <small className="switcher-icon"> 
                                             Do you or will you require sponsorship for a US <br /> employment visa (e.g. H-1B)?
                                          </small>
                                          <input type="checkbox" id="toggle-1" />
                                          <span><small></small></span>
                                       </label>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xxl-12">
                                 <div className="postbox__comment-input mb-30">
                                    <textarea className="textareaText" required ></textarea>
                                    <span className="floating-label-2">Personal note</span>
                                 </div>
                              </div>
                              <div className="col-xxl-12">
                                 <div className="postbox__resume-title-box">
                                    <h5 className="career-details-title-xs pb-15">Upload a recent resume or CV</h5>
                                 </div>
                                 <div className="postbox__resume mb-30">
                                    <input id="cv" type="file" hidden />
                                    <label htmlFor="cv">
                                       <span> 
                                          Drag to upload your resume, or browse
                                       </span>
                                    </label>
                                 </div>
                              </div>
                              <div className="col-xxl-12">
                                 <div className="postbox__btn-box mb-50">
                                    <button className="submit-btn w-100">Submit Application</button>
                                 </div>
                              </div>
                           </div>

                        </div>
                        }
                        <div className="col-xxl-12">
                           <div className="career-details-social-box mb-20">
                              <Link className="facebook" href="#"><i className="fab fa-facebook-f"></i></Link>
                              <Link className="twitter" href="#"><i className="fab fa-twitter"></i></Link>
                              <Link className="instagram p-relative" href="#">
                                 <div className="insta-bg"></div>
                                 <i className="fab fa-instagram"></i>
                              </Link>
                              <Link className="linkedin" href="#"><i className="fab fa-linkedin-in"></i></Link>
                           </div>
                           <div className="career-details-bottom-text text-center">
                              <Link href="#">Employee at Softec?</Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default CareerDetailsArea;