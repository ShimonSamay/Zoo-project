const JWt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/users-model");


const register = async (req , res) => {
    if(await User.exists({Email:req.body.Email})) return res.status(400).json({message: "email exist"});
    bcrypt.hash(req.body.Password , 11 , async (err , hashed) => {
        if(err) return res.status(400).json({message : err});
        req.body.Password = hashed ;
        await User.create(req.body)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json({message : err}))
    })
};

const login = async (req , res) => {
     try {
        const foundUser = await User.findOne({ Email: req.body.Email });
        if(foundUser == null) return res.status(400).json({ message: 'Email not found , please register' });
        bcrypt.compare(req.body.Password , foundUser.Password , (err, isMatch) => {
            if (err) return res.status(500).json({ message: 'Error' });
            if (!isMatch) return res.status(400).json({ message: 'Password incorrect' });
            const token = JWt.sign({foundUser}, process.env.SECRET_KEY , { expiresIn: '1h' });
            return res.status(200).json({ message: 'Login successful', token });
        })
    } 
    catch (err) {
        return res.status(500).json(err);
     }
};

const getAll = async (req , res) => {
   await User.find()
   .then(data => res.send(data))
   .catch(err => res.status(400).json({message:err}))
}



module.exports = {
    register ,
    login ,
    getAll
}