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

// console.log(postData)
// console.log(currentModel.data)
// console.log(this.Encryptor)

//hash stuff here
for(let [key, value] of currentModel.data){
  if(value.encrypted === 'yes'){
      let hash = await this.Encryptor.encrypt(postData[key])
    postData[key] = hash;
    console.log('tmpencr', postData[key])
  }
}




  if(currentModel.db){
    configFileDB = this.databaseMap.get(currentModel.db).get('setup')
    orm = new this.orm[currentModel.db](configFileDB);
    id = await orm.addOne(model, postData)
  }

  if(currentModel.files && files.length > 0){
    configFileFS = this.fileSystemsMap.get(currentModel.files).get('setup')

console.log(this.fs[currentModel.files])


console.log(configFileFS)
console.log('%%%%%%%%%%%%%%%%%%%%%%%%%')

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
