const fn = (str) => {
  return str.replaceAll(" ", "");
};

const fn2 = (str) => {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      continue;
    } else {
      newStr += str[i];
    }
  }

  return newStr;
};

export { fn, fn2 };
