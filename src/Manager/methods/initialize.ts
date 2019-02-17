const initialize = async function(port: number) {
  await this.determineORM();
  await this.determineFS();

  this.setupORM();
  this.setupFS();

  for (let key in this.project.models) {
    this.createModelMap(key, this.project.models[key]);
  }

  for (let key in this.project.databases) {
    this.createDatabaseMap(key, this.project.databases[key]);
  }

  for (let key in this.project.fileSystems) {
    this.createFileSystemsMap(key, this.project.fileSystems[key]);
  }


for (let [key, value] of this.modelMap) {
  let currentModelMap = this.modelMap.get(key)
  let currentModelDB = currentModelMap.get('db');
  // let currentModelDBType = this.databaseMap.get(currentModelDB).get('type');

  if (currentModelDB) {
    let configFile = this.databaseMap.get(currentModelDB).get('setup')
    let orm = new this.orm[currentModelDB](configFile)
    await orm.create(key, this.project.models[key])
  }
}



  let listenPort = process.env.PORT || port

  this.dispatcher = new this.Dispatcher(this.modelMap, this.databaseMap, this.fileSystemsMap, this.orm, this.fs, this.validator)

  this.manage();

  this.app.use(this.multer().any());
  this.app.use(this.express.static("public/dist"));

  this.app.listen(listenPort, () => {
    console.log(`Listening on port ${listenPort}`);
  })

}

export default initialize;

  // if (currentModel.db) {
  //   let configFile = this.databaseMap.get(currentModel.db).get('setup')
  //   let orm = new this.orm[currentModel.db](configFile)
  //   let myresp = await orm.getAll(model, searchCategory, searchValue)
  //
  //   return myresp
  // }
