const post = async function(model, data, files)  {
  let [dataKey] = Object.keys(data)

  let currentModel = this.dispatcherHelper(model);
  let postData = JSON.parse(data[dataKey]);

  let configFileDB, orm, configFileFS, fs, id

  let validator = new this.validator(currentModel.data)

  let validateResponse = await validator.validatePost(postData)

  if(validateResponse != true ){
    return validateResponse
  }



console.log(currentModel.data)

//hash stuff here
for(let key in currentModel.data){
  if(currentModel.data[key].encrypted === 'yes'){
    let temp = postData[key];
    console.log('tmpencr', temp)
  }
}




  if(currentModel.db){
    configFileDB = this.databaseMap.get(currentModel.db).get('setup')
    orm = new this.orm[currentModel.db](configFileDB);
    id = await orm.addOne(model, postData)
  }

  if(currentModel.files && files.length > 0){
    configFileFS = this.fileSystemsMap.get(currentModel.files).get('setup')
    fs = new this.fs[currentModel.files](configFileFS);
    let updateFiles = await fs.addFile(id, model, files)
    let confirmFiles = await orm.updateOne(model, id, {files:updateFiles})
    if(confirmFiles) return {code: 200, message: String(id) }
  }
  else{
    return {code: 200, message: String(id) };
  }


}

export default post
