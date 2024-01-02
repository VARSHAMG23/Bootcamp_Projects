import React from 'react';
import homepageStyle from './Homepage.module.css';

function Homepage() {
  return (
    <div  className={homepageStyle.page}>
      <nav className={homepageStyle.navbar}>
        <div className={homepageStyle.navdiv}>
          <button><a href="/login">Login</a></button>
        </div>
        <div className={homepageStyle.navdiv}>
          <button><a href="/register">Register</a></button>
        </div>
      </nav>
      <br />
      <br />
      <br />
      <br />
      <div className={homepageStyle.name}>
        <div id="home" className={homepageStyle['header-container']}>
          <h1>BLOG</h1>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
