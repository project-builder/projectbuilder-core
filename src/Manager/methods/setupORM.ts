const setupORM = async function(){
    console.log(this.project.databases)
  this.orm = {}

  for(let key in this.project.databases){

    console.log('key is ', key)
    // console.log('key is ', key)


    let dbType = ""

      switch (this.project.databases[key].type) {
        case 'mysql': dbType = this.ormTypes.mysql.default
          break;

        case 'mongo': dbType = this.ormTypes.mongo.default
          break;
        default:
      }

    this.orm[key] = dbType;


console.log('+++++++++++++++++++')
console.log(this.orm)
console.log('+++++++++++++++++++')


  }
}

export default setupORM
