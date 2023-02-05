//registro y login
const {Router} = require ('express');
const {register, login} = require ('../controllers/auth.controlle');


const router = Router();

/**
 * @openapi
 * /api/v1/auth/register:
 *   post:
 *     summary: create a new user into applicattio
 *     tags:
 *       - Auth
 *     requestBody:
 *       description: Required fields to create a new user
 *       require: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/register'
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
 *                   example: user created
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
 * /api/v1/auth/login:
 *   post:
 *     summary: Login an existing user into the app
 *     tags:
 *       - Auth
 *     requestBody:
 *       description: Required fields to login an existing user
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/login'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/loginResponse'
 *       400:
 *         description: not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: user not found / somethig wrong / not password or email provided
 */

router.post('/register', register);
router.post('/login', login);

module.exports = router;