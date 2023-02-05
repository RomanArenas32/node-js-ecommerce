const authRoutes = require ('./auth.routes');
const addNewProduct = require ('./add-product.routes');
const createProduct = require ('./create.product.routes')

const routerApi = (app)=> {
    app.use('/api/v1/auth', authRoutes);
    app.use('/api/v1/createproduct', createProduct)
    app.use('/api/v1/addProduct', addNewProduct);
};

module.exports = routerApi;