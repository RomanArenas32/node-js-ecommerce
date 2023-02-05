const swaggerJSDoc = require ('swagger-jsdoc');
const swaggerUi = require ('swagger-ui-express');
require('dotenv').config();

const options = {
    apis:['./src/routes/auth.routes.js', 
          './src/models/user.js',
          './src/routes/create.product.routes.js',
          './src/models/product.js'
        ],
    definition: {
        openapi: '3.0.0',
        info:{
          title: 'clonde ecommerce node js',
          version: '0.0.9',
          description: 'API para ecommerce'
    }
  }
};

const swaggerSpec = swaggerJSDoc (options);

const swaggerDocs = (app, port) => {
    // ruta donde se muestra documentacion
    app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    app.get('/api/v1/docs.json', (req, res)=> {
        res.setHeader({'Content-Type' : 'application/json'});
        res.send(swaggerSpec)
    })

    console.log(`La documentacion esta disponible en ${process.env.URL}:${port}/api/v1/docs`)
}

module.exports = swaggerDocs;