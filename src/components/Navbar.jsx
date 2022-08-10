import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <h2>BookStore CMS</h2>
      </div>
      <ul className="items">
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="/Categories">Categories</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
