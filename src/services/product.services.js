const {product_in_cart} = require ('../models');

class ProductsServces {
    static async add(product_id, total_price){
        try {
          const result = await product_in_cart.create ({
            product_id, 
            total_price,
         });
            return result;
        } catch (error) {
            throw error
        }
    }
}

module.exports = ProductsServces;