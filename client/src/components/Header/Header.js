import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return <div className="header">
    <div className="nav">
      <Link to="/">Home</Link>
    </div>
    <div className="nav">
      <Link to="/comments/new">New Comment</Link>
    </div>
  </div>
};

export default Header;
