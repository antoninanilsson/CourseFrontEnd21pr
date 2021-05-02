const _dbConnect = require('mongoose')
const product = _dbConnect.Schema(

    {
        _id: _dbConnect.Schema.Types.ObjectId,
        artnumber: { type: String, required: true, unique: true },
        category: { type: String, required: true },
        name: { type: String, required: true },
        desc: { type: String, required: false, default: '' },
        price: { type: Number, required: true },
        season: { type: String, required: false, default: '' },
        year: { type: Number, required: true },
        img: { type: String, required: false, default: '' },

        created: { type: Date, default: Date.now },
        modified: { type: Date, default: Date.now },

    }

)

module.exports = _dbConnect.model('Product', product)