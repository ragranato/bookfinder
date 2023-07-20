import React from 'react'
import "./NavBar.styles.scss"

const NavBar = () => {
  return (
    <div id="navbar">
      <h1>BookFinder</h1>
      <div className="navlink">
        <a href="#">Home</a>
      </div>
    </div>
  );
}

export default NavBar