import React from 'react'

const Navbar = () => {
  return (

    <div className="row justify-content-center mt-4">
       <div className="col-12 col-md-8 col-lg-8">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">INICIO</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">PROMOCIONES</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">PIZZAS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">HAMBURGESAS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">ACOMPANAMIENTOS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">BEBIDAS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">POSTRES</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">EXTRAS</a>
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