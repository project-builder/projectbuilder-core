const listen = async function() {
    // this.api.get('/*', async (req, res) => {
    //   res.sendFile(`${process.cwd()}/public/dist/${req.params[0]}.html`)
    // })



    this.api.get(this.apiPath, myMiddle, async (req, res) => {
      let result = await this.dispatcher.get(this.modelName, req.query);
      res.send(result)
    })

    this.api.get(`${this.apiPath}id/*`, async (req, res) => {
      let result = await this.dispatcher.getOne(this.modelName, req.params);
      res.send(result)
    });

      this.api.get(`${this.apiPath}*`, async (req, res) => {
        let result = await this.dispatcher.getSome(this.modelName, req.params, req.query);
        res.send(result)
      });

    this.api.post(this.apiPath, async (req, res) => {

        let result = await this.dispatcher.post(this.modelName, req.body, req.files);
        res.status(result.code).send(result.message);
    });

    this.api.put(`${this.apiPath}:id`, async (req, res) => {
      let result = await this.dispatcher.put(this.modelName,req.params.id, req.body, req.files, );

      // res.send(result)
        res.status(result.code).send(result.message);
    } )

    this.api.delete(`${this.apiPath}:id?`, async (req, res) => {
      let result = await this.dispatcher.deleteOne(this.modelName, req.params.id);
      res.send(result)
    } )
}

const myMiddle = (req, res, next) => {
  console.log('i am a middle')
  console.log(process.env.projectBuilderKEY)
  console.log(req.params.api_key)

  let auth = req.params.api_key === process.env.projectBuilderKEY

  if(auth){
    next()
  }
  else{
    res.json({message: 'not authorized for that!'})
  }
}

export default listen
