function sum(n) {
  let result = 0;
  const recursive = (n) => {
    if (n == 0) {
      return result;
    } else {
      result += n;
      n--;
      return recursive(n);
    }
  };
  return recursive(n);
}

console.log(sum(1)); // 1
console.log(sum(2)); // 3
console.log(sum(10)); // 55
console.log(sum(100)); // 5050
