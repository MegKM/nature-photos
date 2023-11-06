const express = require('express');
const router = express.Router();
const upload  = require('../utilities/multer');
const userController = require('../controllers/users');

router.get('/', userController.index);

router.post('/',upload.single('image'), userController.create);

router.get('/:id', userController.show);

module.exports = router;