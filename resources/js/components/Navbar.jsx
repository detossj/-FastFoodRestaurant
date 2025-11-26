import React from 'react'

const Navbar = () => {
  return (

    <div className="py-2" style={{borderBottom: "1px solid #e5e5e5"}}>
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
                    
                    <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown link
                            </a>
                            <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
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