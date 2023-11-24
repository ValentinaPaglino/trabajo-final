import './App.css'

import ListadoDeProductos from './components/Listado de Productos/ListadoDeProductos';
import SearchBar from './components/SearchBar/SearchBar'
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Filtros from './components/Filtros/Filtros';

function App() {

  const [libros, setLibros] = useState([]);
  const [librosFiltrados, setLibrosFiltrados] = useState([]);

  // Obtener los libros al cargar el componente
  useEffect(() => {
    fetch('http://localhost:3000')
      .then((response) => response.json())
      .then((data) => {
        setLibros(data);
        setLibrosFiltrados(data);
      });
  }, []);

  const onPriceChange = (nuevoPrecio) => {
    fetch(`http://localhost:3000/?precio_$=${nuevoPrecio}`)
        .then(response => response.json())
        .then(data => {
            setLibrosFiltrados(data);
        })
        .catch(error => console.error('Error:', error));
};

  // Manejar el cambio de filtro
  const handleFilterChange = (categoria) => {
    const queryParams = new URLSearchParams();
    if (categoria) {
      queryParams.append('categoria', categoria);
    }
    
    fetch(`http://localhost:3000/?${queryParams.toString()}`)
      .then(response => response.json())
      .then(data => {
        setLibrosFiltrados(data);
      })
      .catch(error => console.error('Error:', error));
  };


  return (
    <div>
      <SearchBar />
      <Filtros onFilterChange={handleFilterChange} onPriceChange={onPriceChange} />

      <Routes>
        <Route path={"/"} element={<ListadoDeProductos libros={librosFiltrados} />} />
      </Routes>
    </div>
  )
} 

export default App
