const manage = function(){
    for (const [key, value] of this.modelMap) {
        const router = new this.Router(key, this.app, this.dispatcher);
        console.log(`An API for ${key} has been created`);
        console.log(`=========================================`);
        router.listen()
    }
}

export default manage
