const dispatcherHelper = function(model: string){

  let currentModelMap: Map<any,any> = this.modelMap.get(model)
  let currentModelDB = currentModelMap.get('db');
  let currentModelFiles = currentModelMap.get('files');
  let currentModelData = currentModelMap.get('data')


  let currentModel: Object = {
    db: currentModelDB,
    files: currentModelFiles,
    data: currentModelData
  }


  return currentModel

}

export default dispatcherHelper
