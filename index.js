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
  //alert("The first character is upper case: " + firstCharacterIsUpper);
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