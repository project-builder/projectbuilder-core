#projectbuilder-core


projectbuilder-core is the heart and soul of the projectBuilder suite. This package will start your server, constructor your API, and make any necessary calls to databases and file storage systems. It also provides basic validation, and encryption (note: as of Feb 18, 2019, this feature is not yet implemented.).

##USAGE
The prefered way to make use of projectbuilder-core is via the CLI package, projectbuilder-cli, which will generate a config file and install the core as well as additional plugin packages. If, however, you wish to manually setup your project, the instructions as below.





##INSTALATION

``` bash
$ npm i @projectbuilder/projectbuilder-core
```


If you are using any databases of filestorage, you will need to manually install those packages as well

for databases

```
npm i @projectbuilder/projectbuilder-orm-DATABASE
```

for filesystem

```
npm i @projectbuilder/projectbuilder-fs-FILESYSTEM
```

Be sure to check that a package exists for the database and file storage system you are using.


##CONFIG FILE

projectbuilder-core will look for a YAML file in your projects root folder called `prjbconfig.yml`

This config file will have three sections: `databases`, `filesystems`, and `models`.


```yaml
---
  databases: 
    myProjectDatabase: #a user frienldy name used to refer to the database 
      type: "mysql" #what kind of database your connecting to
      setup: #configuration for the orm of choice, this may differ between orms 
        port: "3306"
        host: "localhost"
        user: "root"
        password: "myPassword" #ideally keep this in an environment variable
        database: "someDB"
  filesystems: {}
  models:
    clothes:
      files: false
      db: "production"
      data:
        type:
          dataType: "string"
          required: true
          encrypted: "no"
        size:
          dataType: "string"
          required: true
          encrypted: "no"
        color:
          dataType: "string"
          required: true
          encrypted: "no"
```


















































