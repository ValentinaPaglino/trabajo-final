const {Producto, Categoria}=require("../DB_connection");
// const Categoria = require("../models/Categoria");

const findAllProductos = async (req, res)=>{
    try {
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
    
    return res.status(200).json(productos); 
    } catch (error) {
        res.send(500).json(error.message)
    }
   
}

module.exports = findAllProductos;