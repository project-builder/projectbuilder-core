const setupORM = async function(){
  this.orm = {}

  for(let key in this.project.databases){
    this.orm[key] = this.ormTypes[this.project.databases[key].type].default
  }
}

export default setupORM
