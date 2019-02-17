const validatePost = async function(data){

  this.rules.delete('id')

  //checks if data has required items
  try {
    for (let [key, value] of this.rules) {
      if(value.required){
        if(!data[key]){
          throw {code: 400, message: `${key} is required!`};
        }
      }
    }
  } catch (err) {
    console.log(err);
    return err
  }

  //checks if data has unwanted items
  try {
    for (let key in data) {
      if(!this.rules.has(key)){
          throw {code: 400, message: `${key} is not a valid data!`};
      }
    }
  } catch (err) {
    console.log(err);
    return err
  }

//checks if datatypes are good
try {
  for (let key in data) {
    if (typeof(data[key]) != this.rules.get(key).dataType) {
        throw {code: 400, message: `${key} is wrong!`};
    }
  }
} catch (err) {
  console.log(err);
  return err
}

return true

}

export default validatePost
