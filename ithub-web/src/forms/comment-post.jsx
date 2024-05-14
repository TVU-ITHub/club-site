import React from "react";

const CommentPost = () => {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className="box">
        <div className="row gx-20">
          <div className="col-xxl-4 col-xl-6 col-lg-4">
            <div className="postbox__comment-input mb-35">
              <input type="text" className="inputText" required />
              <span className="floating-label">Your Name</span>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-6 col-lg-4">
            <div className="postbox__comment-input mb-35">
              <input type="text" className="inputText" required />
              <span className="floating-label">Your Email</span>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-6 col-lg-4">
            <div className="postbox__comment-input mb-35">
              <input type="text" className="inputText" required />
              <span className="floating-label">Your Website</span>
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__comment-input mb-20">
              <textarea className="textareaText" required></textarea>
              <span className="floating-label-2">Your Comment</span>
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__comment-agree">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  I agree that my submitted data is being collected and stored.
                </label>
              </div>
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__comment-btn">
              <button type="submit" className="tp-btn-inner">
                Post comment
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CommentPost;
