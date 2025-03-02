const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,unique:true,required:true},
    CompletedAsanas:[{type:mongoose.Schema.Types.ObjectId,ref:'Yogasanas'}]
});

module.exports = mongoose.model('User',UserSchema);