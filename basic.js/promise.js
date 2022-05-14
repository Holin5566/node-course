// 刷牙(3000) -> 吃早餐(5000) -> 寫功課(3000)
let dt = new Date();
console.log(`起床: at ${dt.toISOString()}`);

let doWork = function (job, timer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let dt = new Date();
      let result = `完成工作: ${job} at ${dt.toISOString()}`;
      resolve(result);
    }, timer);
  });
};

doWork("刷牙", 3000)
  .then((result) => {
    console.log(result);
    return doWork("吃飯", 5000);
  })
  .then((result) => {
    console.log(result);
    return doWork("寫作業", 3000);
  })
  .then((result) => {
    console.log(result);
  });
