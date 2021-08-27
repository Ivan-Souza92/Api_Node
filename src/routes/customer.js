const express = require('express');
const router = express.Router();
const controller = require('../controllers/Customer-Controller.js');

router.get('/list', controller.get );
router.post('/', controller.post );


module.exports = router;