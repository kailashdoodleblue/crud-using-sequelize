const admin = require("../model/admin")
let bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');


exports.signup = async (req, res) => {
    let { userName, password } = req.body;
    let hashedpass = await bcrypt.hash(password, 10)
    try {
        let user = admin.create({ userName, password: hashedpass })
        return res.status(201).json({ message: "User created" })
    }
    catch (err) {
        res.status(401).json({ message: err.message })
    }
}

exports.login = async (req,res)=>{
    let { userName, password } = req.body;
    let checkuser=await admin.findAll({attributes: ['userName','password'], where:{userName:req.body.userName}})
    console.log(checkuser)
    let user = checkuser[0]
    
    if(!user){
        return res.status(401).json({ error: 'UserName not found' })
    }
    console.log(user.password)
    console.log(password)
    bcrypt.compare(password,user.password,(err,checkpass)=>{
        console.log(checkpass)
        if (!checkpass) {
            return res.status(401).json({ error: 'Invalid password' });
        }
        token=jwt.sign({ userName }, 'hello',{ expiresIn: '1h' }) 
        return res.json({token,message:`${userName} login successful`})      
    })   

}