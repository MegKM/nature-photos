var express = require('express');
var router = express.Router();
const tagsController = require('../controllers/tags');

router.get('/tags/new', tagsController.new);

router.post('/image/:id/add-tag', tagsController.addTag);

router.post('/tags', tagsController.create);

module.exports = router;