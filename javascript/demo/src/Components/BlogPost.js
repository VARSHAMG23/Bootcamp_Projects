import React from 'react';
import welcome from './BlogPost.module.css';

function BlogPost() {
  return (
    <div className={welcome.pages}>
      <div className={welcome.navbar}>
        <a href="/">Home</a>
        <div className="dropdown">
          <button className="dropbtn">More
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#">Update</a>
            <a href="#">Edit</a>
            <a href="#"> Delete</a>
            <a href="#"> Delete account</a>
          </div>
        </div> 
      </div>
      <div className={welcome.container}>
        <div className={welcome.box}>
          <ul>
            <li><span><h1>Title</h1></span></li>
            <li><span>AUTHOR: </span></li>
            <li><span> Content</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
