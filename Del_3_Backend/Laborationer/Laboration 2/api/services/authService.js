require('dotenv').config()
const _dbConnect = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/user')


exports.requireAuth = (req, res, next) => {
    try {
        const accessToken = req.headers.authorization.split(" ")[1]
        req.userData = jwt.verify(accessToken, process.env.SECRET_KEY)
        next()
    }
    catch {
        return res.status(401).json()
    }
}

exports.signUp = (req, res) => {//
    try {//
        if (req.body.email === undefined || req.body.password === undefined)
            return res.status(400).json();

        User.findOne({ email: req.body.email })
            .then(data => {//
                if (data !== null)
                    return res.status(409).json({statusCode:409, status:false,message:"user already exists"}) //konflikt, kund redan finns
                //hash lösenordet    
                bcrypt.hash(req.body.password, bcrypt.genSaltSync(12), (error, hash) => {//
                    if (error)
                        // inte användarens fel att inte funkar
                        return res.status(500).json();
                    const user = new User({
                        _id: new _dbConnect.Types.ObjectId,
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        userHash: hash
                    })
                    user.save()
                        .then(() => res.status(201).json())
                        .catch(() => res.status(400).json())
                })//
            })//
            .catch(()=>res.status(400).json())
    }  //
    catch {
        return res.status(500).json()
    }

}//

exports.signIn = (req, res) => {
    try {// vi kollar att lösen och mejlet finns
        if (req.body.email === undefined || req.body.password === undefined)
            return res.status(400).json();

        User.findOne({ email: req.body.email })
            .then(user => {//Om vi inte hittade användare. Obs ! vid inlogning vi ska vara försiktiga
                if (user === null)
                    return res.status(400).json()

                //hash lösenordet   och jämföra  
                bcrypt.compare(req.body.password, user.userHash, (error, result) => {
                    if (result) //ta användar id och säkra upp med ntckel från enviroment filen
                        return res.status(200).json(jwt.sign({id:user._id},process.env.SECRET_KEY,{expiresIn:'1d'}))
                    return res.status(400).json()
                })

            })//    

    } catch {
        return res.status(500).json()
    }
}