// IMPORTS EXPRESS LIBRARY
const express = require('express');

// CREATE THE SERVER PARAMETERS
const APP = express();
const PORT = 3000;

// INITIALIZE THE SERVER
APP.get('/', (req, res) => {
    res.send('¡Hola Mundo!');
});

router.get('/categories', (req, res) => {
    res.send('Categorias de Productos');
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
