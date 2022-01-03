// IMPORTS EXPRESS LIBRARY
const express = require('express');

// DECLARAMOS EL ROUTER PARA HACER DINAMICO EL ROUTING
const router = express.Router();

// FUNCION PARA GENERAR DATA FALSA
const ProductsService = require('../services/products.service');
const service = new ProductsService();

router.get('/', async (req, res) => {
    const limit = req.query.limit || 15; //OBTENIENDO QUERY PHARAMS
    const data = await service.getData(limit);
    res.json(data);
});

router.post('/', (req, res) => {
    const body = req.body;
    const data = service.setData(body)
    res.json(data);
});

router.get('/:productID', (req, res) => {
    const { productID } = req.params;
    const product = service.findData(productID);
    res.json(product);
});

router.patch('/:productID', (req, res) => {
    const { productID } = req.params;
    console.log(productID);
    const body = req.body;
    res.json(
        {
            info: {
                ruta: 'Ruta PATCH'
            },
            data: body,
            productID
        }
    )
});

router.put('/:productID', (req, res) => {
    const { productID } = req.params;
    console.log(productID);
    const body = req.body;
    res.json(
        {
            info: {
                ruta: 'Ruta PUT'
            },
            data: body,
            productID
        }
    )
});

router.delete('/:productID', (req, res) => {
    const { productID } = req.params;
    res.json(
        {
            info: {
                ruta: 'Ruta DELETE'
            },
            productID
        }
    )
});

module.exports = router;

