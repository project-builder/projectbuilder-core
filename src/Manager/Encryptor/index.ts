import bcrypt from 'bcrypt';

// const saltRounds = 10;

class Encryptor{
  // bcrypt: any;
    static bcrypt: any;
  // static bcrypt: any;

  constructor(){
  // this.bcrypt = bcrypt
  }


  static async encrypt(plainPass){
    let hash = await this.bcrypt.hash(plainPass, 5);
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
