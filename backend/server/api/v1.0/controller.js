
let mongoose = require('mongoose');
let config = require('../../config/config');

let registerCollection = require('./model')

let registeradd = (req,res)=>{
    console.log(req.body.search)
    registerCollection.find(req.body.search)
    .then(
        (response)=>{
            res.status(200).json({ status : true , message :"Success" , addDetails:response})
        }
    )
    .catch(
        (error)=>{

            res.status(500).json({ status : false , message :"Error while Searching , please again"   })
        }
    )

}



module.exports = {
    registeradd
}