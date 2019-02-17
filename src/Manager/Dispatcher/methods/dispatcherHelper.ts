const dispatcherHelper = function(model){

  // console.log('jlo cool', this);

  let currentModelMap = this.modelMap.get(model)
  let currentModelDB = currentModelMap.get('db');
  let currentModelFiles = currentModelMap.get('files');
  let currentModelDBType = this.databaseMap.get(currentModelDB).get('type');
  let currentModelData = currentModelMap.get('data')


  let currentModel = {
    // map: currentModelMap,
    db: currentModelDB,
    files: currentModelFiles,
    data: currentModelData
    // dbType: currentModelDBType
  }


  return currentModel

}

export default dispatcherHelper
