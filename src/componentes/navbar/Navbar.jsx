import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="mi-navbar">
      <div className="navbar-brand">
        <a href="/">Mi Sitio Web</a>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Buscar" />
        <button type="submit">Buscar</button>
      </div>
    </nav>
  );
};

export default Navbar;