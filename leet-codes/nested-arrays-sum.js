const theList = [1, 2, [3, 4, [5, 6, 0], 7], 8, 9, [10]];

const getSum = (array) => {
  let total = 0;

  array.forEach(item => {
    if (item.length) {
      total += getSum(item);
    }
    else {
      if (item) {
        total += item;
      }
    }
  });

  return total;
}

console.log('Total: ', getSum(theList));