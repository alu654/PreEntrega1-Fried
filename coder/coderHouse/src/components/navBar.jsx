import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import CartWidget from './CartWidget';
import apple from '../imagenes/apple.png'



const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
      <div className="logo">
  <img src={apple} alt="Logo" />
</div>

        <div className="menu-icon" onClick={handleShowNavbar}>
          <FaBars />
        </div>
        <ul className={`nav-links ${showNavbar ? 'active' : 'inactive'}`}>
          <li>
            <NavLink to="zapatillas/">Zapatillas</NavLink>
          </li>
          <li>
            <NavLink to="/remeras">Remeras</NavLink>
          </li>

          <li>
            <CartWidget />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
