import * as YAML from 'yamljs'
import * as dotenv from 'dotenv'


// dotenv.config();
console.log('got A')

const result = dotenv.config()

console.log('got B')


if (result.error) {
console.log('got C')

  throw result.error
}

console.log('got D')

console.log(result.parsed)
console.log('got E')





const initialize = async function(port: number) {
console.log('got F')


let cDir = process.cwd()
console.log('got G')


let yams = YAML.load(`${cDir}/prjbconfig.yml`)
console.log('got H')


console.log('=========================')
console.log(yams.databases.setup)
console.log('...........................')


// if(yams.databases.setup.password === 'process.env.productionPASS'){
var searchPattern = new RegExp('^' + 'process.env');

if (searchPattern.test(yams.databases.setup.password)) {
  console.log('need to convert')
  yams.databases.setup.password = eval(yams.databases.setup.password);

}
// }

  this.project = yams

console.log('got I')



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

// console.log('*******************************')
// console.log(this.databas)
// console.log('*******************************')



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
