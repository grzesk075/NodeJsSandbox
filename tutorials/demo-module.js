var myfirstmodule = require('./myfirstmodule'); //path related to this file not node working dir
var myfirstmodule = require('./myfirstmodule'); //the myfirstmodule code runs only once

console.log(myfirstmodule.myDateTime());
//console.log(myfirstmodule.myInternalFunction()); not visible