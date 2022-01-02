// IMPORTS EXPRESS LIBRARY
const express = require('express');

const getData = require('./utils/getData');

// CREATE THE SERVER PARAMETERS
const APP = express();
const PORT = 3000;

APP.get('/', (req, res) => {
    res.send('Ruta Principal de routingOrder JS');
});

APP.get('/products', (req, res) => {
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

APP.get('/products/categories', (req, res) => {
    res.send('Categorias de Productos');
});

APP.get('/products/:productID', (req, res) => {
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


APP.listen(PORT, () => {
    console.log(`Served on: http://localhost:${PORT}`);
})


