let bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

exports.verifytoken = (req,res,next)=>{
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: 'Token is required' });
    }
    jwt.verify(token, 'hello', (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Invalid token' });
        }
        next()
    });
    
}