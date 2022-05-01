const fn = (str) => {
  let arr = [];
  let pairs = "";

  if (str.length % 2 == 0) {
    for (let i = 0; i < str.length; i++) {
      pairs += str[i];
      if (pairs.length < 2) {
        continue;
      } else {
        arr.push(pairs);
        pairs = "";
      }
    }
  } else {
    for (let i = 0; i < str.length; i++) {
      pairs += str[i];
      if (i == str.length - 1) {
        pairs += "_";
        arr.push(pairs);
      } else {
        if (pairs.length < 2) {
          continue;
        } else if (str[i] == str.length - 1) {
          pairs += "_";
          arr.push(pairs);
        } else {
          arr.push(pairs);
          pairs = "";
        }
      }
    }
  }

  return arr;
};

export default fn;
