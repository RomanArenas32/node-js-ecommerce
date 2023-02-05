const {Router} = require ('express');
const {register} = require ('../controllers/create-product.controller');

const router = Router();

/**
 * @openapi
 * /api/v1/createproduct/register:
 *   post:
 *     summary: create a new product into applicattio
 *     tags:
 *       - Product
 *     requestBody:
 *       description: Required fields to create a new product
 *       require: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/registerProducts'
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: product created
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Validation error
 */

router.post('/register', register);

module.exports = router;