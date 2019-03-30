import * as YAML from 'yamljs'
import * as dotenv from 'dotenv'

dotenv.config();

const initialize = async function(port: number) {

this.project = YAML.load(`${process.cwd()}/prjbconfig.yml`)

let envPattern = new RegExp('^' + 'process.env');


for (let key in this.project.databases) {

  if (envPattern.test(this.project.databases[key].setup.password)) {
    this.project.databases[key].setup.password = eval(this.project.databases[key].setup.password);
  }
}

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

console.log('********************')
console.log(this.project.models)
console.log('********************')


  await this.createTables()

  let listenPort = process.env.PORT || port

  this.dispatcher = new this.Dispatcher(this.modelMap, this.databaseMap, this.fileSystemsMap, this.orm, this.fs, this.validator)

  this.app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  this.app.use(this.multer().any());
  this.app.use(this.express.static("public/dist"));

  this.manage();

  this.app.listen(listenPort, () => {
    console.log(`Listening on port ${listenPort}`);
  })

}

export default initialize;
