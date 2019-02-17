const getSome = async function(model, data, searchQuery) {
  console.log('hitting getSome dispatcher', data)

  console.log(searchQuery)

let searchCategory = [];
let searchValue = [];


  for (let key in searchQuery) {
      searchCategory.push(key);
      searchValue.push(`'${searchQuery[key]}'`)
  }

  console.log('sc', searchCategory);
  console.log('sv', searchValue);

  // console.log('anything can happen')

      let splitParams = data[0].split(`/`)

  console.log('splitParams', splitParams)

      // let id = splitParams[0];

      // splitParams.shift();


      // let getParams = {id: id, getData:splitParams}




  let currentModel = this.dispatcherHelper(model);
  //
  if (currentModel.db) {
    let configFile = this.databaseMap.get(currentModel.db).get('setup')

    let orm = new this.orm[currentModel.db](configFile);

    // console.log('orm', orm)

    let myresp = await orm.getSome(model, splitParams[0], searchCategory, searchValue )

  console.log(myresp)

    return myresp

  }

}

export default getSome
