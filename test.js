var a = require('./lib/core/encrypt');
a.blowfish(')^!!!(**');
var b = a.encryptText('f={"api":0,"mob":0}');
console.log(b, 'o9PrciJMIjtfk0OAL1Cj0HXS6IXErpTt', b.length);
var c = a.decryptText(b);
console.log(c, c.length);