const dispatcherHelper = function(model){
  let currentModelMap = this.modelMap.get(model)
  let currentModelDB = currentModelMap.get('db');
  let currentModelFiles = currentModelMap.get('files');
  let currentModelData = currentModelMap.get('data')


  let currentModel = {
    db: currentModelDB,
    files: currentModelFiles,
    data: currentModelData
  }


  return currentModel

}

export default dispatcherHelper
