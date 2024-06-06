const Sequelize=require('sequelize')
const sequelize=require('../config/database')

const employee = sequelize.define('empdetails',{
    empID:{
        type:Sequelize.INTEGER,
        allowNull: false
    },
    empName:{
        type:Sequelize.STRING,
        allowNull: false
    },
    empMail:{
        type:Sequelize.STRING,
        allowNull: false
    },  
    empNumber:{
        type:Sequelize.DOUBLE,
        allowNull: false
    }
})

module.exports=employee