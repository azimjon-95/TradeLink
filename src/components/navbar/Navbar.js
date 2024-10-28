import React from "react";
import './style.css';
import { CgMenuGridO } from "react-icons/cg";
import logo from '../../assets/logo.png';


function Navbar() {
  return (
    <div className="navbar_conatiner">
      <div className="nav_links-box">
        <div className="nav_logo">
          <img src={logo} alt="" />
        </div>
        <button><CgMenuGridO /></button>
      </div>
      <div className="nav_links-main">
        <button>About</button>
        <button>Products</button>
        <button>FAQ</button>
        <button>Careers</button>
      </div>
      <div className="nav_links-box">
      </div>
    </div>
  );
}

export default Navbar;
