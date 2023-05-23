const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first, second);

writeFileSync(
  "./content/newFile.txt",
  `Here is the new file data ${first} ${second}`,
  { flag: "a" }
);
