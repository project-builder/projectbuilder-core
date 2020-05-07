const deleteOne = async function(model, id){
    let currentModel = this.dispatcherHelper(model);

    let configFileDB: Object, orm, configFileFS, fs, fileList

    if(currentModel.db){
      configFileDB = this.databaseMap.get(currentModel.db).get('setup')

      orm = new this.orm[currentModel.db](configFileDB);

      fileList = await orm.getOne(model, id)

      await orm.deleteOne(model, id)
    }

    if(currentModel.files &&  fileList.files && fileList.files.length > 0){
      configFileFS = this.fileSystemsMap.get(currentModel.files).get('setup')
      fs = new this.fs[currentModel.files](configFileFS);
      let deleteFiles = await fs.deleteFile(fileList.files)
      if(deleteFiles) return {code: 200, message: String(id) }
    }
    else{
      return {code: 200, message: String(id) };
    }
}

export default deleteOne
