let express=require('express')
let router=express.Router();

let registerController = require('./controller')

router.use('/productDetails',registerController.registeradd)


module.exports=router;