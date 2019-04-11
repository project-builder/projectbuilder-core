# projectbuilder-core


projectbuilder-core is the heart and soul of the projectBuilder suite. This package will start your server, constructor your API, and make any necessary calls to databases and file storage systems. It also provides basic validation, and encryption (note: Encryption has not yet been implemented).

## USAGE
The prefered way to make use of projectbuilder-core is via the CLI package, projectbuilder-cli, which will generate a config file and install the core as well as additional plugin packages. If, however, you wish to manually setup your project, the instructions are below.





## INSTALATION

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


## CONFIG FILE

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
        password: "donttellanyone" #ideally keep this in an environment variable
        database: "someDB" #This is the name of your actual database
  filesystems:
  	myFilesLiveHere: #a user frienldy name used to refer to the filestorage 
      type: "s3" #what kind of database your connecting to
      setup: #configuration for the fs of choice, this may differ between fs 
        bucket: "my.files.s3.sample" 
  models:
    clothes: #the name of your model
      files: "myFilesLiveHere" #the friendly name of the filesystem this model is connected to
      db: "myProjectDatabase"  #the friendly name of the db this model is connected to
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

## .ENV Files

projectBuilder can read from a .env in your projects root directory. It is recomended that your store sensitve information such as passwords in this file, and that you do not commit said file to any VCS.

We'll save our mysql database password into and environment variable by including the following line in our `.env` file.

```bash
mySecretPassword = 'donttellanyone'
```


Now in our config file, we only need to change the password line. It would now look like this.




```yaml
---
  databases: 
    myProjectDatabase:
      type: "mysql" 
      setup:  
        port: "3306"
        host: "localhost"
        user: "root"
        password: process.env.mySecretPassword #our password is saved in the environment variable `mySecretpassword`
        database: "someDB" 
  filesystems:
  	myFilesLiveHere:  
      type: "s3" 
      setup: 
        bucket: "my.files.s3.sample" 
  models:
    clothes: #the name of your model
      files: "myFilesLiveHere" 
      db: "myProjectDatabase"  
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

projectBuilder will take care of the rest!.

## Public Folder
Project builder is designed to run the API for your application. It does not serve static content. You will need to create a separate web application with the proper API calls between it and your ProjectBuilder server.



## index.js

Finally we'll need an index.js file. (name this whatever you like, it's your start script)


```javascript
const {Manager} = require('@projectbuilder/projectbuilder-core');
const myManager = new Manager();
myManager.initialize(7600); #the number is the port your want to run your server on
```


## Recap

• In order for projectBuilder to function properly, it needs a config file at the root directory titled `prjbconfig.yml`

• You will need to install any orm or fs plugins manually

• If you wish to hide your passwords, put them in a `.env` file at the projects root directory.






































