
var hello = require('./hello');
console.log(hello);
var helloObj = new hello;
//console.log(helloObj);
var greeting = helloObj.test + require('./world');
console.log(greeting);
module.exports = greeting;