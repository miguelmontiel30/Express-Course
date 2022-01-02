// IMPORTS EXPRESS LIBRARY
const express = require('express');

// CREATE THE SERVER PARAMETERS
const APP = express();
const PORT = 3000;


// INITIALIZE THE SERVER
APP.get('/', (req, res) => {
    res.send('¡Hola Mundo!');
});

APP.get('/new', (req, res) => {
    console.log(req);
    res.send('¡Hola Otra Ruta!');
});


const array_products = [
    {
        id: 1,
        nombre: 'Shampoo',
        prize: 35.00
    },
    {
        id: 2,
        nombre: 'Galletas',
        prize: 10.00
    }
];

APP.get('/products/:id', (req, res) => {
    // console.log(req.params.id);

    const {id} = req.params;
    console.log(id);

    res.json(array_products);
});

APP.get('/categories/:idCategory/products/:idProduct', (req, res) => {
    // console.log(req.params);

    const {idProduct, idCategory} = req.params;
    // console.log(idProduct);

    res.json([
        {
            idProduct,
            idCategory,
            nombre: 'Shampoo',
            prize: 35.00
        },
        {
            idProduct,
            idCategory,
            nombre: 'Galletas',
            prize: 10.00
        }
    ]);
});

APP.listen(PORT, () => {
    console.log(`Served on: http://localhost:${PORT}`);
})
