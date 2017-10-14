// Fail on warnings.
console.warn = (message) => {
  throw new Error(message);
};

// Suppress React 16 warning for requestAnimationFrame polyfill.
global.requestAnimationFrame = function (cb) {
  return setTimeout(cb, 0);
};
