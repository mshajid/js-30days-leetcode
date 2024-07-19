/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let countInit = init;

  function increment() {
    return ++countInit;
  }

  function decrement() {
    return --countInit;
  }

  function reset() {
    countInit = init;
    return countInit;
  }

  return {
    increment: increment,
    decrement: decrement,
    reset: reset,
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
