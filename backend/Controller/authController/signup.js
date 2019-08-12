const bcrypt = require('bcrypt');

const dbRead = require('../../Util/Database/Read/dbReadResult');
const dbInsert = require('../../Util/Database/Insert/dbInsertResult');

module.exports = async (req, res)=>{
    let { userName, email, password  } = req.body;
    console.log(req.body);
    //to verify if the user already exist!
    dbRead('users', {email}).then((users)=>{
        if(users.length){
            return res.status(403).json({"message":"email already exists"});
        }
    }).catch((err)=>{
        console.error(err);
        return res.status(500).json({"message":"internal error"})
    })
    //insert a new user 
    bcrypt.hash(password, 10)
    .then((hash)=>{
        let document= { //the document that needs to be inserted
            user_name:userName,
            email,
            password:hash
        }
        dbInsert('users', document)
        .then((response)=>{
            res.status(200).json({
                message:"updated succesfully"
            })
        })
        .catch(err=>{
            console.error(err);
            res.status(500).json({
                "message":"error while signing up"
            })
        })
    }).catch(err=>{
        console.error(err);
        res.status(500).json({
            "message":"error while signing up"
        })
    })
}