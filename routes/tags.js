var express = require('express');
var router = express.Router();
const tagsController = require('../controllers/tags');

router.post('/search/:id/add-tag', tagsController.addTag);

// router.post('/search/:id', tagsController.create);

module.exports = router;