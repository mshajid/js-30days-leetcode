/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let countInit = init;

  //   function increment() {
  //     return ++countInit;
  //   }

  //* Efficient Way to Increment in 1 Line
  const increment = () => ++countInit;

  //   function decrement() {
  //     return --countInit;
  //   }

  const decrement = () => --decrement;

  function reset() {
    countInit = init;
    return countInit;
  }

  //   return {
  //     increment: increment,
  //     decrement: decrement,
  //     reset: reset,
  //   };

  //* If the object and key are same name
  return {
    increment,
    decrement,
    reset,
  };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
