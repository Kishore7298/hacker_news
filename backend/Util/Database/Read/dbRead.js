//An abstracted database read function with optional parameters of projection, limit, sort
module.exports = async(database,collection, query, projection = null, limit=0, sort={})=>{
    return new Promise((resolve, reject)=>{   //Promise object of read operation
            database.collection(collection).find(query, projection).sort(sort).limit(limit).toArray((err, result)=>{
                if(err){
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        }
    )
}