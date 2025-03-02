const express = require('express');
const {createyoga,rateasana} = require('../controllers/yogasanacontroller.js');
const router = express.Router();

router.post('/asana',createyoga);
router.post('/:asanaId/rate',rateasana);

module.exports = router;