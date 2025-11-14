const express = require('express');
const router = express.Router();


router.use('/v1/api', require('./access'));
// router.get('', (req, res) => {
//     res.send('Welcome to the Home Page!!');
// });


module.exports = router;