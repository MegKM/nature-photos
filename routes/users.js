const express = require('express');
const router = express.Router();
const upload  = require('../utilities/multer');
const userController = require('../controllers/users');

router.get('/users', userController.index);

router.post('/users',upload.single('image'), userController.create);

router.get('/users/:id', userController.show);

router.post('/users/:id/addFavourite', userController.addFavourite);

router.delete('/users/:id', userController.delete);

module.exports = router;