const activateORM = async function(){


  // for (let [key, value] of this.modelMap) {
  //   let currentModelMap = this.modelMap.get(key)
  //   let currentModelDB = currentModelMap.get('db');
  //
  //   if (currentModelDB) {
  //     let configFile = this.databaseMap.get(currentModelDB).get('setup')
  //
  //     let orm = new this.orm[currentModelDB](configFile)
  //     await orm.create(key, this.project.models[key])
  //   }
  // }


//   this.orm = {}
//
  for(let key in this.project.databases){
      console.log(key)
    // this.orm[key] = this.ormTypes[this.project.databases[key].type].default
  }












}

export default activateORM



// const createTables = async function(){
//   for (let [key, value] of this.modelMap) {
//     let currentModelMap = this.modelMap.get(key)
//     let currentModelDB = currentModelMap.get('db');
//
//     if (currentModelDB) {
//       let configFile = this.databaseMap.get(currentModelDB).get('setup')
//
//       let orm = new this.orm[currentModelDB](configFile)
//       await orm.create(key, this.project.models[key])
//     }
//   }
// }
