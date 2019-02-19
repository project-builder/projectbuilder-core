const determineFS = async function() {
  let FSTypes = new Set();

  for(let key in this.project.fileSystems){
    FSTypes.add(this.project.fileSystems[key].type)
  }

  this.fsTypes = {}
  for (let fsType of FSTypes) {
    this.fsTypes[fsType] = await import(`@projectbuilder/projectbuilder-fs-${fsType}`)
  }
}

export default determineFS
