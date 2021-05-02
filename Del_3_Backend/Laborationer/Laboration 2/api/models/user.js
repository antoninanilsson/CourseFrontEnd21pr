const _dbConnect=require('mongoose');

const user = _dbConnect.Schema({
    _id:        _dbConnect.Schema.Types.ObjectId,
    firstName:  { type: String, required: false,default:'' },
    lastName:   { type: String, required: false,default:'' },
    image:      { type: String, required: false,default:'' },
    email:      { type: String, required: true, unique: true },
    userHash:   { type: String, required: true },
    created:    { type: Date, default: Date.now },
    modifed:    { type: Date, default: Date.now }
})

module.exports = _dbConnect.model('User', user)