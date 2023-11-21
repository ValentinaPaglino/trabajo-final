
import './App.css'

import Producto from './components/Detalle de Producto/DetalleDeProducto'
import ListadoDeProductos from './components/Listado de Productos/ListadoDeProductos';
import DetalleDeProducto from './components/Listado de Productos/ListadoDeProductos'
import SearchBar from './components/SearchBar/SearchBar'
import libros, {Libro} from './data.js';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import data from './data.js';

function App() {
  

fetch(`http://localhost:3000`)
  .then((response)=>response.json())
  .then((data)=>console.log(data));


  return (

    <div>
 <SearchBar></SearchBar>


<Routes>
{/* <Route path={"/"} element={ <ListadoDeProductos data={data} ></ListadoDeProductos>}></Route>  */}


<Route path={"/"} element={ <ListadoDeProductos libros={[
    {
        id: 1,
        titulo: 'El Perfume',
        autor: 'Suskind, Patrick',
        precio: 1270.00,
        editorial: 'Editorial Falsa',
        categoria: 'Novela',
        año_publicacion: 2018
     
     },
    {
        id: 2,
        titulo: 'El Choque de Civilizaciones',
        autor: 'Huntingthon, Samuel',
        precio: 10270.00,
        editorial: 'XXX',
        categoria: 'Sociologia',
        año_publicacion: 2000
     
     },

     {
        id: 3,
        titulo: 'Fundamentos Antropologicos de la Psicologia',
        autor: 'Pelegrina Cetran, Hector',
        precio: 270.00,
        editorial: 'Ediciones Polifemo',
        categoria: 'Psicologia',
        año_publicacion: 2001
     
     },

     {
        id: 4,
        titulo: 'Anatomia y Fisiologia',
        autor: 'Totora',
        precio: 25000.00,
        editorial: 'Oxford',
        categoria: 'Medicina',
        año_publicacion: 2005
     
     },]}></ListadoDeProductos>}></Route>

</Routes>

     
      
     
    </div>
  )
} 

export default App
