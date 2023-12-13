// Using the test method
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line

// Matching a literal string with different posibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let resultTwo = petRegex.test(petString);

// Ignore case while matching
let myStringTwo = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let resultThree = fccRegex.test(myStringTwo);

// Extract matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let resultFour = extractStr.match(codingRegex); // Change this line

// Find more than the first match
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let resultFive = twinkleStar.match(starRegex); // Change this line

// Match anything with the wildcard period
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let resultSix = unRegex.test(exampleStr);

// Match a single character with multiple possibilities
let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let resultSeven = quoteSample.match(vowelRegex); // Change this line

// Match letters of the alphabet
let quoteSampleTwo = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let resultEight = quoteSampleTwo.match(alphabetRegex); // Change this line

// Match numbers and letters of the alphabet
let quoteSampleThree = "Blueberry 3.141592653s are delicious.";
let myRegexTwo = /[h-s2-6]/gi; // Change this line
let resultNine = quoteSampleThree.match(myRegexTwo); // Change this line

// Match single characters not specified
let quoteSampleFour = "3 blind mice.";
let myRegexThree = /[^1-9aeiou]/gi; // Change this line
let resultTen = quoteSampleFour.match(myRegexThree); // Change this line

// Match characters that occur one or more times
let difficultSpelling = "Mississippi";
let myRegexFour = /s+/gi; // Change this line
let resultEleven = difficultSpelling.match(myRegexFour);

// Match ending string patterns
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let resultTwelve = lastRegex.test(caboose);

// Match all letters and numbers
let quoteSampleFive = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let resultThirteen = quoteSampleFive.match(alphabetRegexV2).length;

// Match everything but letters and numbers
let quoteSampleSix = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let resultFourteen = quoteSampleSix.match(nonAlphabetRegex).length;

// Match all numbers
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let resultFifteen = movieName.match(numRegex).length;

// Match all non numbers
let movieNameTwo = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let resultSixteen = movieNameTwo.match(noNumRegex).length;

// Restrict possible usernames
let username = "Z927";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/gi; // Change this line
let resultSeventeen = userCheck.test(username);
console.log(resultSeventeen);

// Match whitespace
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let resultEighteen = sample.match(countWhiteSpace);

// Match non-whitespace
let sampleTwo = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let resultNineteen = sampleTwo.match(countNonWhiteSpace);

// Specify upper and lower number of matches
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
let resultTwenty = ohRegex.test(ohStr);
console.log(resultTwenty);

// Specify only the lower number of matches
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let resultTwentyone = haRegex.test(haStr);

// Specify the exact number of matches
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let resultTwentytwo = timRegex.test(timStr);

// Check for all or none
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let resultTwentythree = favRegex.test(favWord);

// Positive and negative lookahead
let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D+\d{2})/; // Change this line
let resultTwentyfour = pwRegex.test(sampleWord); // for negative is (?!)

// Check for mixed grouping of characters
let myStringThree = "Eleanor D. Roosevelt";
let myRegexFive = /(Eleanor|Franklin)(\s|\s\D\W\s)Roosevelt/; // Change this line
let resultTwentyfive = myRegexFive.test(myStringThree); // Change this line
// After passing the challenge experiment with myString and see how the grouping works
console.log(resultTwentyfive);

// Reuse patterns using capture groups
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/; // Change this line
let resultTwentysix = reRegex.test(repeatNum);

// Use capture groups to search and replace
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let resultTwentyseven = str.replace(fixRegex, replaceText);

// Remove whitespace from start and end
let hello = "   Hello, World!  ";
let wsRegex = /(^\s+)(\w+,\s\w+\W)(\s+$)/i; // Change this line
let resultTwentyeight = hello.replace(wsRegex, "$2"); // Change this line
console.log(resultTwentyeight);
