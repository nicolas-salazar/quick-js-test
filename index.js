const chalk = require('chalk');
console.log(chalk.white.bold('Started index.js 🥸'));

// My code goes here:
// ~~~~~~~~~~~~~~~~~~
const generateParenthesis = (n) => {
  const nestedArrays = generateParenthesisFromBaseLayer("()", n - 1);
  return [... new Set(extractNestedItems(nestedArrays))];
};

const extractNestedItems = (nestedArrays) => {
  if (typeof nestedArrays === 'string') {
    return [nestedArrays];
  }

  let items = [];
  for (let i = 0; i < nestedArrays.length; i++) {
    items.push(...extractNestedItems(nestedArrays[i]));
  }

  return items;
}

const generateParenthesisFromBaseLayer = (item, remainLayers) => {
  if (remainLayers === 0) {
    return [item];
  }
  else {
    return [
      generateParenthesisFromBaseLayer(appendVertical(item), remainLayers - 1),
      generateParenthesisFromBaseLayer(appendLeft(item), remainLayers - 1),
      generateParenthesisFromBaseLayer(appendRight(item), remainLayers - 1),
    ];
  }
}

const appendVertical = (item) => {
  return "(" + item + ")";
}
const appendLeft = (item) => {
  return "()" + item;
}
const appendRight = (item) => {
  return item + "()";
}


console.log("Results with n = 1 ->", generateParenthesis(1));
console.log("Results with n = 2 ->", generateParenthesis(2));
console.log("Results with n = 3 ->", generateParenthesis(3));
console.log("Results with n = 4 ->", generateParenthesis(4));

console.log(chalk.white.bold('Finished index.js 🧐'));