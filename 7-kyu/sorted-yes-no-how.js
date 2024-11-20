function isSortedAndHow(array) {
  let isAsc = 0;
  let isDes = 0;

  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) break;
    const element = array[i];
    const nextElement = array[i + 1];

    if (element > nextElement) isDes++;
    else if (element < nextElement) isAsc++;
  }

  if (isDes > 0 && isAsc > 0) return "no";
  else if (isAsc === 0) return "yes, descending";
  else return "yes, ascending";
}

console.log(isSortedAndHow([1, 2]));
