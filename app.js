const { readFile } = require("fs").promises;
const { writeFile } = require("fs");
const util = require("util");

// ## util.promisify used to create promise for readFile
const readFilePromise = util.promisify(readFile);

// ## Manually created promise for readFile
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, res) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(res);
//       }
//     });
//   });
// };

// ## This code has been replaced by async await
// getText("./content/first.txt")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

const start = async () => {
  try {
    // const first = await getText("./content/first.txt");
    const first = await readFile("./content/first.txt", "utf-8");

    // const second = await getText("./content/second.txt");
    const second = await readFile("./content/second.txt", "utf-8");

    await writeFile(
      "./content/merger-text-file.txt",
      `${first} ${second}`,
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();
