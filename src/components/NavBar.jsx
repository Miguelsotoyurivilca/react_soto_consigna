import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <h1>
            <span className="logo-icon">☕</span> Cafe Catalino
          </h1>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#" className="nav-link">Inicio</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Productos</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Nosotros</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Contacto</a>
          </li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;