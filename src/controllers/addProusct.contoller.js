//importar el servicion
const addProducts = require ('../services/addProducts.services');
const ProductsServces = require ('../services/product.services')

const addProduct = async (req, res) => {
    try {
        const {name, price, image_url, status, user_id, cart} = req.body;
        if (!name, !price, !image_url, !status, !user_id, !cart){
            return res.status(400).json({message: 'Missing requires fields'});
        }
        const productInCart = await addProduct.add(name, user_id);
        if (productInCart) {
            const  {id} = productInCart;
            await ProductNew.add (cart_id, product_id);
            await ProductNew.add (id, cart);
            res.status (201).json({message: 'Cart with product'})
        }
    } catch (error) {
        res.status (400).json(error.message)
    }
}

module.exports = {addProduct};