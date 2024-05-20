const jwt = require('jsonwebtoken');
const { findUserByEmail } = require('../models/userModel')

const SECRET_KEY = 'your_secret_key_here';

exports.authenticate = async(req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ','');

    if(!token) {
        return res.status(401).json({error: 'Access Denied'});
    }
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    } catch( error ){
        res.status(401).json({ error: 'Invalid Token'});
    }
};