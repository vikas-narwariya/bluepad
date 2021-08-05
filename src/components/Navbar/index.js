import React, { Link } from "react";
import "./index.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <input id="nav-toggle" type="checkbox" />
        <div className="logo">
          BLUE<strong>PAD</strong>
        </div>
        <ul className="links">
          <li>
            <a href="/homepage">Home Page</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/article">Article</a>
          </li>
        </ul>
        <label for="nav-toggle" className="icon-burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </label>
      </nav>
    </>
  );
};

export default Navbar;
