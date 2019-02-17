/**
A description for determineORM
*/

const determineORM = async function() {
  let ORMTypes = new Set();

  for(let key in this.project.databases){
    ORMTypes.add(this.project.databases[key].type)
  }

  this.ormTypes = {}

  for (let dbType of ORMTypes) {
    this.ormTypes[dbType] = await import(`@projectbuilder/projectbuilder-orm-${dbType}`)
  }


}

export default determineORM
