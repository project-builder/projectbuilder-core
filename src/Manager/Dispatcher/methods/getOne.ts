const getOne = async function(model, data) {





  console.log('anything can happen')

      let splitParams = data[0].split(`/`)

      let id = splitParams[0];

      splitParams.shift();


      let getParams = {id: id, getData:splitParams}




  let currentModel = this.dispatcherHelper(model);

  if (currentModel.db) {
    let configFile = this.databaseMap.get(currentModel.db).get('setup')

    let orm = new this.orm[currentModel.db](configFile);

  console.log('orm', orm)

    let myresp = await orm.getOne(model, getParams.id)

  console.log(myresp)

    return myresp

  }

}

export default getOne
