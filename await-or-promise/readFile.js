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

async function textContent(fileName) {
  try {
    let content = await readWhat(fileName);
    console.log(content);
  } catch (e) {
    console.log(e);
  }
}
textContent("text.txt");

console.log("first log");
