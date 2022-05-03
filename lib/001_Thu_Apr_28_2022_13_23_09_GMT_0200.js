const fn = (arr) => {
  return Math.min(...arr);
};

const fn2 = (arr) => {
  return arr.sort((a, b) => a - b)[0];
};

export { fn, fn2 };
