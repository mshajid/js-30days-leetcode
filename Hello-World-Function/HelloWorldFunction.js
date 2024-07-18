/**
 * @return {Function}
 */

const createHelloWorld = () => {
  return function (...args) {
    return "Hello World";
  };
};

const f = createHelloWorld();
f();


/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
