const { Router } = require("express");
const userController =  require('../controllers/userController')
const router = Router();

router.post('/', userController.create)
router.put('/:id' , userController.update)
router.delete('/:id' , userController.delete)

router.get('/:id', userController.getOne) ;
router.get('/', userController.getAll);

module.exports =  router;