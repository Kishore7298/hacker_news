const dbConnection = require('../dbConnection');
const dbUpdate = require('./dbUpdate');

module.exports = async(collection, query, updateObject)=>{
    const connectionResult = await dbConnection();
    return new Promise((resolve, reject)=>{
        if(connectionResult.err){
            reject(connectionResult.err)
        } else {
            const database = connectionResult.res;
            dbUpdate(database,collection,query, updateObject)
            .then((res)=>{
                resolve(res);
            })
            .catch((err)=>{
                reject(err);
            })
        }
    })
}