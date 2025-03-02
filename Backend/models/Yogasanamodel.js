const mongoose = require('mongoose');

const YogSchema = new mongoose.Schema({
    name:{type:String,required:true},
    difficulty:String,
    rating:{type:Number,required:true,default:0},
    ratedBy:[{type:mongoose.Schema.Types.ObjectId, ref:'User'}],
    totalrates:{type:Number,default:0}
});

module.exports = mongoose.model('Yogasanas',YogSchema);