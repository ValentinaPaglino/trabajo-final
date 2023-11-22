import React from 'react'


function DetalleDeProducto(props) {
  
  
    const {titulo, autor, precio_$, editorial, categoria, año_publicacion} = props;

  return (
    <div>
        <h2>{titulo}</h2>
        <h5>Autor: {autor}</h5>
        <h5>$ {precio_$}</h5>
        <h5>Editorial: {editorial}</h5>
        {/* <h5>Categoria: {categoria}</h5> */}
        <h5>Año de publicación: {año_publicacion}</h5>
        <button>Ver detalle</button>
        <hr></hr>


    </div>
  )
}

export default DetalleDeProducto