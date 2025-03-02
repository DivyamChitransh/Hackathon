const express = require('express');
const {createUser,getuserprogress}= require('../controllers/usercontroller.js');

const router = express.Router();

router.post('/user',createUser);
router.get('/:userId/progress',getuserprogress);

module.exports = router;