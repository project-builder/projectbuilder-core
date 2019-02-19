import * as YAML from 'yamljs'

const initialize = async function(port: number) {

let cDir = process.cwd()

let yams = YAML.load(`${cDir}/prjbconfig.yml`)

console.log('=========================')
console.log(yams)
console.log('...........................')

  this.project = yams


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

  await this.createTables()

  let listenPort = process.env.PORT || port

  this.dispatcher = new this.Dispatcher(this.modelMap, this.databaseMap, this.fileSystemsMap, this.orm, this.fs, this.validator)

  this.app.use(this.multer().any());
  this.app.use(this.express.static("public/dist"));

  this.manage();




  this.app.listen(listenPort, () => {
    console.log(`Listening on port ${listenPort}`);
  })

}

export default initialize;
