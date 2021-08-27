const express = require('express');
const router = express.Router();
const controller = require('../controllers/Product-Controller')

router.get('/list', controller.get);

router.get('/list/:slug', controller.getBySlug);

router.get('/admin/:id', controller.getById);

router.get('/tags/:tag', controller.getByTag);

router.post('/', controller.post);

router.put('/:id', controller.put);

router.delete('/del', controller.delete);


module.exports = router;