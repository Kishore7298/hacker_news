const MongoClient = require('mongodb').MongoClient;
const url = require('./getDbUrl');
const { dbconfig } = require('../../Configuration/databaseConfig')

let result={
    err:null,
    res:null
};

//creates the database connection if it doesn't exist, returns the connection if it exists
module.exports = async()=>{

    if(result.err === null && result.res === null){
     await MongoClient.connect(url(), {useNewUrlParser:true})
        .then((db)=>{
            result.res = db.db(dbconfig.dbName);
        }).catch(err=>{
            result.err = err;
        })
    }    
    return result
};