import React, { useState } from 'react';


const HeroBanner = ({ bg_img,title="Get In",subtitle="Touch" }) => {
    const [offset, setOffset] = useState(0);

   function handleScroll() {
      setOffset(window.scrollY);
   }
   // Add an event listener to update the offset on scroll
   React.useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

    return (
        <>
            <div className="about-img-area mb-100 z-index-3">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="about-img about-img-height p-relative"
                                style={{ backgroundImage: `url(${bg_img})` }}>
                                <div className="about-img-content">
                                    <h4 style={{ transform: `translateY(${offset * 0.9}px)` }} className="about-img-title">
                                        <span>{title}</span> <br />
                                        <span>{subtitle}</span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroBanner;