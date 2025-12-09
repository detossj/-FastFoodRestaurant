import React, { useEffect, useState } from 'react'
import Config from '../Config';
import ItemCard from './ItemCard';
import LoadingBar from './LoadingBar';

const ItemsList = ({id}) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const LoadProducts = async () => {
    try {

      const { data } = await Config.getProductsByCategory(id);

      setProducts(data ?? [])

      setLoading(false);

    } catch (error) {

      console.error('Error al cargar los datos:',error)
      
      setProducts([])

      setLoading(false);
    }
  }

  useEffect(() => {
    LoadProducts()
  },[]); 

  if (loading) {
    return (
      <LoadingBar/>
    );
  }

  return (
    <>
      <div className='container p-5' style={{ minHeight: "100vh" }}>
        {
          products.map((product) => {
            return <ItemCard product={product}/>
          })
        }
      </div>
    </>
  )
}

export default ItemsList