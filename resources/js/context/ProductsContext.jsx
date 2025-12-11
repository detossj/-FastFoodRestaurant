import React from 'react'
import { createContext, useContext, useEffect, useState } from "react";
import Config from "../Config";

// Es para crear el contexto (es como una caja donde se guardan datos para no pasar lso props)
const ProductsContext = createContext();

// Es para envolver la app y permite que todos los componentes dentro accedan a los datos
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadAllProducts = async () => {
    try {
      const { data } = await Config.getAllProducts(); 
      setProducts(data ?? []);
    } catch (err) {
      console.error("Error cargando productos:", err);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAllProducts();
  }, []);

  return (
    // al colocar los products y el loading en el value hace que cualquier componente pueda leerlos usando el useProducts que se define abajo
    <ProductsContext.Provider value={{ products, loading }}>
      {children}
    </ProductsContext.Provider>
  );
};

// Esto me permite hacer  const { products, loading } = useProducts() en cualquier componente
export const useProducts = () => useContext(ProductsContext);
