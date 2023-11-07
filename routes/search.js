var express = require('express');
var router = express.Router();
const imagesController = require('../controllers/search');

/* GET users listing. */
router.get('/', imagesController.index);

router.get('/:id', imagesController.show);

router.get('/tagged/:tagName', imagesController.filterByTag);

module.exports = router;
