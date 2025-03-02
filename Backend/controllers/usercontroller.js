const User = require('../models/Usermodel.js');
const Yogasana = require('../models/Yogasanamodel.js');

const createUser = async(req,res) => {
    try{
        const user = await User.create(req.body);
        res.status(201).json({message:'User Created',user:user})
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
};

const getuserprogress = async(req,res) => {
    try{
        const user = await User.findById(req.params.userId).populate('CompletedAsanas');
        if(!user){
            return res.status(404).json({message:'User Not founc'})
        }
        res.status(200).json(user);
    }
    catch(error){
        res.status(500).json({error:'Internal server error'})
    }
};

module.exports = {createUser,getuserprogress};