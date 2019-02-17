const get = async function(model, searchQuery){

  console.log(searchQuery)

let searchCategory = [];
let searchValue = [];


  for (let key in searchQuery) {
      searchCategory.push(key);
      searchValue.push(`'${searchQuery[key]}'`)
  }

  console.log('sc', searchCategory);
  console.log('sv', searchValue);



  let currentModel = this.dispatcherHelper(model);

  if (currentModel.db) {
    let configFile = this.databaseMap.get(currentModel.db).get('setup')

console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^')
    console.log(configFile)

console.log('***********************')
console.log(this.orm)

console.log('***********************')
console.log(currentModel.db)
console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^')






    let orm = new this.orm[currentModel.db](configFile);
    let myresp = await orm.getAll(model, searchCategory, searchValue);

    return myresp
  }

}

export default get
