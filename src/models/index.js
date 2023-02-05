const initModels = require ('./init-models');
const db = require ('../utils/database');

const models = initModels(db);

const {cart, order, product_in_cart, product_order, product, user} = models;

module.exports = {
    user, 
    order, 
    product_in_cart, 
    product_order, 
    product, 
    user
};
