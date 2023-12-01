import React, { createContext, useState } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = producto => {
    setCarrito(carritoActual => [...carritoActual, producto]);
  };

  const removerDelCarrito = productoId => {
    setCarrito(carritoActual => carritoActual.filter(item => item.id !== productoId));
  };

  const actualizarCantidad = (productoId, cantidad) => {
    setCarrito(carritoActual =>
      carritoActual.map((producto) =>
        producto.id === productoId ? { ...producto, cantidad: cantidad } : producto
      )
    );
  };

  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, removerDelCarrito, actualizarCantidad }}>
      {children}
    </CarritoContext.Provider>
  );
};
