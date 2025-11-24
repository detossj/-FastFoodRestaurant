import React from 'react'
import burgerImg from '../../assets/images/burger-potato.jpg';
import pizzaDrinkImg from '../../assets/images/pizza-drink.jpg';
import pepperoniImg from '../../assets/images/pizza-peperoni.jpg';

const Home = () => {
  return (
    <div className="row justify-content-center mt-4">
       <div className="col-12 col-md-8 col-lg-8">
        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={burgerImg} class="d-block w-100" style={{ height: '500px', objectFit: 'cover'}} alt="Hamburguesa con papas"/>
                    </div>
                    <div class="carousel-item">
                    <img src={pizzaDrinkImg} class="d-block w-100" style={{ height: '500px', objectFit: 'cover'}} alt="Pizza con bebida"/>
                    </div>
                    <div class="carousel-item">
                    <img src={pepperoniImg} class="d-block w-100" style={{ height: '500px', objectFit: 'cover'}} alt="Pizza de pepperoni"/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
       </div>
    </div>
  )
}

export default Home