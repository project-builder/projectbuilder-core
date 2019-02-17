const createFileSystemsMap = function(fsName, fsConfig){
  let name = fsName;
  fsName = new Map();

  for (const key in fsConfig) {
    fsName.set(`${key}`, fsConfig[key])
  }

  this.fileSystemsMap.set(name, fsName);
}

export default createFileSystemsMap
