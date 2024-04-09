import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../AuthContext";

const Navbar = () => {
  const { loggedIn, handleLogout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link className="button" to="/">
          Greener 
          <br />
          GRUB
        </Link>
      </div>
      <div className="reveal-text">
        <ul className="buttons">
          <li>
            <Link className="button" to="/">
              Home
            </Link>
          </li>
          
          <li>
            <Link className="button" to="/donation">
              Donate
            </Link>
          </li>
          <li>
            <Link className="button" to="/partners">
            Our Partners
            </Link>
          </li>
          <li>
            <Link className="button" to="/inventory">
            Inventory
            </Link>
          </li>
          <li>
            <Link className="button" to="/ecopro">
              Eco-Analytics
            </Link>
          </li>
        </ul>
      </div>
      {loggedIn ? (
        <div className="join-button">
          <Link className="join-button button" to="/" onClick={handleLogout}>
            LOG OUT
          </Link>
        </div>
      ) : (
        <div className="join-button">
          <Link className="join-button button" to="/login">
            LOG IN
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
