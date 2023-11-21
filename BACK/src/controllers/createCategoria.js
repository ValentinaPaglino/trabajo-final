const {Categoria}=require("../DB_connection")

const createCategoria =async (nombre)=>{
    const newCategoria =await Categoria.create({nombre});
    return newCategoria;
};

module.exports = createCategoria;

