var express = require('express');
var router = express.Router();
const tagsController = require('../controllers/tags');

router.get('/tags/new', tagsController.new);

router.post('/image/:id/add-tag', tagsController.addTag);

router.post('/tags', tagsController.create);

router.get('/tags/:id/edit', tagsController.edit);

router.delete('/tags/:id', tagsController.delete);

router.put('/tags/:id', tagsController.update);

module.exports = router;