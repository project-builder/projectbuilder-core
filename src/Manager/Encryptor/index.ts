import bcrypt from 'bcrypt';

// const saltRounds = 10;

class Encryptor{
  // constructor(){
  //
  // }

  static async encrypt(plainPass){
    let hash = await bcrypt.hash(plainPass, 5);
    return hash
  }

  static async decrypt(plainPass, hashPass){
    const match = await bcrypt.compare(plainPass, hashPass);
      if (match){
        console.log('it matches')
        return match
      }
    else{
        console.log('it DOES NOT matches')
    }
  }
}


export default Encryptor;
