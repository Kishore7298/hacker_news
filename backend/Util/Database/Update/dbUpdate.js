//An abstracted database Update function with optional parameters of projection, limit, sort
module.exports = async(database,collection, query, updateValue)=>{
    return new Promise((resolve, reject)=>{   //Promise object of update operation
            let updateObject = {$set:updateValue};
            database.collection(collection).updateOne(query,updateObject,(err, result)=>{
                if(err){
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        }
    )
}
