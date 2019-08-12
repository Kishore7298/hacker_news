const ObjectId = require('mongodb').ObjectID;
const dbUpdate = require('../../Util/Database/Update/dbUpdateResult');

module.exports = (req, res) => {
    let { updateObj } = req.body;
    let { id } = req.query;
    if(!(updateObj && id)) {
        return res.status(400).message({
            message:"request inputs not found"
        })
    }
    dbUpdate('comments', {_id:id}, updateObj)
    .then((response) => {
        if(response.result.ok && response.result.nModified){
            res.status(201).json({
                message:"updation is succesful"
            })
        } else {
            res.status(400).json({
                message:"updation failed"
            })
        }
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({
            message: "internal server error"
        })
    })

}