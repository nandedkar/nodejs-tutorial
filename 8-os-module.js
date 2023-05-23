const os = require("os");

console.table(os.userInfo());

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  os: os.freemem(),
};

console.log("currentOs", currentOs);
