var express = require('express');
var router = express.Router();
const tagsController = require('../controllers/tags');

router.get('/search/:id/new', tagsController.new);

module.exports = router;