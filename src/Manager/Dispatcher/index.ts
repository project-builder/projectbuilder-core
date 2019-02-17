import * as index from './methods/index.js'

class Dispatcher{
  modelMap: any;
  databaseMap: any;
  fileSystemsMap: any;
  orm: any;
  fs: any;
  validator: any

    constructor(modelMap, databaseMap, fileSystemsMap, orm, fs, validator ){
        this.modelMap = modelMap;
        this.databaseMap = databaseMap;
        this.fileSystemsMap = fileSystemsMap
        this.orm = orm;
        this.fs = fs;
        this.validator = validator
    }

    // dispatcher = index.dispatcher
    dispatcherHelper = index.dispatcherHelper
    get = index.get
    getOne = index.getOne
    post = index.post
    put = index.put
    deleteOne = index.deleteOne
    getSome = index.getSome


}

export default Dispatcher;
