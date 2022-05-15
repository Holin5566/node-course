const rf = require("fs");

// rf.readFile("rest.txt", "utf-8", () => {});

const read = new Promise((resovle, reject) => {
  rf.readFile("text.txt", "utf-8", (err, data) => {
    if (err) {
      reject(err);
    } else {
      resovle(data);
    }
  });
});

// read.then((txt) => console.log(txt)).catch((err) => console.log(err));

function readWhat(fileName) {
  return new Promise((resovle, reject) => {
    rf.readFile(fileName, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resovle(data);
      }
    });
  });
}

readWhat("text.txt")
  .then((txt) => console.log(txt))
  .catch((err) => console.log(err));
