import * as index from './methods/index'

class Validator{
  rules: any;
    constructor(rules){
        this.rules = rules;
        // this.data = data;
    }

    validatePost = index.validatePost
    validatePut = index.validatePut
    validateDelete = index.validateDelete

}

export default Validator;
