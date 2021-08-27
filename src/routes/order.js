const express = require('express');
const router = express.Router();
const controller = require('../controllers/Order-Controller');

router.get('/list', controller.get );
router.post('/', controller.post );


module.exports = router;