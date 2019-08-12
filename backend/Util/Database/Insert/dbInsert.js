//An abstracted database Insert function
module.exports = async(database,collection, insertObject)=>{
    return new Promise((resolve, reject) => {   //Promise object of Insert operation
            database.collection(collection).insertOne(insertObject, (err, result)=>{
                if(err){
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        }
    )
}
