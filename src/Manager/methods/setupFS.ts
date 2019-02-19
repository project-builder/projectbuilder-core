const setupFS = async function(){
  this.fs = {}

  for(let key in this.project.fileSystems){
    let fsType = ""

      switch (this.project.fileSystems[key].type) {
        case 'S3': fsType = this.fsTypes.s3.default
          break;
        default:
      }

    this.fs[key] = fsType;

  }
}

export default setupFS
