// 刷牙(3000) -> 吃早餐(5000) -> 寫功課(3000)
let dt = new Date();
console.log(`起床: at ${dt.toISOString()}`);

let doWork = function (job, timer, cb) {
  setTimeout(() => {
    let dt = new Date();
    let result = `完成工作: ${job} at ${dt.toISOString()}`;
    cb(result);
  }, timer);
};
let timer = 3000;
doWork("刷牙", timer, (str) => {
  console.log(str);
});
doWork("吃早餐", (timer += 5000), (str) => {
  console.log(str);
});
doWork("寫功課", (timer += 3000), (str) => {
  console.log(str);
});
