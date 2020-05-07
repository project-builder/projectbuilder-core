/**
Installs the necessary orm plugin based on the  prjbconfig.yml file
*/

const determineORM = async function() {
  let ORMTypes:Set<any> = new Set();

  for(let key in this.project.databases){
    ORMTypes.add(this.project.databases[key].type)
  }

  this.ormTypes = {}

  for (let dbType of ORMTypes) {
    this.ormTypes[dbType] = await import(`@projectbuilder/projectbuilder-orm-${dbType}`)
  }

}

export default determineORM
