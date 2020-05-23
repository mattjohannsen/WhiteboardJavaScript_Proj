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