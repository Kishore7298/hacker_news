const dbUpdate = require('../../Util/Database/Update/dbUpdateResult');
const dbRead = require('../../Util/Database/Read/dbReadResult');

module.exports = (req, res) => {
    let { id } = req.query;
    let { newId } = req.body;
    dbRead('comments', {_id:id})
    .then((response) => {
        let doc = response[0];
        let newList = [...doc.list, newId];
        dbUpdate('comments',{_id:id}, {list : newList})
        .then(result => {
            if(result.result.ok && result.result.nModified) {
                res.status(200).json({message:"list appended succesfully"})
            } else {
                res.status(400).json({message:"error updating!"})
            }
        })
        .catch(err => {
            res.status(500).json({ message:"internal server error"})
        })
    })
    .catch((err) => {
        res.status(500).json({ message:"internal server error"})    
    })
}