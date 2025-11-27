import React from 'react'

const Navbar = () => {
  return (

    <div className="py-2" style={{borderBottom: "1px solid #e5e5e5"}}>
        <div className="container">
            <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">

                    <li className="nav-item">
                    <a className="nav-link active" href="#">INICIO</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link" href="#">PROMOCIONES</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link" href="#">PIZZAS</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link" href="#">HAMBURGESAS</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link" href="#">ACOMPAÑAMIENTOS</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link" href="#">BEBIDAS</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link" href="#">POSTRES</a>
                    </li>

                    <li className="nav-item">
                    <a className="nav-link" href="#">EXTRAS</a>
                    </li>
                </ul>
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown link
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
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