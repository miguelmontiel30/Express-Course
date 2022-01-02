const faker = require('faker'); //FAKER USED TO GENERATE RNDOM DATA

const getData = (limit) => {
    let data = [];
    for (let index = 0; index < limit; index++) {
        data.push(
            {
                productID: index,
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                description: faker.commerce.productDescription()
            }
        );
    }
    return data;
}

module.exports = getData;
