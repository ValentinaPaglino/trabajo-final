const {Producto} = require("../DB_connection")

const createProducto= async ({
    titulo,
    autor,
    precio_$,
    nro_paginas,
    peso, 
    fecha_publicacion,
    ISBN,
    editorial,
    idioma,
    descripcion,
    stock,
    url_imagen,
    categoria,
})=>{
    const newProducto = await Producto.create({
    titulo,
    autor,
    precio_$,
    nro_paginas,
    peso, 
    fecha_publicacion,
    ISBN,
    editorial,
    idioma,
    descripcion,
    stock,
    url_imagen,
    });
    newProducto.addCategoria(categoria);
    // newProducto.addCategorias(categoria)
    return newProducto;
}

module.exports=createProducto;