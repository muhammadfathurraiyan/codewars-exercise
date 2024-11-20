function isSortedAndHow(array) {
  const isAsc = [];
  const isDes = [];

  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) break;
    const element = array[i];
    const nextElement = array[i + 1];

    if (element > nextElement) isDes.push("yes");
    else if (element < nextElement) isAsc.push("yes");
  }

  if (isDes.length > 0 && isAsc.length > 0) return "no";
  else if (isAsc.length === 0) return "yes, descending";
  else return "yes, ascending";
}

console.log(isSortedAndHow([1, 2]));
