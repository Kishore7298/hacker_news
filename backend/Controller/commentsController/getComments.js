const dbRead = require('../../Util/Database/Read/dbReadResult');

module.exports = (req, res) => {
    dbRead('comments', {})
    .then((comments) => {
        res.status(200).json({comments});
    })
    .catch((err) => {
        console.error('err');
        res.status(500).json({
            message:"internal server error"
        })
    })
}