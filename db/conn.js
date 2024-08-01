const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('rel_1_n', 'root', 'senai',{
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(()=>{
    console.log("Banco de dados ok")
})
.catch((err)=>{
    console.error("Banco de dados deu erro",err)
})

module.exports = sequelize