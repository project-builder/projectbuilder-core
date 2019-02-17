const createDatabaseMap = function(dbName, dbConfig) {
  let name = dbName;
  dbName = new Map();

  for (const key in dbConfig) {
    dbName.set(`${key}`, dbConfig[key])
  }

  this.databaseMap.set(name, dbName);

}

export default createDatabaseMap
