import React from "react";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="container nav__container">
          <ul>
            <li>
              <Link to="/">
                <AiFillHome />
              </Link>
            </li>
            <li></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
