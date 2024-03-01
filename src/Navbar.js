import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import download2 from "./download2.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <div className="row w-100 align-items-center">
          <div className="col-auto">
            <img
              src={download2}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt=""
            />
          </div>
          <div className="col text-center fs-2 py-3">
            <span>မြန်မာ ဆယ့်နှစ်လရာသီပွဲတော်များ</span>
          </div>
          <div className="col-auto">
            <img
              src={download2}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt=""
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
