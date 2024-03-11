import React from 'react';
import { Link } from 'react-router-dom';
import '/src/component/header.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
       <h1  style={{"font-family": "cursive",
      }}><span style={{"color" : "red"}}>Q</span>ue<span style={{"color" : "green"}}>st</span>ify</h1>
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/Admin" className="nav-links">
              Admin
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/quiz-stepper" className="nav-links">
              Take Quiz
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
