const productsRouter = require('./products.route.js');

function routerApi(app) {
    app.use('/API/products', productsRouter)
}

module.exports = routerApi;
