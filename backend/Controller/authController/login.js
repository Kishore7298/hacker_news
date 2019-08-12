const dbRead = require('../../Util/Database/Read/dbReadResult');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = async (req, res)=>{
    const { email, password } = req.body;
    const query = {
        "email": email
    };
    dbRead('users',query)
    .then((users)=>{
        if(users.length === 0){
            //email not found
            res.status(400).json({
                message:"authentication failed"
            })
        } else {
            //user is found!
            let user = users[0];
            bcrypt.compare(password, user.password, (eror, boole)=>{
                if(eror){
                    //password doesn't match
                    res.status(400).json({
                        message:"authentication failed"
                    })
                }
                if(boole){
                    let expiresInObj = {
                        expiresIn : '1 days' //token expiry 1 day
                    };
                    delete user.password;
                    jwt.sign(user,'secret',expiresInObj,(err, token) => {
                        if(err){
                           console.error(err);
                           res.status(500).json({message:"error in creating token."});
                        }else{
                            res.status(200).json({token: 'Bearer ' + token});
                        }
                    })
                }
            })
        }
    })
    .catch((err)=>{
        //as all the errors of route related are handles, the only error which would come here is database error
        console.error(err);
        res.status(500).json({
            message:"internal error"
        })
    })
}