let mongoose = require('mongoose');



let registerDetails = new mongoose.Schema({
    Title : String,
    Image : String,
    Sku : Number,
    price: Number
     
   
})

let registerModel = mongoose.model('names',registerDetails);
module.exports = registerModel;