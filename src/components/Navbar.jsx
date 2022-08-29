import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

// use react-router Link or NavLink

const Navbar = () => {

  const {token,handleLogout} = useContext(AuthContext)
  return (
    <div data-cy="navbar" className="navbar">
      <Link data-cy="navbar-home-link" to={'/'}>LOGO</Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}</span>
      <button data-cy="navbar-login-logout-button" onClick={()=>handleLogout()}>{token===''?"Login":"Logout"}</button>
    </div>
  );
};

export default Navbar;
