import * as index from './methods/index'

class Router{
  api: any;
  modelName: string;
  modelMap: Map<string, string>;
  apiPath: string;
  dispatcher: any;

    constructor(name:string, express, dispatcher, modelMap){
        this.api = express;
        this.modelName = name;
        this.modelMap = modelMap
        this.apiPath = `/api/${name}/`;
        this.dispatcher = dispatcher
    }


    listen = index.listen
}


export default Router
