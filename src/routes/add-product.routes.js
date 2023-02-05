const {Router} = require ('express');
const {addProduct} = require ('../controllers/addProusct.contoller')


const router = Router ();

router.post ('/'); //addproduct

module.exports = router;