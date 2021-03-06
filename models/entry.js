const mongoose = require('mongoose');

const likesSchema = mongoose.Schema({
    username: String,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})

const entrySchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    title: String,
    body: String,
    likes: [likesSchema],
}, {
    timestamps: true
});

module.exports = mongoose.model('Entry', entrySchema);