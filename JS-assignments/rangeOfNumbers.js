function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const countArray = rangeOfNumbers(startNum, endNum - 1); //this is what recursion means, a function that calls itself
    countArray.push(endNum); //push method places value at the end of array
    return countArray;
  }
}
