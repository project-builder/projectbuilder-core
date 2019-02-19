const get = async function(model, searchQuery){

let searchCategory = [];
let searchValue = [];

  for (let key in searchQuery) {
      searchCategory.push(key);
      searchValue.push(`'${searchQuery[key]}'`)
  }

  let currentModel = this.dispatcherHelper(model)

  if (currentModel.db) {
    let configFile = this.databaseMap.get(currentModel.db).get('setup')
    let orm = new this.orm[currentModel.db](configFile)
    let myresp = await orm.getAll(model, searchCategory, searchValue)

    return myresp
  }

}

export default get
