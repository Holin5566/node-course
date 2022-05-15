function doWork(job, timer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = `現在是 ${job} 時間`;
      if (Math.random() > 0.5) {
        reject("失敗了");
      } else {
        resolve(result);
      }
    }, timer);
  });
}

// doWork("唱歌", 1000).then((e) => console.log(e));

console.log("早上好，中國");
console.log("我喜歡冰激林");
(async () => {
  try {
    let result = await doWork("唱歌", 1000);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
})();
