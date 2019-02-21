import bcrypt from 'bcrypt';

// const saltRounds = 10;

export default class Encryptor{
  constructor(){

  }

  async encrypt(plainPass){
    let hash = await bcrypt.hash(plainPass, 5);
    return hash
  }

  async decrypt(plainPass, hashPass){
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
