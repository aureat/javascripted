export const memoize = (fn) => {
  const map = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (map[key] !== undefined) {
      return map[key];
    }

    const result = fn(...args);
    map[key] = result;
    return result;
  };
};
