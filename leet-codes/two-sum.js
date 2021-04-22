const numbers = [2, 7, 11, 15];
const target = 9;

const twoSum = function (nums, target) {
  let complementSet = {};

  for (let i = 0; i < nums.length; i++) {
    console.log(complementSet);
    const num = nums[i];
    const complement = target - num;

    if (complementSet[complement]) {
      return [complementSet[complement].index, i];
    }
    else {
      complementSet = {
        ...complementSet,
        [num]: {
          index: i,
          number: num,
        }
      }
    }
  }

  return [];
};

console.log(twoSum(numbers, target));
