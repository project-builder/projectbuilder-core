const getSome = async function(model, data, searchQuery) {

let searchCategory = [];
let searchValue = [];


  for (let key in searchQuery) {
      searchCategory.push(key);
      searchValue.push(`'${searchQuery[key]}'`)
  }


      let splitParams = data[0].split(`/`)



  let currentModel = this.dispatcherHelper(model);
  //
  if (currentModel.db) {
    let configFile = this.databaseMap.get(currentModel.db).get('setup')

    let orm = new this.orm[currentModel.db](configFile);


    let myresp = await orm.getSome(model, splitParams[0], searchCategory, searchValue )


    return myresp

  }

}

export default getSome
