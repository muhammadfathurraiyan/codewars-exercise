function parse(data) {
  const result = [];
  let count = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i] === "i") {
      count++;
    } else if (data[i] === "d") {
      count--;
    } else if (data[i] === "s") {
      count = count * count;
    } else if (data[i] === "o") {
      result.push(count);
    }
  }

  return result;
}

console.log(parse("iiisdosodddddiso"))
