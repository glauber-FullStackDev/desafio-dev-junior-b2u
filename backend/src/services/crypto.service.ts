import * as crypto from 'crypto';

export class CryptoService {

  constructor() {
    this.hash = this.hash.bind(this);    
    this.verify = this.verify.bind(this);    
  }

  async hash(password: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const salt = crypto.randomBytes(8).toString('hex');

      crypto.scrypt(password, salt, 64, (err, derivedKey) => {
        if (err) reject(err);
        resolve(salt + ':' + derivedKey.toString('hex'));
      });
    });
  }

  async verify(password: string = "", hash: string = ""): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const [salt, key] = hash.split(':');
      crypto.scrypt(password, salt, 64, (err, derivedKey) => {
        if (err) reject(err);
        resolve(key == derivedKey.toString('hex'));
      });
    });

  }
}
