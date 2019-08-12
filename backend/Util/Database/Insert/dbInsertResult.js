const dbConnection = require('../dbConnection');
const dbInsert = require('./dbInsert');

module.exports = async(collection, insertObject)=>{
    const connectionResult = await dbConnection();
    return new Promise((resolve, reject)=>{
        if(connectionResult.err){
            reject(connectionResult.err);
        } else {
            const database = connectionResult.res;
            dbInsert(database, collection, insertObject)
            .then((res)=>{
                resolve(res);
            })
            .catch((err)=>{
                reject(err);
            })
        }
    })
}