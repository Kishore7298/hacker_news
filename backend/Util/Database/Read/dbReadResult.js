const dbConnection = require('../dbConnection');
const dbQuery = require('./dbRead');

module.exports = async(collection, query, projection, limit=0, sort={})=>{
    const connectionResult = await dbConnection();
    return new Promise((resolve, reject)=>{
        if(connectionResult.err){
           reject(connectionResult.err)
        } else {
            const database = connectionResult.res;
            dbQuery(database,collection,query,projection,limit, sort)
            .then(res=>{
                resolve(res);
            }).catch((err)=>{
                reject(err);
            })
        }
    });
}