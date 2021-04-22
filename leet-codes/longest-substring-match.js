const longestCommonSubstring = function (strs) {
  const longestIndex = getlongestIndex(strs);
  const longestWord = strs[longestIndex];
  return findlongestCommonSubstring(longestWord, strs);
};

const findlongestCommonSubstring = (evaluatedSubstring, strs) => {
  if (checkIfIsCommon(evaluatedSubstring, strs)) {
    return evaluatedSubstring;
  }
  else {
    const leftCutTarget = findlongestCommonSubstring(cutByLeft(evaluatedSubstring), strs);
    const rightCutTarget = findlongestCommonSubstring(cutByRight(evaluatedSubstring), strs);

    if (leftCutTarget.length === 0 && rightCutTarget.length === 0) {
      return "";
    }

    if (leftCutTarget.length > rightCutTarget.length) {
      return leftCutTarget
    }
    else {
      return rightCutTarget
    }
  }

}

const checkIfIsCommon = (word, words) => {
  for (let i = 0; i < words.length; i++) {
    if (!words[i].includes(word)) {
      return false;
    }
  }
  return true;
}

const getlongestIndex = (strs) => {
  let longestIndex = 0;
  strs.forEach((str, i) => {
    if (str.length > strs[longestIndex].length) {
      longestIndex = i;
    }
  });
  return longestIndex;
}

const cutByLeft = (word) => {
  return word.substring(1);
}

const cutByRight = (word) => {
  return word.slice(0, -1);
}

const testStrs1 = ["flower", "flow", "flight"];
const testStrs2 = ["dog", "racecar", "car"];
const testStrs3 = ["nsicolas", "nicolhas", "nicols"];
const testStrs4 = ["dog", "racecar", "car"];

console.log('longestCommonSubstring: ', longestCommonSubstring(testStrs1));
console.log('longestCommonSubstring: ', longestCommonSubstring(testStrs2));
console.log('longestCommonSubstring: ', longestCommonSubstring(testStrs3));