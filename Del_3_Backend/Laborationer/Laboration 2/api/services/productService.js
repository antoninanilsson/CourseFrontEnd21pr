const _dbConnect = require('mongoose')
const Product = require('../models/product')


exports.getAll = (req, res) => {
    try {
        Product.find()
            .then(data => res.status(200).json(data)) // OK, svar innehåller efterfrågad resours 
            .catch((err) => res.status(500).json({
                statusCode: 500,
                status: false,
                message: err.message
            }))
    }
    catch (err) {
        return res.status(500).json({
            statusCode: 500,
            status: false,
            message: err.message
        }) //server fel beror inte på användare 
    }
}

exports.getOne = (req, res) => {
    try {
        Product.findOne({ _id: req.params.id })
            .then(data => res.status(200).json(data))
            .catch((err) => res.status(404).json({
                statusCode: 404,
                status: false,
                message: err.message
            }))   //not found
    }
    catch (err) {
        return res.status(500).json({
            statusCode: 500,
            status: false,
            message: err.message
        })
    }
}
// säker artikel nummer
exports.create = (req, res) => {
    try {
        Product.findOne({ artnumber: req.body.artnumber })
            .then(data => {
                if (data !== null)
                    return res.status(409).json({
                        statusCode: 409,
                        status: false,
                        message: "Product with this artnumber already exists"
                    }) // conflikt (data redan finns i db)

                const product = new Product({
                    _id: new _dbConnect.Types.ObjectId, // om vi inte använder den här fältet i modell, kommer _id automatisk skapas av db
                    artnumber: req.body.artnumber,
                    category: req.body.category,
                    name: req.body.name,
                    desc: req.body.desc,
                    price: req.body.price,
                    season: req.body.season,
                    year: req.body.year,
                    img: req.body.img

                })

                product
                    .save()
                    .then(() => res.status(201).json({
                        statusCode: 201,
                        status: true,
                        message: "Product created successfully"
                    }))  //created
                    .catch((err) => res.status(400).json({
                        statusCode: 400,
                        status: false,
                        message: err.message
                    })) // kan inte processa pga klient (dålig stavning)
            })
            .catch((err) => res.status(500).json({
                statusCode: 500,
                status: false,
                message: err.message
            }))
    }
    catch (err) {
        return res.status(500).json({
            statusCode: 500,
            status: false,
            message: err.message
        })
    }
}

exports.deleteOne = (req, res) => {
    try {
        Product.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({
                statusCode: 200,
                status: true,
                message: "Product deleted successfully"
            })) //utfört, inget att skicka tillbaka
            .catch((err) => res.status(400).json({
                statusCode: 400,
                status: false,
                message: err.message
            }))
    }
    catch (err) {
        return res.status(500).json({
            statusCode: 500,
            status: false,
            message: err.message
        })
    }
}


exports.deleteAll = (req, res) => {
    try {
        Product.deleteMany({})
            .then((data) => res.status(200).json({
                statusCode: 200,
                status: true,
                message: `Total ${data.n} products deleted`
            }))
            .catch((err) => res.status(400).json({
                statusCode: 400,
                status: false,
                message: err.message
            }))
    }
    catch (err) {
        return res.status(500).json({
            statusCode: 500,
            status: false,
            message: err.message
        })
    }
}


exports.loadData = (req, res) => {
    const fileName = '../prod_data/' + req.params.fileName;
    try {

        const data = require(fileName);

        Product.insertMany(data)
            .then((data) => res.status(200).json({
                statusCode: 200,
                status: true,
                message: `Total ${data.length} products appended`
            }))
            .catch((err) => res.status(400).json({
                statusCode: 400,
                status: false,
                message: err.message
            }))
    }
    catch (err) {
        return res.status(500).json({
            statusCode: 500,
            status: false,
            message: `File ${fileName} not exists or not correct`
        })
    }
}

exports.update = (req, res) => {
    //komplettera body med modified date
    try {
        Product.updateOne({ _id: req.params.id }, {
            ...req.body,
            modified: Date.now()

        })
            .then((data) => {
                if (data.nModified > 0) {
                    res.status(200).json({
                        statusCode: 200,
                        status: true,
                        message: `Total ${data.nModified} products modified`
                    })
                } else {
                    res.status(404).json({
                        statusCode: 404,
                        status: false,
                        message: `Total ${data.nModified} products modified`
                    })
                }
            })
            .catch((err) => {
                res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: err.message
                })
            })
    } catch (err) {
        return res.status(500).json({
            statusCode: 500,
            status: false,
            message: err.message
        })
    }

}