function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countdown(n - 1); //this is what recursion means, a function that calls itself
    countArray.unshift(n); //unshift method places value at the beginning of array
    return countArray;
  }
}
