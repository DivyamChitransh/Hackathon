const express = require('express');
const {createyoga,rateasana,getAsanas} = require('../controllers/yogasanacontroller.js');
const router = express.Router();

router.post('/asana',createyoga);
router.post('/:asanaId/rate',rateasana);
router.get('/asana',getAsanas)

module.exports = router;