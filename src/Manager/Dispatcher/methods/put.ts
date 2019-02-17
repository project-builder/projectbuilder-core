const put = async function(model, id, data, files){
  let [dataKey] = Object.keys(data)

  let currentModel = this.dispatcherHelper(model);
  let updateData = JSON.parse(data[dataKey]);

  let configFileDB;
  let orm;
  let configFileFS;
  let fs;

  let validator = new this.validator(currentModel.data)

  let validateResponse = await validator.validatePut(updateData)

  if(validateResponse != true ){
    return validateResponse
  }


  if(currentModel.db){
    configFileDB = this.databaseMap.get(currentModel.db).get('setup')
    orm = new this.orm[currentModel.db](configFileDB);
    await orm.updateOne(model, id, updateData)
  }

  if(currentModel.files  && files.length > 0){
    configFileFS = this.fileSystemsMap.get(currentModel.files).get('setup')
    fs = new this.fs[currentModel.files](configFileFS);

    let updateFiles = await fs.addFile(id, model, files)
    let confirmFiles = await orm.updateArrayInOne(model, id, {files:updateFiles})
    if(confirmFiles) return {code: 200, message:id.toString() }
  }
  else{
    return {code: 200, message:id.toString() };
  }

}

export default put
