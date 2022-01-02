const express = require('express');
const productsRouter = require('./products.route.js');

function routerApi(app) {
    // DECLARAMOS EL ROUTER PARA HACER RUTAS ESPECIFICAS DINAMICAS
    const router = express.Router();
    app.use('/api/v1', router);

    // AÑADIMOS LAS URL PARA CREAR LA NAVEGACION
    router.use('/products', productsRouter)
}

module.exports = routerApi;
