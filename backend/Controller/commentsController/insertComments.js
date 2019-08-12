const dbInsert = require('../../Util/Database/Insert/dbInsertResult');

module.exports = (req, res) => {
    let insertDocument = req.body;
    dbInsert('comments', insertDocument)
    .then(result => {
        if(result.result.ok) {
            res.status(201).json({
                message:"insertion succesful"
            })
        } else {
            res.status(400).json({
                message:"insertion failed"
            })
        }
        
    })
    .catch( err => {
        console.error(err);
        res.status(500).json({
            message:"internal server error"
        })
    })

}