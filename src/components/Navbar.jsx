import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark container nav-bar-menu">
      <h4>
        <Link className="link" to="/classer">
          Classer
        </Link>
      </h4>
      <h4>
        <Link className="link" to="/consulter">
          Consulter
        </Link>
      </h4>
    </nav>
  );
};

export default Navbar;
