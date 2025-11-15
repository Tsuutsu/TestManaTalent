const express = require('express');
const router = express.Router();
const userEntityController = require('../controllers/userEntityController');

router.post('/', userEntityController.createUserEntity);
router.get('/', userEntityController.getAllUserEntities);
router.get('/:id', userEntityController.getUserEntityById);
router.put('/:id', userEntityController.updateUserEntity);
router.delete('/:id', userEntityController.deleteUserEntity);

module.exports = router;
