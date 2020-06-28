"use strict";

function HelloWorld(){
    alert("Hello World!");
}

function Problem1(){
  var inputArray = [5, 17, 77, 50];
  var target = 55;
  var indexNum1;
  var indexNum2;
  for (let i = 0; i < inputArray.length; i++) {
      console.log(inputArray[i]);
      for (let j = 0; j < inputArray.length; j++) {
        console.log(inputArray[j]);
          if (i === j) {
            continue;
          } else {
            if(inputArray[i]+inputArray[j]===target){
              indexNum1=i;
              indexNum2=j;
            }
          }
      }
  }
  alert("Indeces: " + indexNum1 + ", " + indexNum2);
}

function Problem2(){
  var stringToCheck = prompt("Enter a word to check if it's a palidrome:")
  console.log(stringToCheck);
  console.log(stringToCheck.length);
  var isPalindrome = true;
  if (stringToCheck.length % 2 === 0) {
    let counter=1;
    for (let i = 0; i < (stringToCheck.length/2); i++) {
      let characterOne = stringToCheck[(stringToCheck.length/2)-counter];
      let characterTwo = stringToCheck[(stringToCheck.length/2)+i];
      if (characterOne != characterTwo ) {
        isPalindrome=false;
        break;
      }
      counter++;
    }
  } else {
    let counter=1;
    let middleIndex = Math.floor(stringToCheck.length/2);
    for (let i = 0; i < middleIndex; i++) {
      let characterOne = stringToCheck[middleIndex - counter];
      let characterTwo = stringToCheck[middleIndex + counter];
      if (characterOne != characterTwo ) {
        isPalindrome=false;
        break;
      }
      counter++;
    }
  }
  console.log(isPalindrome);
  if (isPalindrome===true) {
    alert(stringToCheck + " is a palindrome!");
  } else {
    alert("Sorry, " + stringToCheck + " is not a palindrome.");
  }
}

function Problem3(){
  var chosenArray = Problem3Menu();
  chosenArray.sort();
  var doesArrayIncrement = Problem3DoesListIncrement(chosenArray);
  alert(doesArrayIncrement);
}

function Problem3DoesListIncrement(chosenArray){
  var doesArrayIncrement = true;
  for (let i = 0; i < chosenArray.length; i++) {
    console.log(chosenArray[i]);
    if (i < chosenArray.length - 1) {
      if(chosenArray[i] + 1 !== (chosenArray[i+1])){
        doesArrayIncrement = false;
      }
    }
  }
  return doesArrayIncrement; 
}

function Problem3Menu(){
  var menuString = "Select an array to test:";
  menuString = menuString + "\n 1) [ 5, 7, 3, 8, 6 ]";
  menuString = menuString + "\n 2) [ 17, 15, 20, 19, 21, 16, 18 ]";
  var stringToCheck = prompt(menuString);
  var arrayNumberOne = [5, 7, 3, 8, 6];
  var arrayNumberTwo = [ 17, 15, 20, 19, 21, 16, 18 ];
  var selectedArray = [];
  var invalidInput = true;
  while (invalidInput) {
    switch (stringToCheck) {
      case "1":
        selectedArray = arrayNumberOne;
        invalidInput = false;
        break;
      case "2":
        selectedArray = arrayNumberTwo;
        invalidInput = false;
        break; 
      default:
        prompt("Please select 1 or 2!")
        break;
    }
  }
  return selectedArray;
}

function Problem4(){
  alert("Our array is [7, 9, -3, -32, 107, -1, 36, 95, -14, -99, 21]\nWe will return a count of the positive and sum of the negative.");
  var ourArray = [7, 9, -3, -32, 107, -1, 36, 95, -14, -99, 21];
  var displayArray = Problem4Solution(ourArray);
  Problem4Display(displayArray);
}

function Problem4Solution(inputArray){
  var positiveCount = 0;
  var negativeSum = 0;
  var returnArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i]>0) {
      positiveCount =  positiveCount + 1;
    } 
    else if (inputArray[i]<0) {
      negativeSum = negativeSum + inputArray[i];
    }
    ;
  }
  returnArray[0]=positiveCount;
  returnArray[1]=negativeSum;
  return returnArray;
}

function Problem4Display(inputArray){
  var displayText = "The count of the positive numbers is: " + inputArray[0];
  displayText = displayText + "\n The sum of the negative numbers is: " + inputArray[1];
  alert(displayText);
}

function Problem5(){
  var startingString = "3 9 0 1 4 8 10 2";
  var theSolution = GetSolution(startingString);
  alert(theSolution);
}

function GetSolution(inputString){
  var solutionString;
  var solutionArray = inputString.split(" ");
  var lowestNumber = Math.min.apply(Math, solutionArray);
  var highestNumber = Math.max.apply(Math, solutionArray);
  solutionString = lowestNumber + " " + highestNumber;
  return solutionString;
}

function Problem6(){
  //var emailToTest = "mike1@gmail.com";
  //var emailToTest = "gmail.com";
  var emailToTest = "t@t.tt";
  var validationResponse = ValidateEmail(emailToTest);
  alert("Is " + emailToTest + "a valid email? --> " + validationResponse);
}

function ValidateEmail(inputString){
  var indexOfAt;
  var indexOfDot;
  var isEmailValid = false;
  if (inputString.includes("@")) {
    indexOfAt = inputString.indexOf("@");
    if (inputString.includes(".")) {
      indexOfDot = inputString.indexOf(".");
      if (indexOfAt > 0 && indexOfAt < indexOfDot) {
        if ((inputString.length - (indexOfDot + 1)) >= 2) {
          isEmailValid = true;
        }
      }
    }
  }
  return isEmailValid;
}

function Problem7(){
  //var stringToTest = "abc";
  var stringToTest = "coding is fun";
  alert(GetAlphabetPosition(stringToTest));
}

function GetAlphabetPosition(inputString){
  var stringArray = inputString.split('');
  var solutionArray = [];
  var solutionString;
  stringArray = stringArray.filter(e => String(e).trim());
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v","w","x","y","z"];
  for (let i = 0; i < stringArray.length; i++) {
    var foundValue;
    for (let j = 0; j < alphabet.length; j++) {
      if (stringArray[i]===alphabet[j]) {
        foundValue = j+1;
        solutionArray.push(foundValue);
        break;
      }
    }
  }
  solutionString = solutionArray.join(" ");
  return solutionString;
}

function Problem8(){
  var currentLock = "3893";
  var targetLock = "5296";
  var solution = GetNumberOfTurns(currentLock,targetLock);
  alert(solution);
}

function GetNumberOfTurns(currentLock,targetLock){
  var currentLockArray = currentLock.split('').map(function(item){
    return parseInt(item, 10);
  });
  var targetLockArray = targetLock.split('').map(function(item){
    return parseInt(item, 10);
  });
  var totalTurns = 0;
  for (let i = 0; i < currentLockArray.length; i++) {
    var turnUpSolution = 0;
    var turnDownSolution = 0;
    if (currentLockArray[i]<targetLockArray[i]) {
      turnUpSolution = targetLockArray[i]-currentLockArray[i];
      turnDownSolution = ((10 - targetLockArray[i]) + currentLockArray[i]);
    }  else {
      turnUpSolution = ((10 - currentLockArray[i]) + targetLockArray[i]);
      turnDownSolution = targetLockArray[i]-currentLockArray[i];
      if (turnDownSolution<0) {
        turnDownSolution = turnDownSolution * -1;
      }
    }
    if (turnUpSolution < turnDownSolution) {
      totalTurns = totalTurns + turnUpSolution;
    } else {
      totalTurns = totalTurns + turnDownSolution;
    }
    
  }
  return totalTurns;
}

function Problem9(){
  var numberToTest = "683";
  var squareSumEqualsOne = false;
  var solution = GetSumOfSquares(numberToTest);
  while (squareSumEqualsOne ==false) {
    
    if (solution==1) {
      squareSumEqualsOne = true;
      alert(numberToTest + " is a happy number.");
    } else {
      solution=GetSumOfSquares(solution);
    }
  }
}

function GetSumOfSquares(inputNumber){
  var arrayOfNumber = Array.from(String(inputNumber), Number);
  var sumOfSquares = 0;
  for (let i = 0; i < arrayOfNumber.length; i++) {
    console.log(arrayOfNumber[i]);
    sumOfSquares += (arrayOfNumber[i]*arrayOfNumber[i]);
  }
  console.log(sumOfSquares);
  return sumOfSquares;
}

function Problem10(){
  var initialNumber = 17;
  var reversedNumber = GetReverse(initialNumber);
  var reciprocal = GetReciprocal(reversedNumber);
  alert("The reverse reciprocal of " + initialNumber + " = " + reciprocal);
}

function GetReciprocal(inputNumber){
  var theAnswer =  (1/inputNumber)
  return theAnswer;
}

function GetReverse(initialNumber){
  var intitalArray =  Array.from(String(initialNumber), Number);
  var reversedArray = [];
  for (let i = 0; i < intitalArray.length; i++) {
    reversedArray[i] = intitalArray[(intitalArray.length - 1) - i];
    console.log(reversedArray[i]);
  }
  var arrayToString =  Number(reversedArray.join(''));
  return arrayToString;
}

function Problem11(){
  //var stringToTest = "hello";
  //var stringToTest = "HELLO";
  //var stringToTest = "Hello";
  var stringToTest = "ketcHUp";
  var stringIsSameCase = SameCase(stringToTest);
  alert("The string " + stringToTest + " is all the same case: " + stringIsSameCase);
}

function SameCase(inputString){
  var arrayOfString = inputString.split('');
  var firstCharacterIsUpper = IsFirstCharacterUpper(inputString);
  var stringIsSameCase;
  for (let i = 0; i < arrayOfString.length; i++) {
    if (firstCharacterIsUpper == true) {
      if (arrayOfString[i].toUpperCase() == arrayOfString[i]) {
        stringIsSameCase = true;
        continue;
      }
      else{
        stringIsSameCase = false;
        return  stringIsSameCase;
      }
    }
    else{
      if (arrayOfString[i].toLowerCase() == arrayOfString[i]) {
        stringIsSameCase = true;
        continue;
      }
      else{
        stringIsSameCase = false;
        return  stringIsSameCase;
      }
    }
  }
  return  stringIsSameCase;
}

function IsFirstCharacterUpper(inputString){
  var arrayOfString = inputString.split('');
  var firstCharacterIsUpper = false;
  for (let i = 0; i < 1; i++) {
    if (arrayOfString[i] == arrayOfString[i].toUpperCase()) {
      firstCharacterIsUpper = true;
    }
    if (arrayOfString[i] == arrayOfString[i].toLowerCase()) {
      firstCharacterIsUpper = false;
    }
    return firstCharacterIsUpper;
  }
}

function Problem12(){
  var firstNumber = 25; // This should return true
  var secondNumber = 21;
  var thirdNumber = 125;
  // var firstNumber = 55;  // This should return true
  // var secondNumber = 226;
  // var thirdNumber = 5190;
  // var firstNumber = 12;  // This should return false
  // var secondNumber = 215;
  // var thirdNumber = 2142;
  var isItLastDigitUltimate = LastDigitUltimate(firstNumber, secondNumber, thirdNumber);
  alert(isItLastDigitUltimate);
}

function LastDigitUltimate(firstNumber, secondNumber, thirdNumber){
  return ((GetLastDigit(GetLastDigit(firstNumber)*GetLastDigit(secondNumber))) == GetLastDigit(thirdNumber)) ? true : false;
}

function GetLastDigit(inputNumber){
  return inputNumber.toString().split('').pop();
}
function Problem13(){
  var originalString = "javascript is cool";
  alert(GetHackerSpeak(originalString));
}

function GetHackerSpeak(inputString){
  var stringArray = inputString.split('');
  var replacementArray = [['a','4'], ['e','3'], ['i','1'], ['o','0'], ['s','5']];
  for (let i = 0; i < replacementArray.length; i++) {
    for (let j = 0; j < stringArray.length; j++) {
      if (stringArray[j] == replacementArray[i][0]) {
        stringArray[j] = replacementArray[i][1];
      }
    }
  }
  return stringArray.join('');
}

function Problem14(){
  var originalString = "String";
  alert(RepeatLettersOfString(originalString));
}
function RepeatLettersOfString(inputString){
  var stringArray = inputString.split('');
  var doubleStringArray = [];
  for (let i = 0; i < stringArray.length; i++) {
    console.log(stringArray[i]);
    for (let j = 0; j < 2; j++) {
      doubleStringArray.push(stringArray[i]);
    }
  }
  var repeatedString = doubleStringArray.join('');
  return repeatedString;
}

function Problem15(){
  var originalString = "hello";
  alert(RemoveFirstLast(originalString));
  var originalString = "maybe";
  alert(RemoveFirstLast(originalString));
  var originalString = "benefit";
  alert(RemoveFirstLast(originalString));
  var originalString = "a";
  alert(RemoveFirstLast(originalString));
}

function RemoveFirstLast(inputString){
  var stringArray = inputString.split('');
  var newArray = [];
  if (stringArray.length<=2) {
    return inputString;
  } else {
    for (let i = 1; i < stringArray.length - 1; i++) {
      newArray.push(stringArray[i]);
    }
    return newArray.join('');
  }
}
function Problem16(){
  var originalString = "loop";
  alert(AreThereDoubles(originalString));
  originalString = "yummy";
  alert(AreThereDoubles(originalString));
  originalString = "orange";
  alert(AreThereDoubles(originalString));
  originalString = "munchkin";
  alert(AreThereDoubles(originalString));
}

function AreThereDoubles(inputString){
  var stringArray = inputString.split('');
  var previousChar = stringArray[0];
  for (let i = 0; i < stringArray.length; i++) {
    console.log(stringArray[i]);
    if (i!=0) {
      if (stringArray[i] == previousChar) {
        return true;
      }else{
      previousChar = stringArray[i];
      }
    }
  }
  return false;
}
function Problem17(){
  console.log(GetFactorial(5));
  alert(GetFactorial(5));
  console.log(GetFactorial(3));
  alert(GetFactorial(3));
  console.log(GetFactorial(2));
  alert(GetFactorial(2));
}

function GetFactorial(inputNumber){
  if (inputNumber === 1) {
    return 1;
  } else {
    return inputNumber * GetFactorial(inputNumber-1);
  }
}

function Problem18(){
  var stringOne = "mice";
  var nTimes = 5;
  console.log(RepeatNTimes(stringOne, nTimes));
  alert(RepeatNTimes(stringOne, nTimes));
  var stringTwo = "hello";
  nTimes = 3;
  console.log(RepeatNTimes(stringTwo, nTimes));
  alert(RepeatNTimes(stringTwo, nTimes));
  var stringThree = "stop";
  nTimes = 1;
  console.log(RepeatNTimes(stringThree, nTimes));
  alert(RepeatNTimes(stringThree, nTimes));
}

function RepeatNTimes(inputString, inputNumber){
  var stringAsArray = inputString.split('');
  var returnArray = [];
  for (let i = 0; i < stringAsArray.length; i++) {
    for (let j = 0; j < inputNumber; j++) {
      returnArray.push(stringAsArray[i]);
    }
  }
  return returnArray.join('');
}

function Problem19(){
  var ArrayOne = ["Tomato", "Potato", "Pair"];
  var ArrayTwo = ["Kangaroo", "Bear", "Fox"];
  var ArrayThree = ["Ryan", "Kieran", "Jason", "Matt"];
  ShowAnswer(IsFourLetters(ArrayOne));
  ShowAnswer(IsFourLetters(ArrayTwo));
  ShowAnswer(IsFourLetters(ArrayThree));
}

function IsFourLetters(inputArray){
  var returnArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    var stringAsList = inputArray[i].split('');
    if (stringAsList.length == 4) {
      returnArray.push(inputArray[i]);
    }
  }
  return returnArray;
}
function ShowAnswer(inputArray){
  for (let i = 0; i < inputArray.length; i++) {
    console.log(inputArray[i]);
    alert(inputArray.toString());
  }
}
function Problem20(){
  var arrayOne = [1, 2, 3, 4, 5, 6, 7, 8];
  ShowArray(NoOdds(arrayOne));
  var arrayTwo = [43, 65, 23, 89, 53, 9, 6];
  ShowArray(NoOdds(arrayTwo));
  var arrayThree = [718, 991, 449, 644, 380, 440];
  ShowArray(NoOdds(arrayThree));
}

function NoOdds(inputArray){
  return inputArray.filter(e => e % 2 == 0);;
}

function ShowArray(inputArray){
  for (let i = 0; i < inputArray.length; i++) {
    console.log(inputArray[i]);
  }
  alert(inputArray.toString());
}

function Problem21(){
  var arrayOne = [[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]];
  alert(FindLargest(arrayOne).join());
  var arrayTwo = [[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]];
  alert(FindLargest(arrayTwo).join());
  var arrayThree = [[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]];
  alert(FindLargest(arrayThree).join());
}
function FindLargest(inputArray){
  var solutionArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    solutionArray.push(getMaxOfArray(inputArray[i]))
  }
  return solutionArray;
}

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
function Problem22(){
  var stringOne = "Happy Birthday";
  alert(ReverseCase(stringOne));
  var stringTwo = "MANY THANKS";
  alert(ReverseCase(stringTwo));
  var stringThree = "sPoNtAnEoUs";
  alert(ReverseCase(stringThree));
}
function ReverseCase(inputString){
  var stringAsArray = inputString.split('');
  var solutionArray = [];
  for (let i = 0; i < stringAsArray.length; i++) {
    if (stringAsArray[i].toUpperCase()==stringAsArray[i]) {
      solutionArray.push(stringAsArray[i].toLowerCase());
    } else {
      solutionArray.push(stringAsArray[i].toUpperCase());
    }
  }
  return solutionArray.join('');
}
function Problem23(){
  var theAnswer = ArrayOfMultiples(7,5);
  alert('[' + theAnswer.join(', ') + ']');
  theAnswer = ArrayOfMultiples(12,10);
  alert('[' + theAnswer.join(', ') + ']');
  theAnswer = ArrayOfMultiples(17,6);
  alert('[' + theAnswer.join(', ') + ']');
}
function ArrayOfMultiples(num, length){
  var solutionArray = [];
  for (let i = 0; i < length; i++) {
    solutionArray.push(num*(i+1));
  }
  return solutionArray;
}

//Array of Multiples https://edabit.com/challenge/2QvnWexKoLfcJkSsc
//Create a function that takes two numbers as arguments(num, length) and returns an array of multiples of num up to length.
//Examples
//ArrayOfMultiples(7, 5) --> [7, 14, 21, 28, 35]
//ArrayOfMultiples(12, 10) --> [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
//ArrayOfMultiples(17, 6) --> [17, 34, 51, 68, 85, 102]
//Notes
//Notice that num is also included in the returned array.
// Steps
// Create ArrayOfMultiples function that takes in (num, length)
// Create a solutionArray variable = []
// loop through length number of times
// push the number onto the solutionArray and multiply it by (i+1)
// return solution Array

//Reverse the Case https://edabit.com/challenge/99oN5igrbXddAjHEL
//Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.
//Examples
//ReverseCase('Happy Birthday') --> 'hAPPY bIRTHDAY'
//ReverseCase('MANY THANKS') --> 'many thanks'
//ReverseCase('sPoNtAnEoUs') --> 'SpOnTaNeOuS'
// Steps
// create string originalString variable
// create ReverseCase method which takes an inputString
// turn the string into a List<char> stringAsList 
// Create a List<char> solutionList
// Loop through the string and check to see if ToUpper method of the stringAsList[i] is equal to stringAsList[i] THEN...
// ToLower the stringAsList[i] add the char to solutionList
// ELSE you would want to save the stringAsList[i] as ToUpper
// return the list as a string with  return string.Join("", solutionList);


//Find the Largest Numbers in a Group of Arrays https://edabit.com/challenge/nermqxzovZbfFBC9X
//Create a function that takes an array of arrays with numbers.Return a new(single) array with the largest numbers of each.
//Examples
//FindLargest([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) --> [7, 90, 2]
//FindLargest([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]) --> [-34, -2, 7]
//FindLargest([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]) --> [0.7634, 9.32, 9]
//Notes
//Watch out for negative numbers.
// Steps
// create jagged array originalArray
// create FindLargest function which takes in an inputArray
// create a solutionArray variable
// loop through the inputArray and find the largest number in each array
// by using a function that gets the Max of Array
// function getMaxOfArray(numArray) {
//   return Math.max.apply(null, numArray);
// }
// Add these numbers to solutionArray.push(largest value);
// return solutionArray
// alert(solutionArray.join());

	//Eliminate Odd Numbers within an Array https://edabit.com/challenge/HkKNhhdfEGwxm9Fq6
	//Create a function that takes an array of numbers and returns only the even values.
	//Examples
	//NoOdds([1, 2, 3, 4, 5, 6, 7, 8]) --> [2, 4, 6, 8]
	//NoOdds([43, 65, 23, 89, 53, 9, 6]) --> [6]
	//NoOdds([718, 991, 449, 644, 380, 440]) --> [718, 644, 380, 440]
	//Notes
	//Return all even numbers in the order they were given.
  //All test cases contain valid numbers ranging from 1 to 3000.
  // Steps
  // create an array originalArray = [1, 2, 3, 4, 5, 6, 7, 8]
  // create a function NoOdds which is passed in originalArray
  // create an array returnArray
  // filter the array for only numbers that are number %2 == 0;
  // return the returnArray
  

// Return the Four Letter Strings https: edabit.com/challenge/W4x4o2M7ny6Cqkfhn
// Create a function that takes an array of strings and returns the words that are exactly four letters.
// Examples
// IsFourLetters(["Tomato", "Potato", "Pair"]) -> ["Pair"]
// IsFourLetters(["Kangaroo", "Bear", "Fox"]) ->["Bear"]
// IsFourLetters(["Ryan", "Kieran", "Jason", "Matt"]) -> ["Ryan", "Matt"]
// Notes
// You can expect valid strings for all test cases.
// Steps
// 

//Repeating Letters N Times https://edabit.com/challenge/Lmhmtj3QZw9cF5Zew
//Create a function that repeats each character in a string n times.
//Examples
//Repeat("mice", 5) ➞ "mmmmmiiiiiccccceeeee"
//Repeat("hello", 3) ➞ "hhheeellllllooo"
//Repeat("stop", 1) ➞ "stop"
// Steps
// create originalString variable
// create nTimes variable
// create RepeatNTimes function that takes in originalString, nTimes and returns returnString
// create a stringAsArray variable and turn the input string into an array
// create an empty array returnArray
// create a variable returnString
// create an i loop that runs the length of stringAsArray
// create a j loop that runs inputNumber of times and adds the element stringAsArray[i] to the returnArray
// turn the returnArray into a string
// return string




// Recursion & Factorials https://edabit.com/challenge/39Gcue6NXfLigSN6k
// Create a function that gives the factorial of an integer
// Steps
// Create a ourInteger variable
// Create a function that takes in an integer inputInteger and returns an integer theFactorial
// Take the number and check to see if the number is not equal to 1
// If it is not, the multiple it by itself -1 and send it to the GetFactorial function to check to see if itself -1 is equal to one.
// If it is, then return the number
// Challenge 17: Recursion & Factorials
// Create a recursive function that gives the factorial of an integer.
// Examples
// GetFactorial(5) --> 120
// GetFactorial(3) --> 3
// GetFactorial(2) --> 2

// 
// Double Letters
// Create a function that takes a word and returns true if the word has two consecutive identical letters.
// Examples
// DoubleLetters("loop") --> true
// DoubleLetters("yummy") --> true
// DoubleLetters("orange") --> false
// DoubleLetters("munchkin") --> false

// Steps: Remove the First and Last Characters
// take the inputString and turn it into an Array
// this array is eqaul to stringArray
// create a variable called newArray which is eqaul to []
// loop through the stringArray from 1 to stringArray.length - 1
// Add the element to the newArray which would look like newArray.push(stringArray[i]);
// Turn this array into a string
// return this string;
//Remove the First and Last Characters
//Create a function that removes the first and last characters from a string.
//Examples
//RemoveFirstLast("hello") ➞ "ell"
//RemoveFirstLast("maybe") ➞ "ayb"
//RemoveFirstLast("benefit") ➞ "enefi"
//RemoveFirstLast("a") ➞ "a"
//Notes
//If the string is 2 or fewer characters long, return the string itself(See example #4).


// Repeating Letters https://edabit.com/challenge/fKZHLzmR8anBrxgNt
// Create a function that takes a string and returns a string in which each character is repeated once.

// Examples
// DoubleChar("String") ➞ "SSttrriinngg"

// DoubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"

// DoubleChar("1234!_ ") ➞ "11223344!!__  "
// Notes
// All test cases contain valid strings. Don't worry about spaces, special characters or numbers. They're all considered valid characters.


// Steps
// Create GetHackerSpeak function that takes in a string and returns a string
// Create a variable that is equal to the string being made into an array called stringArray
// Create a variable replacementArray which is equal to the characters needing to be replaced and the characters that will replace them.
// Loop through the replacementArray and loop through the stringArray and if the element in stringArray is equal to first element of the replacementArray then replace
// Take this array and turn it into a string and return this value

//Problem13: Hacker Speak https://edabit.com/challenge/7nzfry4P3WrrL7t38
// Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
// Examples
// HackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
// HackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
// HackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"
// Notes
// In order to work properly, the function should replace all "a"s with 4, "e"s with 3, "i"s with 1, "o"s with 0, and "s"s with 5.



//Steps for Problem12
// Create variables for 3 numbers firstNumber, secondNumber, thirdNumber
// Create function for LastDigitUlitmate and pass in three variables
// Create helper function for GetLastDigit
// If the last digit of the product of the firstNumber and the secondNumber is equal to the last digit of the thirdNumber.
// If GetLastDigit(GetLastDigit(firstNumber) * GetLastDigit(secondNumber)) is equal to GetLastDigt(thirdNumber)
// then return true
// else return false
//

//Last Digit Ultimate https://edabit.com/challenge/gFiX2TwoCKi6NZz5H
//Your job is to create a function that takes 3 numbers: a, b, c and returns true if the last digit
//    of(the last digit of a* the last digit of b) = the last digit of c.Check examples for explanation.
//last_dig(25, 21, 125) ➞ true
//// The last digit of 25 is 5, the last digit of 21 is 1, and the last
//// digit of 125 is 5, and the last digit of 5*1 = 5, which is equal
//// to the last digit of 125 (5).

//last_dig(55, 226, 5190) ➞ true
//// The last digit of 55 is 5, the last digit of 226 is 6, and the last
//// digit of 5190 is 0, and the last digit of 5*6 = 30 is 0, which is
//// equal to the last digit of 5190 (0).

//last_dig(12, 215, 2142) ➞ false
//// The last digit of 12 is 2, the last digit of 215 is 5, and the last
//// digit of 2142 is 2, and the last digit of 2*5 = 10 is 0, which is
//// not equal to the last digit of 2142 (2).

// Check if the Same Case
// Create a function that returns true if an input string contains only uppercase or only lowercase letters.
// Examples
// SameCase("hello") --> true
// SameCase("HELLO") --> true
// SameCase("Hello") --> false
// SameCase("ketcHUp") --> false
// Steps
// Create a variable solutionAnswer which is equal to the result of the SameCase function
// The SameCase function takes in a string and returns true or false depending on whether all characters are the same case
// Create a variable arrayOfString which is made by...
// Turing the string into an Array
// Create a variable which holds the value of whether or not the first character in the array is UpperCase or not
// Let's call this checkForUppers
// Create a variable called stringIsSameCase which is equal to true by default.
// Loop through the array and if the next iteration is not equal to the value of checkForUppers
// then return false;

// create a variable called initialNumber = 17
// create a variable called reversedNumber which is equal to the GetReverse function being passed initialNumber
//   GetReverse functions, needs to turn the number into an Array which is equal to initialArray
//   Create a reverseArray and set it equal to reverse equivalent of initialArray
//   Turn the initialArray into a String and pass it into a variable
//   create a variable called 
//   

// 10.	Given a number, return the reciprocal of the reverse of the original number, as a double. 
// a.	Use case: If given 17, return 0.01408 (1/71)

// Create variable numberToTest= "19"
// Create function GetSumOfSquares which takes in an number
// Create an array from the number
// Get the sum of each of the array's squared value
// Test to see if this value equals 1
// If it does, then this number is happy
// Else it needs to be turned into an array and the process needs to be repeated.

// 9.	Happy Numbers
// a.	A happy number is a number defined by the following process: starting with any positive integer, replace the number by 
// the sum of the squares of its digits, and repeat the process until the number equals 1. 
// An example of a happy number is 19




// Problem7 6/3/2020 - total time to solve 37 minutes
// Create a variable for stringToTest
// Create function GetAlphabetPosition which takes in a string
// Turn string into an Array with Javascript String split method var res = str.split(" ");
// filter through array and remove spaces
// Create alphabet Array with lowercase letters
// If the the index value of inputString matches the index value of the alphabet array the value = the index position +1
// Create solutionString variable which equals
// turn the array into a string with nameOfTheArray.join();
// return the solutionString/




// Problem6 5/29/2020 - total time to solve 31 minutes
// Create a string variable for emailToTest xxxxxxxxxxxxxxxxxxxxxxxx
// Create a variable for index position of @ - indexOfAt xxxxxxxxxxxxxxxxxxxxxxxxxx
// Create a variable for index position of . - indexOfDot xxxxxxxxxxxxxxxxxxxxxxxxx
// Create a variable for isEmailValid - set it to false xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Create a function that takes the string in and returns true or false depending on email vailidation IsEmailVaild xxxxxxxxxxxxxxxxxxxxxxx
// Check to see if string contains @ xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//   If it does then record the index position of At xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//     Check to see if string contains . xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//       If it does then record the index position of . xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//         Check to make sure the indexOfAt is less than the indexOfDot xxxxxxxxxxxxxxxxxxxxxxxxxxxx
//           Check to make sure the indexOfAt is greater than 0 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//             Check to make sure the indexOfAt minus indexOfDot is greater than 1 xxxxxxxxxxxxxxxxxx
//               Check to make sure the emailToTest string length - (indexOfDot+1) is greater than 2
//   Else return false

















// Problem 5
//Create a method that accepts a string of space separated numbers and returns the highest and lowest number as a string
//Use case: “3 9 0 1 4 8 10 2”  “0 10”
//Create a string variable = “3 9 0 1 4 8 10 2”
//Create a solutionArray variable
//Create a lowestNumber variable
//Create a highestNumber variable
//Create a solutionString variable
//Split the string and turn it into the solutionArray.
//Find the lowest and highest numbers.
//Create the solutionString with the lowest and highest numbers
//return the solutionString