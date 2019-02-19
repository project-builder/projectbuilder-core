const getOne = async function(model, data) {

      let splitParams = data[0].split(`/`)

      let id = splitParams[0];

      splitParams.shift();


      let getParams = {id: id, getData:splitParams}




  let currentModel = this.dispatcherHelper(model);

  if (currentModel.db) {
    let configFile = this.databaseMap.get(currentModel.db).get('setup')

    let orm = new this.orm[currentModel.db](configFile);


    let myresp = await orm.getOne(model, getParams.id)


    return myresp

  }

}

export default getOne
