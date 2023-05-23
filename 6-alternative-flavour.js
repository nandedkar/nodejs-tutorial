//CommonJS, Every File is module ( By Default)
//Modules - Encapsulated Code (Only share the minimum)c

const names = require("./4-names");
const sayHi = require("./5-utils");

sayHi("Manoj");
sayHi(names.john);
sayHi(names.peter);
