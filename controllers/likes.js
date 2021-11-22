const Entry = require('../models/entry');

module.exports = {
    create,
    deleteLike
}

async function create(req, res){
 
    try {
        const entry = await Entry.findById(req.params.id);
        entry.likes.push({username: req.user.username, userId: req.user._id});
        await entry.save()
        res.status(201).json({data: 'like added'})
    } catch(err){
       
        res.status(400).json({err})
    }
    
}

async function deleteLike(req, res){
    try {
        
        const entry = await Entry.findOne({'likes._id': req.params.id, 'likes.username': req.user.username});
        entry.likes.remove(req.params.id)
        await entry.save()
        res.json({data: 'like removed'})
    } catch(err){
        res.status(400).json({err})
    }
}