const Yogasana = require('../models/Yogasanamodel.js');
const User = require('../models/Usermodel.js');

const createyoga =async(req,res) => {
    try{
        const yogasana = await Yogasana.create(req.body);
        res.status(201).json({message: 'new yogasana created',Asana:yogasana});
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
};

const rateasana = async(req,res) => {
    try{
        const {asanaId} = req.params;
        const {rating} = req.body;
        const {ratedBy} = req.body;
        const yogasana = await Yogasana.findById(asanaId);
        if(!yogasana){
            return res.status(404).json({message:'Asana not found'});
        }
        yogasana.rating = ((yogasana.rating*yogasana.totalrates)+rating)/(yogasana.totalrates +1);
        yogasana.totalrates += 1;
        yogasana.ratedBy.push(ratedBy);
        await yogasana.save();
        res.status(200).json(yogasana);
    }
    catch(error){
        return res.status(404).json({error:'Internal server error'})
    }
}

module.exports = {createyoga,rateasana};