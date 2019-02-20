const createTables = async function(){
  for (let [key, value] of this.modelMap) {
    let currentModelMap = this.modelMap.get(key)
    let currentModelDB = currentModelMap.get('db');

    if (currentModelDB) {
      let configFile = this.databaseMap.get(currentModelDB).get('setup')

      let orm = new this.orm[currentModelDB](configFile)
      await orm.create(key, this.project.models[key])
    }
  }
}

export default createTables
