const {cart} =require ('../models');
class addProducts {
    static async add(user_id, total_price){
        try {
          const result = await cart.create ({user_id, total_price })
        } catch (error) {
            throw error
        }
    }
}

module.exports = addProducts;