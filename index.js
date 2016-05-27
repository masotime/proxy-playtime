require('babel-register');
console.log('+'.repeat(50));
console.log('PRIVACY STUFF: ');
require('./src/privacy/');
console.log('+'.repeat(50));
console.log('CACHE STUFF: ');
require('./src/cache/');
