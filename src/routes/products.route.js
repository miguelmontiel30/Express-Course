// IMPORTS EXPRESS LIBRARY
const express = require('express');

// DECLARAMOS EL ROUTER PARA HACER DINAMICO EL ROUTING
const router = express.Router();

// FUNCION PARA GENERAR DATA FALSA
const getData = require('./../utils/getData');

router.get('/', (req, res) => {
    // console.log(
    //     req.query
    // );
    const limit = req.query.limit || 15; //OBTENIENDO QUERY PHARAMS
    // console.log(limit);
    const data = getData(limit);
    // console.log(data);
    res.json(
        {
            info: {
                ruta: 'Ruta Principal de Productos',
                total: limit
            },
            data: [
                data
            ]
        }
    )
});

router.get('/:productID', (req, res) => {
    const { productID } = req.params;
    res.json(
        {
            info: { ruta: 'Buscar por ID' },
            data: [
                { productID: productID }
            ]
        }
    )
});

module.exports = router;

