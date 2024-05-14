import Link from 'next/link';
import React from 'react';
import SearchClose from '../svg/search-close';
import SearchIcon from '../svg/search-icon';
import Image from 'next/image';
import  logo_white from "../../public/assets/img/logo/logo-white.png"

const SearchPopup = ({searchOpen, setSearchOpen}) => {
    return (
        <>
    <div className={`search__popup ${searchOpen ? "search-opened" : ""}`}>
      <div className="container">
         <div className="row">
            <div className="col-xxl-12">
               <div className="search__wrapper">
                  <div className="search__top d-flex justify-content-between align-items-center">
                     <div className="search__logo">
                        <Link href="/" onClick={() => setSearchOpen(false)}>
                           <Image src={logo_white} alt="theme-pure" />
                        </Link>
                     </div>
                     <div className="search__close">
                        <button onClick={() => setSearchOpen(false)} type="button" className="search__close-btn search-close-btn"> 
                           <SearchClose />                                 
                        </button>
                     </div>
                  </div>
                  <div className="search__form">
                     <form onSubmit={(e) => e.preventDefault()}>
                        <div className="search__input">
                           <input className="search-input-field" type="text" placeholder="Type here to search..." />
                           <span className="search-focus-border"></span>
                           <button type="submit"> 
                              <SearchIcon />
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
        </>
    );
};

export default SearchPopup;