import React from 'react';
import logo from '../../assets/images/logo.webp';
import './TopBar.css';
import { NavLink } from 'react-router-dom';
const TopBar = () => {
  return (
    <div className="py-2" style={{borderBottom: "1px solid #e5e5e5"}}>
      <div className="container d-flex justify-content-between align-items-center">

          <div className="d-flex align-items-center">
            <img src={logo} alt="Logo" style={{ height: '70px', cursor: 'pointer' }}/>
          </div>

          <div className="d-flex align-items-center gap-4">

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "topbar-item active" : "topbar-item"
              }
            >
              <i className="fa-solid fa-pizza-slice me-1"></i> MENÚ
            </NavLink>

            <NavLink
              to="/pedidos"
              className={({ isActive }) =>
                isActive ? "topbar-item active" : "topbar-item"
              }
            >
              <i className="fa-solid fa-receipt me-1"></i> PEDIDOS
            </NavLink>

            <NavLink
              to="/locales"
              className={({ isActive }) =>
                isActive ? "topbar-item active" : "topbar-item"
              }
            >
              <i className="fa-solid fa-store me-1"></i> LOCALES
            </NavLink>

            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "topbar-item active" : "topbar-item"
              }
            >
              <i className="fa-solid fa-user me-1"></i> INGRESAR
            </NavLink>

          </div>

      </div>
    </div>

  );
};

export default TopBar;
