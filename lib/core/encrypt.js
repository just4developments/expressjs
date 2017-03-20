exports = module.exports = {
  md5(str) {
    const crypto = require('crypto');
    return crypto.createHash('md5').update(str).digest("hex");
  },
  base64(str, isDecode) {
    if (!isDecode) return new Buffer(str).toString('base64');
    return Buffer.from(str, 'base64').toString('utf8');
  },
  blowfish(key){
    const Blowfish = require('./encrypt.blowfish');
    exports.blowfish = new Blowfish(key);
  },
  decryptText(sf) {    
    return exports.blowfish.trimZeros(exports.blowfish.decrypt(exports.blowfish.base64Decode(sf)));
  },
  encryptText(data) {
    if(data === null || data === undefined) return data;
    data = typeof data === 'object' ? JSON.stringify(data) : data.toString();
    return exports.blowfish.base64Encode(exports.blowfish.encrypt(data));
  }
}