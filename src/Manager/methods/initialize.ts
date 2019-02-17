const initialize = async function (port) {
console.log('initialized with YAML file!')


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

    let listenPort = process.env.PORT || port

    this.app.use(this.multer().any());

    this.dispatcher = new this.Dispatcher(this.modelMap, this.databaseMap, this.fileSystemsMap, this.orm, this.fs, this.validator)

    this.manage();

    this.app.listen(listenPort, () => {
        console.log(`Listening on port ${listenPort}`);
    })

  }

  export default initialize;
