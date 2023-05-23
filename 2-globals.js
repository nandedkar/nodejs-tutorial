//GLOBALS - NO WINDOW !!!!

//__dirname  - path to current directory
//__filename - file name
//require    - function to use modules(CommonJS)
//module     - Info about current module (file)
//process    - Info about env where the program is being executed


console.log('dirname:',__dirname);
console.log('filename:',__filename);
setInterval(() => {
    const date = new Date();
    console.log('Hello World', date.getSeconds());
},1000);