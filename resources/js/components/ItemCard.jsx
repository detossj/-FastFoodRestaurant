import React from 'react';
import './ItemCard.css';
import Config from '../Config';

const ItemCard = ({ product }) => {
  return (
    <div className="product-card shadow rounded p-3">

      <div className="product-img-wrapper mb-3">
        <img 
          src={`${Config.API_BASE_URL}/storage/products/${product.image_url}`} 
          alt={product.name} 
          className="product-img"
          loading='lazy'
        />
      </div>




      <h5 className="fw-bold text-center">{product.name}</h5>


      <p className="text-muted text-center small">
        {product.description ?? 'Sin descripción disponible.'}
      </p>


      <p className="product-price text-center fw-semibold">
        ${product.price}
      </p>


      <div className="mt-auto text-center">
        <button className="btn btn-primary px-4" style={{backgroundColor: "rgb(249, 124, 47)", borderColor: 'rgb(249, 124, 47)'}}>Agregar</button>
      </div>
    </div>
  );
};

export default ItemCard;
