import SearchIcon from "@/svg/search-icon";
import React from "react";

const Search = () => {
  return (
    <>
      <div className="sidebar__widget mb-40">
        <div className="sidebar__widge-title-box">
          <h3 className="sidebar__widget-title">Search</h3>
        </div>
        <div className="sidebar__widget-content">
          <div className="sidebar__search">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="sidebar__search-input-2">
                <input type="text" placeholder="Search your keyword..." />
                <button type="submit">
                  <SearchIcon />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
