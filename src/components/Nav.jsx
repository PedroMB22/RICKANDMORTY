import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./Nav.css";

const Nav = ({ onSearch }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    location.pathname !== '/' && (
      <div>
      <SearchBar onSearch={onSearch} />
      <button className="nav-button">
        <Link to="/home">Home</Link>
      </button>
      <button className="nav-button">
        <Link to='/favorites'>Favoritos</Link>
      </button>
      <button className="nav-button">
        <Link to='/about'>About</Link>
      </button>
      <button className="nav-button" onClick={handleLogout}>
        Log out
      </button>
    </div>
    )
  );
};
export default Nav;