/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  const res = new Array(arr.length);

  for (const i in arr) {
    res[i] = fn(arr[i], Number(i));
  }

  return res;
};

// Shajid's Example
const arr = [1, 2, 3, 4];
const fn = (element, index) => element * index;

const result = map(arr, fn);
console.log(result);
