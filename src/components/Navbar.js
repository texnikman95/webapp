import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>Texnikman.uz</h1>
      <div>
        <Link to="/">Bosh sahifa</Link>
        <Link to="/cart">Savatcha</Link>
      </div>
    </nav>
  );
};

export default Navbar;
