import * as index from './methods/index.js'

class Router{
  api: any;
  modelName: any;
  modelMap: any;
  apiPath: any;
  dispatcher: any;

    constructor(name, express, dispatcher, modelMap){
        this.api = express;
        this.modelName = name;
        this.modelMap = modelMap
        this.apiPath = `/api/${name}/`;
        this.dispatcher = dispatcher
    }


    listen = index.listen
}


export default Router
