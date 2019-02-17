const determineORM = async function() {
  let ORMTypes = new Set();

  for(let key in this.project.databases){
    ORMTypes.add(this.project.databases[key].type)
  }

  this.ormTypes = {}

  for (let dbType of ORMTypes) {
    this.ormTypes[dbType] = await import(`@projectbuilder/projectbuilder-orm-${dbType}`)

    // switch (dbType) {
    //   case 'mysql': this.ormTypes.mysql = await import('@projectbuilder/projectbuilder-orm-mysql')
    //     break;
    //   case 'mongo': this.ormTypes.mongo = await import('projectbuilder-orm-mongo')
    //     break;
    //   case 'Firebase': this.ormTypes.firebase = await require('firebaseorm')
    //     break;
    //   default:
    // }
  }


}

export default determineORM
