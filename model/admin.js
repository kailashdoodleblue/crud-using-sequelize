const Sequelize=require('sequelize')
const sequelize=require('../config/database')

const user = sequelize.define('userdetails',{
    userName:{
        type:Sequelize.STRING,
        allowNull: false
    },
    password:{
        type:Sequelize.STRING,
        allowNull: false
    }
    
},
{
    timesamps:false
})

module.exports=user