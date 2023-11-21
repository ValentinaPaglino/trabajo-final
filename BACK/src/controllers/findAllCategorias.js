const {Categoria} = require("../DB_connection");

const findAllCategorias= async ()=>{
    const categorias = await Categoria.findAll();
    return categorias;
};

module.exports=findAllCategorias;