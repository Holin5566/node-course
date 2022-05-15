function doWork(job) {
  let timer = Math.random() * 3000;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = `現在是 ${job} 時間`;
      if (Math.random() > 1) {
        reject("失敗了");
      } else {
        resolve(result);
      }
    }, timer);
  });
}

// doWork("唱歌", 1000).then((e) => console.log(e));
(async () => {
  let result;
  try {
    result = await doWork("唱歌");
    console.log(result);
  } catch (err) {
    console.log(err);
  }
})();
console.log("早上好，中國");
console.log("我喜歡冰激林");
