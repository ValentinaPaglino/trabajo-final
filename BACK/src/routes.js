const express = require('express');
const {Router}=require("express");
const sequelize = require("./DB_connection");
const findAllCategorias = require("./controllers/findAllCategorias");
const createCategoria = require("./controllers/createCategoria");
const createProducto = require("./controllers/createProducto");
const findAllProductos = require("./controllers/findAllProductos");
// const bodyParser =require('body-parser');
const router = Router();
router.use(express.json());
// router.use(bodyParser.json());

router.get("/", async (req, res)=>{
    try{
        const productos = await findAllProductos();
        res.status(200).json(productos);
    }catch (error){
        res.status(400).json({error: error.message});
    }
  
});

router.post("/", async (req,res)=>{
    try{
    const {titulo, autor, precio_$, nro_paginas, peso, fecha_publicacion, ISBN, editorial, idioma, descripcion, stock, url_imagen, categoria}= req.body;
    const newProducto = await createProducto({
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
    });
    res.status(200).json(newProducto);
}catch(error){
    res.status(400).json({error: error.message})

}});

router.get("/categoria",async (req, res)=>{
    try{
    const categorias = await findAllCategorias();
    res.status(200).json(categorias);
}catch(error){
    res.status(500).json({error:error.message})

};
});

router.post("/categoria", async (req, res)=>{
    try{
    const {nombre} = req.body;
    const newCategoria = await createCategoria(nombre);
    res.status(201).json(newCategoria)
    }catch (error){
        res.status(400).json({error : error.message});
    }

});

module.exports = router;