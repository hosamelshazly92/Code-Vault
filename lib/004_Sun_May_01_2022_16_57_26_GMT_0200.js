const fn = (x, n) => {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(x * i);
  }

  return arr;
};

export default fn;
