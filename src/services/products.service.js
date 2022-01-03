const faker = require('faker'); //FAKER USED TO GENERATE RANDOM DATA

class ProductsService {

    constructor() {
        this.products = {}
        this.createData();
    }

    async getData(limit = 4){
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                await resolve(this.products)
            }, 500);
        });
    }

    async createData(limit = 4) {
        let new_data = [];
        // CREATING DATA WITH FAKER
        for (let index = 0; index < limit; index++) {
            await new_data.push(
                {
                    productID: faker.datatype.uuid(),
                    name: faker.commerce.productName(),
                    price: parseInt(faker.commerce.price(), 10),
                    description: faker.commerce.productDescription()
                }
            );
        }
        return this.products = {
            info: {
                ruta: 'Ruta Principal de Productos',
                total: limit
            },
            data: new_data
        }
    }

    setData(data) {
        const newProduct = {
            info: {
                ruta: 'Ruta POST'
            },
            productID: faker.datatype.uuid(),
            ...data
        }
        this.products.data.push(newProduct);
        console.log(this.products);
        return newProduct;

        // return this.new_product;
    }

    findData(productID) {
        let response_product;
        if (productID === '999') {
            response_product = { info: { ruta: 'Buscar por ID: NOT FOUND', status: 400 } }
        } else {
            const searchable_product = this.products.data.find((product) => { return product.productID == productID });
            response_product =
            {
                info: { ruta: 'Buscar por ID', status: 200 },
                data: searchable_product
            }

        }

        return response_product;
    }

    deleteData() {

    }

    updateData() {

    }
}


module.exports = ProductsService;
