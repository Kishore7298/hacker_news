const { dbconfig } = require('../../Configuration/databaseConfig');

module.exports = ()=>{
  return `mongodb://${dbconfig.url}:${dbconfig.PORT}/${dbconfig.dbName}`
}
