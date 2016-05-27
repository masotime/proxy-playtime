require('babel-register');
console.log('+'.repeat(50));
console.log('Privacy proxy: ');
require('./src/privacy/privacy.test');
console.log('+'.repeat(50));
console.log('Dynamic properties: ');
require('./src/dynamic-property/dynamic-property.test');
