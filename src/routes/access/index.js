const express = require('express');
const router = express.Router();
const controllerAccess = require('../../controllers/access.controller');

//signup route
router.post('/shop/signup', controllerAccess.signUp);



module.exports = router;