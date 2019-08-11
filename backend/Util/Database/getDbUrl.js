const { dbconfig } = require('../../Configuration/databaseConfig');

module.exports = ()=>{
  return `mongodb://${dbconfig.userName}:${dbconfig.password}@${dbconfig.url}:${dbconfig.PORT}/${dbconfig.dbName}`
}
