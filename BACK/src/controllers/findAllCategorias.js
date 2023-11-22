const {Categoria} = require("../DB_connection");

const findAllCategorias= async (req, res)=>{
    try {
         const categorias = await Categoria.findAll();
    return res.status(200).json(categorias);
    } catch (error) {
        res.status(500).json(error.message)
    }
   
};

module.exports=findAllCategorias;