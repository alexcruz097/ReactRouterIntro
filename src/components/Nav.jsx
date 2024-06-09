import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">HOME</Link>
      <Link to="/chips">CHIPS</Link>
      <Link to="/soda">SODA</Link>
    </div>
  );
};

export default Nav;
