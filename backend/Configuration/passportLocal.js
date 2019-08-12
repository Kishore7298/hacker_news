const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const dbRead = require('../Util/Database/Read/dbReadResult');
const ObjectId = require('mongodb').ObjectID;

//options to control how the token is extracted from the request or verified.
let options = {};

/*jwtFromRequest (REQUIRED) 
  Function that accepts a request as the only parameter and 
  returns either the JWT as a string or null.
*/
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(); 
options.secretOrKey = 'secret';

module.exports = (passport) => {
    passport.use(
        new JwtStrategy(options, async (jwt_payload, done) => {
            const query = { _id : ObjectId(jwt_payload.user_id) }
            try {
                dbRead('users',query)
                .then((users)=>{
                    let user = users[0];
                    if(user){
                        return done(null, user);
                    } 
                })
                .catch((err)=>{
                    return done(null, false);
                })
                let user = users[0];
                if (user) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            } catch(err) {
                //it doesn't come here
                console.error(err)
                return done(null, false);
            }
        })
    )
}