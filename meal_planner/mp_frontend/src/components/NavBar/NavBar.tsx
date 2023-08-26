import React from 'react';
import './NavBar.css'

function NavBar() {
  return (
    <div className="main-nav">
      <nav className="container d-flex flex-row justify-content-around align-items-center">
        <a href=""><i className="fa-solid fa-burger"></i></a>
        <h1 className="site-branding">Welcome to Meal Planner</h1>
        <img src="https://placehold.co/25" alt="" />
      </nav>
    </div>
  );
}

export default NavBar;
