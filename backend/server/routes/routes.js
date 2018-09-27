let express = require('express');
let router = express.Router();

let movieRouter = require('../api/v1.0/route');



router.use('/product',movieRouter)




module.exports = router;