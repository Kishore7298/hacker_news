exports.dbconfig = {
    // url:"localhost",
    // dbName:"rentomojo",
    // userName:"kishore",
    // password:"abc123",
    // PORT:"27017"
    url:process.env.DBURL,
    dbName:process.env.DBNAME,
    userName:process.env.DBUSERNAME,
    password:process.env.DBPASSWORD,
    PORT:process.env.DBPORT
};
