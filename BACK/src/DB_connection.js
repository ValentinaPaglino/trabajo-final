require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME} = process.env;
const modeloProducto = require("./models/Producto")
const mmodeloCategoria=require("./models/Categoria");
 

const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
   { logging: false, native: false }
);

modeloProducto(sequelize);
mmodeloCategoria(sequelize);

const{Producto, Categoria}= sequelize.models;
Producto.belongsToMany(Categoria, {through:"ProductoCategoria"});
Categoria.belongsToMany(Producto,{through:"ProductoCategoria"});



module.exports ={ 
   sequelize, 
...sequelize.models,
};