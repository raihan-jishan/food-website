/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */ // just disable Eslint for entire file
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../css/navbar.css";
const Nav = () => {
  const [click, setClick] = useState(false);
  const [search, setSearch] = useState(false);
  //  handle click function for Navbar close and open !
  const handleClick = () => setClick(!click);
  //  handle Search for search box
  const handleSearch = () => setSearch(!search);
  //  close nav menu when this function was clicked !
  const closeMobileMenu = () => setClick(false);
  return (
    <div>
      <header>
        <a href="#" className="logo">
          <i className="fas fa-utensils"></i>resto.
        </a>

        {/*  main links */}
        <nav className={click ? "navbar active" : "navbar"}>
          <a className="active" href="#home" onClick={closeMobileMenu}>
            home
          </a>
          <a href="#dishes" onClick={closeMobileMenu}>
            dishes
          </a>
          <a href="#about" onClick={closeMobileMenu}>
            about
          </a>
          <a href="#menu" onClick={closeMobileMenu}>
            menu
          </a>
          <a href="#review" onClick={closeMobileMenu}>
            review
          </a>
          <a href="#order" onClick={closeMobileMenu}>
            order
          </a>
        </nav>
        {/*  icons  */}
        <div className="icons">
          <i
            className={click ? "fas fa-times" : "fas fa-bars"}
            id="menu-bars"
            onClick={handleClick}
          ></i>
          <i
            className={search ? "fas fa-times" : "fas fa-search"}
            id="search-icon"
            onClick={handleSearch}
          ></i>
         <Link to={"/emoji-love94823483"}><a href="#" className="fas fa-heart"></a></Link>
          <a href="#" className="fas fa-shopping-cart"></a>
        </div>
        {/*  search forms */}
        <form action="" id={search ? "search-form active" : "search-form"}>
          <input
            type="search"
            placeholder="search here..."
            name=""
            id="search-box"
          />
          <label form="search-box" className="fas fa-search"></label>
          <i className="fas fa-times" id="close"></i>
        </form>
      </header>
    </div>
  );
};

export default Nav;
