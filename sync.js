const { Fabricante, Produto } = require('./model/associacao')
const conn = require('./db/conn')

async function syncDataBase(){
    try{
        await conn.sync({force: true})
        console.log("Tabelas criadas e sincronização com o banco")
    }catch(err){
        console.error("Erro ao sincronizar",err)
    }finally{
        conn.close()
        console.log("Conexão finalizada")
    }

}

syncDataBase()