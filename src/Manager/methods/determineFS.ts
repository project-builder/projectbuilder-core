const determineFS = async function() {
  let FSTypes = new Set();

  for(let key in this.project.fileSystems){
    FSTypes.add(this.project.fileSystems[key].type)
  }

  // console.log(FSTypes);
  this.fsTypes = {}
  for (let fsType of FSTypes) {
    this.fsTypes[fsType] = await import(`@projectbuilder/projectbuilder-fs-${fsType}`)
  // for (let fsType of FSTypes) {
  //   switch (fsType) {
  //     case 'S3': this.fsTypes.s3 = await import('s3ORM')
  //     // case 'S3': this.fsTypes.s3 = await require('s3ORM')

        break;
      // case 'Mongo': this.fsTypes.mongo = await import('mongoorm')
      //   break;
      // case 'Firebase': this.fsTypes.firebase = await import('firebaseorm')
      //   break;
      // default:
    // }
  }
}

export default determineFS
