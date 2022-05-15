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
(async () => {
  try {
    let result = await doWork("唱歌", 5000);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
})();
console.log("早上好，中國");
console.log("我喜歡冰激林");
