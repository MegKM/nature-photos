var express = require('express');
var router = express.Router();
const imagesController = require('../controllers/images');

router.get('/', imagesController.index);

router.get('/:id', imagesController.show);

router.get('/tagged/:tagName', imagesController.filterByTag);

router.delete('/:id/:tagName', imagesController.delete);

module.exports = router;
