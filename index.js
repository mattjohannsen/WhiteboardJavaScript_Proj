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
    alert("This is an even string")
    let counter=1;
    for (let i = 0; i < (stringToCheck.length/2); i++) {
      let characterOne = stringToCheck[(stringToCheck.length/2)-counter];
      let characterTwo = stringToCheck[(stringToCheck.length/2)+i];
      console.log(characterOne + " " + characterTwo);
      if (characterOne === characterTwo ) {
        console.log("They match")
      } else {
        console.log("They don't match")
        isPalindrome=false;
        break;
      }
      counter++;
    }
  } else {
    alert("This is an odd string")
    let counter=1;
    let middleIndex = Math.floor(stringToCheck.length/2);
    console.log(middleIndex);
    for (let i = 0; i < middleIndex; i++) {
      let characterOne = stringToCheck[middleIndex - counter];
      let characterTwo = stringToCheck[middleIndex + counter];
      console.log(characterOne + " " + characterTwo);
      if (characterOne === characterTwo ) {
        console.log("They match")
      } else {
        console.log("They don't match")
        isPalindrome=false;
        break;
      }
      counter++;
    }
  }
  console.log(isPalindrome);
}