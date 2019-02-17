// import multer from 'multer';
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

    // setup = () => {
    //   //bodyParser Settings
    //    this.api.use(multer().any());
    //    this.api.use(express.static("public/dist"));
    //
    //    this.api.listen(this.port, () => {
    //        console.log(`Listening on port ${this.port}`);
    //    })


    // }


    listen = index.listen
}


export default Router
