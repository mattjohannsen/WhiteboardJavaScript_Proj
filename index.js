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