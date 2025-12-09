import React from 'react'

const ItemCard = ({product}) => {
  return (
    <div className='card'>
        
        <p>{product.name}</p>
    </div>
  )
}

export default ItemCard