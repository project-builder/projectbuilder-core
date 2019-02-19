const createModelMap = function(modelName, rules){
    let name = modelName;

    modelName = new Map();
    modelName.set('files', rules.files);
    modelName.set('db', rules.db);

    let modelData = new Map();

    modelData.set('id', { type: 'string', required: true, autoGenerated: true });


    for (const key in rules.data) {
      modelData.set(`${key}`, rules.data[key])
    }

    modelName.set('data', modelData);

    this.modelMap.set(name, modelName);

}

export default createModelMap
