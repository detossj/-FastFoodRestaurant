import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css';

const Navbar = () => {
  return (
    <div className="py-2" style={{borderBottom: "1px solid #e5e5e5"}}>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">

                <li className="nav-item">
                  <NavLink 
                    to="/" 
                    className={({ isActive }) =>
                      isActive ? "navbar-item active" : "navbar-item"
                    }
                  >
                    INICIO
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink 
                    to="/promociones" 
                    className={({ isActive }) =>
                      isActive ? "navbar-item active" : "navbar-item"
                    }
                  >
                    PROMOCIONES
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink 
                    to="/pizzas" 
                    className={({ isActive }) =>
                      isActive ? "navbar-item active" : "navbar-item"
                    }
                  >
                    PIZZAS
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink 
                    to="/hamburguesas" 
                    className={({ isActive }) =>
                      isActive ? "navbar-item active" : "navbar-item"
                    }
                  >
                    HAMBURGUESAS
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink 
                    to="/acompanamientos" 
                    className={({ isActive }) =>
                      isActive ? "navbar-item active" : "navbar-item"
                    }
                  >
                    ACOMPAÑAMIENTOS
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink 
                    to="/bebidas" 
                    className={({ isActive }) =>
                      isActive ? "navbar-item active" : "navbar-item"
                    }
                  >
                    BEBIDAS
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink 
                    to="/postres" 
                    className={({ isActive }) =>
                      isActive ? "navbar-item active" : "navbar-item"
                    }
                  >
                    POSTRES
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink 
                    to="/extras" 
                    className={({ isActive }) =>
                      isActive ? "navbar-item active" : "navbar-item"
                    }
                  >
                    EXTRAS
                  </NavLink>
                </li>

              </ul>
            </div>

          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
