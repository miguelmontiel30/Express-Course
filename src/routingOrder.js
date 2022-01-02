// IMPORTS EXPRESS LIBRARY
const express = require('express');

const routerApi = require('./routes/index.routes.js')

// CREATE THE SERVER PARAMETERS
const APP = express();
const PORT = 3000;

// MIDDLEWARE PARA RECIBIR JSON POR POST
APP.use(express.json());

APP.get('/', (req, res) => {
    res.send('Ruta Principal de routingOrder JS');
});

APP.listen(PORT, () => {
    console.log(`Served on: http://localhost:${PORT}`);
})

routerApi(APP);
