import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
      <h1>BookStore</h1>
        <Link to="/">Books</Link>
        <Link to="/catagories">Catagories</Link>
      </nav>
    </div>
  )
}

export default Navbar;
