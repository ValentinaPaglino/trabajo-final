const {Producto, Categoria}=require("../DB_connection");
// const Categoria = require("../models/Categoria");

const findAllProductos = async ()=>{
    const productos = await Producto.findAll(
        {
            include: {
                model: Categoria,
                attribute: ["nombre"],
                through: {
                    attributes:[],},
            },
        }
    ); 
    
    return productos; 
}

module.exports = findAllProductos;