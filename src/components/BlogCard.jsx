import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
const BlogCard = () => {
   const location = useLocation().pathname;
  return (
     <div className={`${location=="/blogs"?"gr-6":"col-3"}`}>
        <div className="blog-card">
            <div className="card-image">
               <img src="./src/assets/images/blog-1.jpg" className='img-fluid w-100' alt="blog" />
            </div>
            <div className="blog-content">
                <p className='date'>15 September 2024</p>
                <h5 className="title">A Beautiful Sunday Morning Renaissance</h5>
                <p className="desc">Your Are Only As Good As Your Collection, Which Is An Enormous Pressure. I Think...</p>
                <Link to='/blog/1' className="button">READ MORE</Link>
            </div>
        </div>
     </div>
  )
}

export default BlogCard;
