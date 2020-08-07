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
function Problem24(){
  var originalNumber = 100;
  alert(CountOnes(originalNumber));
}
function CountOnes(inputNumber){
  var binaryCount = 0;
  var binaryArray = GetBinary(inputNumber).split('');
  for (let i = 0; i < binaryArray.length; i++) {
    if ( binaryArray[i] == '1') {
      binaryCount++;
    }
  }
  return binaryCount;
}
function GetBinary(inputNumber){
  return (inputNumber >>> 0).toString(2);
}

function Problem25(){
  var originalChar = "A";
  var theAnswer = CounterpartCharCode(originalChar);
  alert("'" + originalChar + "' char code is: " + originalChar.charCodeAt(0) + "\n CounterpartCharCode('" + originalChar + "') --> " + theAnswer);
  var originalChar = "a";
  theAnswer = CounterpartCharCode(originalChar);
  alert("'" + originalChar + "' char code is: " + originalChar.charCodeAt(0) + "\n CounterpartCharCode('" + originalChar + "') --> " + theAnswer);
  var originalChar = "5";
  theAnswer = CounterpartCharCode(originalChar);
  alert("'" + originalChar + "' char code is: " + originalChar.charCodeAt(0) + "\n CounterpartCharCode('" + originalChar + "') --> " + theAnswer);
}

function CounterpartCharCode(inputChar){
  var counterpartChar;
  if (inputChar == inputChar.toUpperCase()) {
    counterpartChar = inputChar.toLowerCase();
  } else if (inputChar == inputChar.toLowerCase()) {
    counterpartChar = inputChar.toUpperCase();
  } else {
    counterpartChar = inputChar;
  }
  return counterpartChar.charCodeAt(0);
}

function Problem26(){
  var numberToTest = 838;
  var theAnswer =IsPalindrome(numberToTest);
  alert("Is " + numberToTest + " a palindrome? " + theAnswer);
  numberToTest = 4433;
  theAnswer =IsPalindrome(numberToTest);
  alert("Is " + numberToTest + " a palindrome? " + theAnswer);
  numberToTest = 443344;
  theAnswer =IsPalindrome(numberToTest);
  alert("Is " + numberToTest + " a palindrome? " + theAnswer);
}
function IsPalindrome(inputNumber){
  var isNumberPalindrome = true;
  var numberAsArray = inputNumber.toString().split('') ;
  var startingPoint = Math.round(numberAsArray.length/2);
  var oddVsEven = (numberAsArray.length % 2 == 0) ? 1 : 2;
  for (let i = 0; i < startingPoint; i++) {
    if (numberAsArray[startingPoint - oddVsEven - i] == numberAsArray[startingPoint + i]) {
      continue;
    } else {
      return false;
    }
  }
  return isNumberPalindrome;
}
function Problem27(){
  var originalString = "test";
  var theAnswer = GetMiddle(originalString);
  alert("Get the middle from " + originalString + " --> " + theAnswer);
  originalString = "testing";
  theAnswer = GetMiddle(originalString);
  alert("Get the middle from " + originalString + " --> " + theAnswer);
  originalString = "middle";
  theAnswer = GetMiddle(originalString);
  alert("Get the middle from " + originalString + " --> " + theAnswer);
  originalString = "A";
  theAnswer = GetMiddle(originalString);
  alert("Get the middle from " + originalString + " --> " + theAnswer);
}
function GetMiddle(inputString){
  var stringAsArray = inputString.split('');
  var startingPoint = Math.round(stringAsArray.length/2);
  var solutionArray = [];
  if (stringAsArray.length % 2 == 0) {
    solutionArray.push(stringAsArray[startingPoint-1]);
    solutionArray.push(stringAsArray[startingPoint]);
  } else {
    solutionArray.push(stringAsArray[startingPoint-1]);
  }
  return solutionArray.join('');
}
function Problem28(){
  var numberToTest = 31;
  var theAnswer = isPrime(numberToTest);
  alert("Is " + numberToTest + " a prime number? --> " + theAnswer);
  numberToTest = 18;
  theAnswer = isPrime(numberToTest);
  alert("Is " + numberToTest + " a prime number? --> " + theAnswer);
  numberToTest = 11;
  theAnswer = isPrime(numberToTest);
  alert("Is " + numberToTest + " a prime number? --> " + theAnswer);
}
function isPrime(inputNumber){
  var isNumberPrime = true;
  for (let i = 2; i < inputNumber/2; i++) {
    if (inputNumber % i == 0) {
      return false;
    } else {
      continue;
    }
  }
  return isNumberPrime;
}
function Problem29(){
  var originalArray = [19, 5, 42, 2, 77];
  var theAnswer = SumSmallest(originalArray);
  alert(theAnswer);
  originalArray = [10, 343445353, 3453445, 3453545353453];
  theAnswer = SumSmallest(originalArray);
  alert(theAnswer);
  originalArray = [2, 9, 6, -1];
  theAnswer = SumSmallest(originalArray);
  alert(theAnswer);
  originalArray = [879, 953, 694, -847, 342, 221, -91, -723, 791, -587];
  theAnswer = SumSmallest(originalArray);
  alert(theAnswer);
  originalArray = [3683, 2902, 3951, -475, 1617, -2385];
  theAnswer = SumSmallest(originalArray);
  alert(theAnswer);
}
function SumSmallest(inputArray){
  var sortedArray = inputArray.sort((a,b) => a-b);
  var startingPoint = GetStartingPoint(sortedArray);
  return (sortedArray[startingPoint] + sortedArray[startingPoint+1]);
  
}
function GetStartingPoint(inputArray){
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i]>0) {
      return i;
    }
  }
}
function Problem30(){
  alert("ReverseAndNot(123) --> " + ReverseAndNot(123));
  alert("ReverseAndNot(152) --> " + ReverseAndNot(152));
  alert("ReverseAndNot(123456789) --> " + ReverseAndNot(123456789));
}
function ReverseAndNot(inputNumber){
  return (inputNumber.toString().split('')).reverse().concat(inputNumber.toString().split('')).join('');
}
function Problem31(){
  alert(PalindromeTimestamps(2, 12, 22, 4, 35, 10));
  alert(PalindromeTimestamps(6, 33, 15, 9, 55, 10));
}
function PalindromeTimestamps(hours1, minutes1, seconds1, hours2, minutes2, seconds2){
  var time1String = hours1.toString() + ":" + minutes1.toString() + ":" + seconds1.toString();
  var time2String = hours2.toString() + ":" + minutes2.toString() + ":" + seconds2.toString();
  var time1Array = time1String.split(":");
  var time2Array =time2String.split(":");
  var timeSpan1=new Date(parseInt("2001",10),(parseInt("01",10))-1,parseInt("01",10),parseInt(time1Array[0],10),parseInt(time1Array[1],10),parseInt(time1Array[2],10));
  var timeSpan2=new Date(parseInt("2001",10),(parseInt("01",10))-1,parseInt("01",10),parseInt(time2Array[0],10),parseInt(time2Array[1],10),parseInt(time2Array[2],10));
  var palidromeCounter = 0;
  while (timeSpan1 < timeSpan2){
    var timeNumbersOnly = GetHoursString(timeSpan1) + GetMinutesString(timeSpan1) + GetSecondsString(timeSpan1);
      if (CheckForPalidrome(timeNumbersOnly))
      {
          palidromeCounter++;
      }
      timeSpan1.setSeconds( timeSpan1.getSeconds() + 1 );
  }
  return palidromeCounter;
}
function GetHoursString(inputTime){
  var hours = inputTime.getHours()
  if (hours <10) {
    if (hours == 0 || "") {
      hours = "00";
    }
    hours = "0" + hours.toString();
  }
  return hours;
}
function GetMinutesString(inputTime){
  var minutes = inputTime.getMinutes()
  if (minutes <10) {
    if (minutes == 0 || "") {
      minutes = "00";
    }
    minutes = "0" + minutes.toString();
  }
  return minutes;
}
function GetSecondsString(inputTime){
  var seconds = inputTime.getSeconds()
  if (seconds <10) {
    if (seconds == 0 || "") {
      seconds = "00";
    }
    seconds = "0" + seconds.toString();
  }
  return seconds;
}
function CheckForPalidrome(inputString){
  var reverseString = inputString.split('').reverse().join('');
  var isPalidrome = false;
  if (inputString == reverseString) {
    isPalidrome = true;
  }
  return isPalidrome;
}
function Problem32(){
  alert(PowerRanger(2, 49, 65));
  alert(PowerRanger(3, 1, 27));
  alert(PowerRanger(10, 1, 5));
  alert(PowerRanger(5, 31, 33));
  alert(PowerRanger(4, 250, 1300));
}
function PowerRanger(nthPower, firstNumber, secondNumber){
  let powerRangerCount = 0;
  let loopLength = GetSecondStartingPoint(nthPower, secondNumber) - GetFirstStartingPoint(nthPower, firstNumber);
  for (let i = 0; i <= loopLength; i++) {
    powerRangerCount++;
  }
  return powerRangerCount;
}
function GetFirstStartingPoint(nthPower, inputNumber){
  var numberNthRoot = Math.pow(inputNumber, 1/nthPower);
  if (numberNthRoot % 1 != 0) {
    numberNthRoot = Math.ceil(numberNthRoot);
  }
  return numberNthRoot;
}
function GetSecondStartingPoint(nthPower, inputNumber){
  var numberNthRoot = Math.pow(inputNumber, 1/nthPower);
  if (numberNthRoot % 1 != 0) {
    numberNthRoot = Math.floor(numberNthRoot);
  }
  return numberNthRoot;
}
function Problem33(){
  alert(ReversedBinaryInteger(10));
  alert(ReversedBinaryInteger(12));
  alert(ReversedBinaryInteger(25));
  alert(ReversedBinaryInteger(45));
}
function ReversedBinaryInteger(inputNumber){
  return parseInt(inputNumber.toString(2).split('').reverse().join(''), 2);
}
function Problem34(){
  alert(IsSmooth("Carlos swam masterfully."));
  alert(IsSmooth("Marta appreciated deep perpendicular right trapezoids"));
  alert(IsSmooth("Someone is outside the doorway"));
  alert(IsSmooth("She eats super righteously"));
}
function IsSmooth(inputString){
  var sentenceIsSmooth = true;
  var sentenceArray = MakeJaggedArray(inputString);
  for (let i = 0; i < sentenceArray.length - 1; i++) {
    if (GetLastLetter(sentenceArray[i]) != GetFirstLetter(sentenceArray[i + 1])) {
      return false;
    }
  }
  return sentenceIsSmooth;
}
function MakeJaggedArray(inputString){
  var stringAsArray = inputString.split(' ');
  var arrayWithWordsAsArrays = [];
  for (let i = 0; i < stringAsArray.length; i++) {
    arrayWithWordsAsArrays[i] = stringAsArray[i].split('');
  }
  return arrayWithWordsAsArrays;
}
function GetLastLetter(inputArray){
  return inputArray[inputArray.length - 1];
}
function GetFirstLetter(inputArray){
  return inputArray[0];
}
function Problem35(){
  alert(NextPrime(12));
  alert(NextPrime(29));
  alert(NextPrime(11));
}
function NextPrime(inputNumber){
  var lookingforNextPrime =  true;
  if (IsPrime(inputNumber)) {
    return inputNumber;
  } else  {
      
      while (lookingforNextPrime) {
        inputNumber++;
        if (IsPrime(inputNumber)) {
          lookingforNextPrime = false;
        }
      }
      return inputNumber;
  }
}
function IsPrime(inputNumber){
  var isNumberPrime = true;
  for (let i = 2; i < inputNumber/2; i++) {
    if (inputNumber%i == 0) {
      return false;
    }
    return isNumberPrime;
  }
}
function Problem36(){
  alert(RepeatCharNoOfTimes("A4B5C2"));
  alert(RepeatCharNoOfTimes("C2F1E5"));
  alert(RepeatCharNoOfTimes("T4S2V2"));
  alert(RepeatCharNoOfTimes("A1B2C3D4"));
}
function RepeatCharNoOfTimes(inputString){
  var solutionString = "";
  var stringAsArray = inputString.split('');
  for (let i = 0; i < stringAsArray.length; i+=2) {
    for (let j = 0; j < stringAsArray[i+1]; j++) {
      solutionString = solutionString + stringAsArray[i];
    }
  }
  return solutionString;
}
function Problem37(){
  alert(SockPairs("AA"));
  alert(SockPairs("ABABC"));
  alert(SockPairs("CABBACCC"));
}
function SockPairs(inputString){
  var sockPairs = 0;
  var stringAsArray = inputString.split('');
  var charactersInString = [];
  for (let i = 0; i < stringAsArray.length; i++) {
    if (charactersInString.includes(stringAsArray[i])) {
      continue;
    } else {
      charactersInString.push(stringAsArray[i]);
    }
  }
  var numberOfSocks = [];
  for (let i = 0; i < charactersInString.length; i++) {
    var count = inputString.split(charactersInString[i]).length-1;
    numberOfSocks.push(count);
  }
  for (let i = 0; i < charactersInString.length; i++) {
    if (numberOfSocks[i] == 1) {
      continue;
    } else if (numberOfSocks[i] % 2 == 0) {
      sockPairs += (numberOfSocks[i] / 2);
    } else {
      sockPairs += ((numberOfSocks[i] - 1) / 2);
    }
  }
  return sockPairs;
}
function Problem38(){
  alert(ConvertToHex("hello world"));
  alert(ConvertToHex("Big Boi"));
  alert(ConvertToHex("Marty Poppinson"));
}
function ConvertToHex(inputString){
  var stringAsArray = inputString.split('');
  var hexArray = [];
  for (let i = 0; i < stringAsArray.length; i++) {
    hexArray[i] = stringAsArray[i].charCodeAt(0).toString(16);
  }
  return hexArray.join(' ');
}
function Problem39(){
  alert(IsValidHexCode("#CD5C5C"));
  alert(IsValidHexCode("#EAECEE"));
  alert(IsValidHexCode("#eaecee"));
  alert(IsValidHexCode("#CD5C58C"));
  alert(IsValidHexCode("#CD5C58C"));
  alert(IsValidHexCode("#CD5C&C"));
  alert(IsValidHexCode("CD5C5C"));
}
function IsValidHexCode(inputString){
  var stringAsArray = inputString.split('');
  if (stringAsArray[0] != "#" || stringAsArray.length != 7) {
    return false;
  } else {
    for (let i = 1; i < stringAsArray.length; i++) {
      var theElement = stringAsArray[i];
      var charToCheck = theElement.charCodeAt(0);
      if (theElement.toLowerCase() != theElement.toUpperCase()) {
        if (charToCheck>=65 && charToCheck<=70 || charToCheck>=97 && charToCheck<=102){
          continue;
        } else {
          return false;
        }
      } else if (charToCheck >=48 && charToCheck<=58){
        continue;
      } else {
          return false;
      }
    }
  }
  return true;
}
function Problem40(){
  alert(AlphabetIndex("Wow, does that work?"));
  alert(AlphabetIndex("The river stole the gods."));
  alert(AlphabetIndex("We have a lot of rain in June."));
}
function AlphabetIndex(inputString){
  var stringAsArray = inputString.replace(/[^A-Za-z]/g, "").split('');
  var solutionArray = [];
  for (let i = 0; i < stringAsArray.length; i++) {
    solutionArray.push(parseInt(stringAsArray[i], 36) - 9);
  }
  return solutionArray.join(' ');
}
function Problem41(){
  alert(DuplicateCount("abcde"));
  alert(DuplicateCount("aabbcde"));
  alert(DuplicateCount("Indivisibilities"));
  alert(DuplicateCount("Aa"));
}
function DuplicateCount(inputString){
  var stringAsArray = inputString.split('');
  var repeatingChars = 0;
  var alreadyCounted = [];
  for (let i = 0; i < stringAsArray.length; i++) {
    if (!alreadyCounted.includes(stringAsArray[i])) {
      let numberToAdd = HowManyOccurances(stringAsArray[i], stringAsArray);
      repeatingChars += numberToAdd;
      alreadyCounted.push(stringAsArray[i]);
    } else {
      continue;
    }
  }
  return repeatingChars;
}
function HowManyOccurances(inputChar, inputArray){
  let timesRepeated = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] == inputChar) {
      timesRepeated++;
    }
  }
  return (timesRepeated > 1) ? 1 : 0;
}
function Problem42(){
  alert(AlmostPalindrome("abcdcbg"));
  alert(AlmostPalindrome("abccia"));
  alert(AlmostPalindrome("abcdaaa"));
  alert(AlmostPalindrome("1234312"));
}
function AlmostPalindrome(inputString){
  var stringAsArray = inputString.split('');
  var reverseArray = inputString.split('').reverse();
  let differences = 0;
  for (let i = 0; i < stringAsArray.length; i++) {
    if (stringAsArray[i]!=reverseArray[i]) {
      differences++
    }
  }
  return (differences == 2);
}
function Problem43(){
  alert("'" + LongestCommonEnding("multiplication", "ration") + "'");
  alert("'" + LongestCommonEnding("potent", "tent") + "'");
  alert("'" + LongestCommonEnding("skyscraper", "carnivore") + "'");
}
function LongestCommonEnding(stringOne, stringTwo){
  var arrayOne = stringOne.split('');
  var arrayTwo = stringTwo.split('');
  arrayOne.reverse();
  arrayTwo.reverse();
  var lastIndexTheSame = 0;
  var shortestArrayLength = Math.min(arrayOne.length, arrayTwo.length);
  for (let i = 0; i < shortestArrayLength; i++) {
    if (arrayOne[i] == arrayTwo[i] ) {
      if (shortestArrayLength == i+1)
      {
        lastIndexTheSame = i + 1;
      }
      else
      {
          continue;
      }
    } else {
      lastIndexTheSame = i;
      break;
    }
  }
  var solutionArray = [];
  if (lastIndexTheSame == 0) {
    return "";
  } else {
    for (let i = 0; i < lastIndexTheSame; i++) {
      solutionArray.push(arrayOne[i]);
    }
  }
  solutionArray.reverse();
  return solutionArray.join('');
}
function Problem44(){
  alert(ReverseSubstrationDifference(832));
  alert(ReverseSubstrationDifference(51));
  alert(ReverseSubstrationDifference(7977));
  alert(ReverseSubstrationDifference(1));
  alert(ReverseSubstrationDifference(665));
  alert(ReverseSubstrationDifference(149));
}
function ReverseSubstrationDifference(inputNumber){
  return (inputNumber-ReverseNumber(inputNumber)>=0) ? inputNumber-ReverseNumber(inputNumber) : 0;
}
function ReverseNumber(inputNumber){
  var reversedNumber = parseInt(inputNumber.toString().split("").reverse().join(""));
  return reversedNumber;
}
function Problem45(){
  alert(Brackets("(a*(b-c)..... )"));
  alert(Brackets(")(a-b-45/7*(a-34))"));
  alert(Brackets("sin(90...)+.............cos1)"));
}
function Brackets(inputString){
  var stringAsArray = inputString.split('');
  var count = 0;
  for (let i = 0; i < stringAsArray.length; i++) {
    if (stringAsArray[i] == '(') {
      var lookForRightsFromThisIndex = i + 1;
      var nextRightBracket = stringAsArray.indexOf(')', lookForRightsFromThisIndex);
      if (nextRightBracket == -1){
        return false;
      } 
      count++;
    }
    if (stringAsArray[i] == ')') {
      if (count == 0){
        return false;
      } 
      count--;
    }
  }
  return (count == 0);
}
function Problem46(){
  alert(WeekdayRobWasBornInDutch(new Date('09/21/1970')));
  alert(WeekdayRobWasBornInDutch(new Date('09/02/1945')));
  alert(WeekdayRobWasBornInDutch(new Date('09/11/2001')));
}
function WeekdayRobWasBornInDutch(inputTime){
  return inputTime.toLocaleString('nl-NL', {weekday: 'long'});
}
function Problem47(){
  alert(IsParselTongue("Sshe ssselects to eat that apple. "));
  alert(IsParselTongue("She ssselects to eat that apple. "));
  alert(IsParselTongue("Beatrice samples lemonade "));
  alert(IsParselTongue("You ssseldom sssspeak sso boldly, ssso messmerizingly."));
}
function IsParselTongue(sentence){
  var sentenceAsArray = sentence.split(' ');
  var wordsAsCharArrays =[];
  for (let i = 0; i < sentenceAsArray.length; i++) {
    wordsAsCharArrays.push(sentenceAsArray[i].split(''));
  }
  for (let i = 0; i < wordsAsCharArrays.length; i++) {
    if (!IsWordParsel(wordsAsCharArrays[i])) {
      return false;
    }
  }
  return true;
}
function IsWordParsel(inputArray){
  var sCount = 0;
  for (let j = 0; j < inputArray.length-1; j++)
  {
      if (inputArray[j].toLowerCase() == 's')
      {
          sCount++;
          if (inputArray[j + 1].toLowerCase() == 's')
          {
              return true;
          }
      }
  }
  return (sCount == 0);
}
function Problem48(){
  alert(MysteryFunc(3));
  alert(MysteryFunc(9));
  alert(MysteryFunc(17)); 
  alert(MysteryFunc(24));
}
function MysteryFunc(inputNumber){
  var returnString = "";
  var nCount = 0;
  for (let i = 1; i <= inputNumber; i++) {
    if (Math.pow(2, i) < inputNumber) {
      returnString += "2";
      nCount++;
    } else {
      break;
    }
    
  }
  for (let j = 1; j < Math.pow(2, (nCount + 1)-1); j++) {
    if (Math.pow(2, nCount) + j == inputNumber) {
      returnString += j;
      break;
    }
  }
  return parseInt(returnString);
}
function Problem49(){
  alert(ToCamelCase("hello_edabit"));
  alert(ToSnakeCase("helloEdabit"));
  alert(ToCamelCase("is_modal_open"));
  alert(ToSnakeCase("getColor"));
}
function ToCamelCase(inputString){
  var stringAsArray = inputString.split('_');
  for (let i = 0; i < stringAsArray.length; i++) {
    if (i!=0 && stringAsArray[i] == stringAsArray[i].toLowerCase(stringAsArray[i])) {
      stringAsArray[i] = stringAsArray[i][0].toUpperCase(stringAsArray[i][0]) + stringAsArray[i].substring(1);
    }
  }
  return stringAsArray.join('');
}
function ToSnakeCase(inputString){
  var stringAsArray = inputString.split(/(?=[A-Z])/);
  for (let i = 0; i < stringAsArray.length; i++) {
    if (stringAsArray[i].toUpperCase(stringAsArray[i])) {
      stringAsArray[i] = stringAsArray[i][0].toLowerCase(stringAsArray[i][0]) + stringAsArray[i].substring(1);
    }
  }
  return stringAsArray.join('_');
}
function Problem50(){
  alert(DoesRhyme("Sam I am!", "Green eggs and ham."));
  alert(DoesRhyme("Sam I am!", "Green eggs and HAM."));
  alert(DoesRhyme("You are off to the races", "a splendid day."));
  alert(DoesRhyme("and frequently do?", "you gotta move."));
}
function DoesRhyme(str1, str2){
  var arr1 = str1.split(" ");
  var arr2 = str2.split(" ");
  var arrayOne = arr1[arr1.length -1].toLowerCase().replace(/[^0-9a-z]/gi, '').split('').reverse();
  var arrayTwo = arr2[arr2.length -1].toLowerCase().replace(/[^0-9a-z]/gi, '').split('').reverse();
  var vowels = "aeiou";
  for (let i = 0; i < Math.min(arrayOne.length, arrayTwo.length); i++) {
    if (arrayOne[i] != arrayTwo[i]) {
      return false;
    } else {
      if (vowels.includes(arrayOne[i])) {
        return true;
      }
    }
  }
  return true;
}
function Problem51(){
  alert(CommentsCorrect("//////"));
  alert(CommentsCorrect("/**//**////**/"));
  alert(CommentsCorrect("///*/**/"));
  alert(CommentsCorrect("/////"));
}
function CommentsCorrect(str){
  return (str.replace(/\/\*\*\//g, '').replace(/\/\//g, '') == "");
}
//Valid JavaScript Comments
//In JavaScript, there are two types of comments:
//Single-line comments start with //
//Multi-line or inline comments start with /* and end with */
//The input will be a sequence of //, /* and */. Every /* must have a */ that immediately follows it. To add, there can be no single-line comments in between multi-line comments in between the /* and */.
//Create a function that returns true if comments are properly formatted, and false otherwise.
//Examples
//CommentsCorrect("//////") --> true
//// 3 single-line comments: ["//", "//", "//"]
//CommentsCorrect("/**//**////**/") --> true
//// 3 multi-line comments + 1 single-line comment:
//// ["/*", "*/", "/*", "*/", "//", "/*", "*/"]
//CommentsCorrect("///*/**/") --> false
//// The first /* is missing a */
//CommentsCorrect("/////") --> false
//// The 5th / is single, not a double //

//Rhyme Time
//Create a function that returns true if two lines rhyme and false otherwise.For the purposes of this exercise, two lines rhyme if the last word from each sentence contains the same vowels.
//Examples
//DoesRhyme("Sam I am!", "Green eggs and ham.") --> true
//DoesRhyme("Sam I am!", "Green eggs and HAM.") --> true
//// Capitalization and punctuation should not matter.
//DoesRhyme("You are off to the races", "a splendid day.") --> false
//DoesRhyme("and frequently do?", "you gotta move.") -->false
//Notes
//Case insensitive.
//Here we are disregarding cases like "thyme" and "lime".
//We are also disregarding cases like "away" and "today" (which technically rhyme, even though they contain different vowels).

//camelCase <==> snake_case https://edabit.com/challenge/RBqvKrYLxtM57G5FQ
//Create two functions ToCamelCase() and ToSnakeCase() that each take a single string and convert it into either camelCase or snake_case.If you're not sure what these terms mean, check the Resources tab above.
//Examples
//ToCamelCase(hello_edabit) --> helloEdabit
//ToSnakeCase(helloEdabit) --> hello_edabit
//ToCamelCase(is_modal_open) --> isModalOpen
//ToSnakeCase(getColor") --> get_color


//Reverse Coding Challenge #2 https://edabit.com/challenge/PGLjsEXWB5AWdoFGY
//This is a reverse coding challenge.
//Your task is to create a function that, when fed the inputs below, produce the sample outputs shown.
//Examples
//3 --> 21
//9 --> 2221
//17 --> 22221
//24 --> 22228
//inputNumber = 3
//2*1
//Steps
//make string = returnString = "";
//inputNumber%2 = lastNumber
//inputNumber/2 = loopLength
//start loop at 1, loopLength, i++
//if i* 2 < inputNumber
//returnString + "2";
//else
//returnString + lastNumber;
//end loop
//returnInt = Int32.Parse(returnString );
//return returnInt;

//Parseltongue https://edabit.com/challenge/q5GcPcJRibksZBDQX
//Hermione has come up with a precise formula for determining whether or not a phrase was ssspoken by a parssseltongue(a reference from the Harry Potter universe; the language of ssserpents and those who can converse with them).
//Each word in a sssentence must contain either:
//At least 2 instances of the letter "s" (i.e.must be together ss), or...
//Zero instances of the letter "s".
//Examples
//IsParselTongue("Sshe ssselects to eat that apple. ") --> true
//IsParselTongue("She ssselects to eat that apple. ") --> false
//// "She" only contains one "s".
//IsParselTongue("Beatrice samples lemonade") --> false
//// While "samples" has 2 instances of "s", they are not together.
//IsParselTongue("You ssseldom sssspeak sso boldly, ssso messmerizingly.") --> true
//Notes
//There should be no words with only one instance of the letter "s" (see example #2).


//The Day Rob Was Born in Dutch
//I was born on the 21st of September in the year of 1970. That was a Monday.Where I was born that weekday is called måndag.
//Write a method that when passed a date as year/month/ day and returns the date's weekday name in the Dutch culture. The culture identifier to use is 'nl-NL'. Not 'nl-BE'.
//You can assume the specified date is valid.
//Looking at the tests and doing a switch statement or similar is considered cheating.
//System.Globalization.CultureInfo should be used.
//The method may be used to get the name of the Dutch weekday of other memorable days too, like in the examples below:
//Examples
//WeekdayRobWasBornInDutch(new DateTime(1970, 9, 21)) --> 'maandag'
//WeekdayRobWasBornInDutch(new DateTime(1945, 9, 2)) --> 'zondag'
//WeekdayRobWasBornInDutch(new DateTime(2001, 9, 11)) --> 'dinsdag'
// Monday — maandag (ma.)
// Tuesday — dinsdag (di.)
// Wednesday — woensdag (wo.)
// Thursday — donderdag (do.)
// Friday — vrijdag (vr.)
// Saturday — zaterdag (za.)
// Sunday — zondag (zo.)


//Clear Brackets https://edabit.com/challenge/9y3dJ4kWQ7GxdGNN5
//Create a function Brackets() that takes a string and checks that the brackets in the math expression are correct.The function should return true or false.
//Examples
//Brackets("(a*(b-c)..... )") --> true
//Brackets(")(a-b-45/7*(a-34))") --> false
//Brackets("sin(90...)+.............cos1)") --> false
//Notes
//The string may not contain brackets, then return true.
//String may contain spaces.
//The string may be empty.

//Reverse Coding Challenge #5 https://edabit.com/challenge/RW9MHzMTLMstzjrWG
//This is a reverse coding challenge.Normally you're given explicit directions 
//with how to create a function. Here, you must generate your own function to 
//satisfy the relationship between the inputs and outputs.
//Your task is to create a function that, when fed the inputs below, produce the sample outputs shown.
//Examples
//832 --> 594
//51 --> 36
//7977 --> 180
//1 --> 0
//665 --> 99
//149 --> 0
// Steps
// ReverseSubstrationDifference(int inputNumber)
// reverse inputNumber by passing it into the ReverseInteger method
// declare variables
// minuend = inputNumber
// subtrahend = ReverseInteger(inputNumber);
// ReverseInteger
// Turn the int into a list. Reverse the list. Return the list turned into a string, turned into an Int
// return minuend - subtrahend;

//Longest Common Ending https://edabit.com/challenge/zRNkYPzy8oviqkrWc
//Write a function that returns the longest common ending between two strings.
//Examples
//LongestCommonEnding("multiplication", "ration") --> "ation"
//LongestCommonEnding("potent", "tent") --> "tent"
//LongestCommonEnding("skyscraper", "carnivore") --> ""
//Notes
//Return an empty string if there exists no common ending.

//Almost Palindrome https://edabit.com/challenge/t6R99zCQ7nesR7Rdk
//A string is an almost-palindrome if, by changing only one character, you can make it a palindrome.Create a function that returns true if a string is an almost-palindrome and false otherwise.
//Examples
//AlmostPalindrome('abcdcbg') --> true
// Transformed to 'abcdcba' by changing 'g' to 'a'.
//AlmostPalindrome('abccia') --> true
// Transformed to 'abccba' by changing 'i' to 'b'.
//AlmostPalindrome('abcdaaa') --> false
// Can't be transformed to a palindrome in exactly 1 turn.
//AlmostPalindrome('1234312') --> false
//Notes
//Return false if the string is already a palindrome.
// Steps
// Create stringAsArray 
// Reverse stringAsArray --> reverseArray
// create int differences = equal to 0
// start i  loop
// if stringAsrray[1] == is equal to reverseArray[i] then add 1 to differences
// if differences equals 2 then return true 
// there will be 2 differences since the difference will be noted on the front half and the back half

//Count the Number of Duplicate Characters https://edabit.com/challenge/wXCzoLtvvEEYBs3p9
//Create a function that takes a string and returns the number of alphanumeric characters that occur more than once.
//Examples
//DuplicateCount(abcde) --> 0
//DuplicateCount(aabbcde) --> 2
//DuplicateCount(Indivisibilities) --> 2
//DuplicateCount(Aa) --> 0
//// Case sensitive
//Notes
//Duplicate characters are case sensitive.
//The input string will contain only alphanumeric characters.
// Steps
// Create int DuplicateCount(inputString) method
// create char[] stringAsArray = inputString.ToCharArray
// create int[] duplicateArray
// create int alreadyCounted = 0;
// start i loop going through each index one at a time
// pass duplicateArray[i] to HowManyOccurances to check for occurances
// alreadyCounted += HowManyOccurances(char, stringAsArray);
// return alreadyCounted;
// HowManyOccurances(char inputChar char inputArray)
// create int timesRepeated
// start loop i
// if inputArray[i]== inputChar then add 1 to timesRepeated

// Valid Hex Code
// Create a function that determines whether a string is a valid hex code.
// A hex code must begin with a pound key # and is exactly 6 characters in length. Each character must be a digit from 0-9 or an alphabetic character from A-F. All alphabetic characters may be uppercase or lowercase.
// Examples
// IsValidHexCode("#CD5C5C") --> true
// IsValidHexCode("#EAECEE") --> true
// IsValidHexCode("#eaecee") --> true
// IsValidHexCode("#CD5C58C") --> false
// // Length exceeds 6
// IsValidHexCode("#CD5C5Z") --> false
// // Not all alphabetic characters in A-F
// IsValidHexCode("#CD5C&C") --> false
// // Contains unacceptable character
// IsValidHexCode("CD5C5C") --> false
// Missing #
// Steps
// set variable isValidHexCode = true
// Turn input string into char[] --> stringAsArray
// Check if first character is # --> IsNumSignFirst(stringAsArray[0]))
// Check to see if array has 7 characters --> DoesArrayHave7Members(stringAsArray)
// Check to see if char are numeric or alphabetic ELSE return false;
// Check to see if all alphabetic character.ToUpper are between A-F
// Check to see if all numberic characters are between 0-9

//Replace Letters With Position In Alphabet
//Create a function that takes a string and replaces each letter with its appropriate position in the alphabet. 'a' is 1, 'b' is 2, 'c' is 3, etc, etc.
//Examples
//AlphabetIndex('Wow, does that work?') --> '23 15 23 4 15 5 19 20 8 1 20 23 15 18 11'
//AlphabetIndex('The river stole the gods.') --> '20 8 5 18 9 22 5 18 19 20 15 12 5 20 8 5 7 15 4 19'
//AlphabetIndex('We have a lot of rain in June.') --> '23 5 8 1 22 5 1 12 15 20 15 6 18 1 9 14 9 14 10 21 14 5'
//Notes
//If any character in the string isn't a letter, ignore it.

//Convert to Hex
//Create a function that takes a strings characters as ASCII and returns each characters hexadecimal value as a string.
//Examples
//ConvertToHex("hello world") --> "68 65 6c 6c 6f 20 77 6f 72 6c 64"
//ConvertToHex("Big Boi") --> "42 69 67 20 42 6f 69"
//ConvertToHex("Marty Poppinson") --> "4d 61 72 74 79 20 50 6f 70 70 69 6e 73 6f 6e"
//Notes
//Each byte must be seperated by a space.
//All alpha hex characters must be lowercase.

//Sock Pairs
//Joseph is in the middle of packing for a vacation.
//He's having a bit of trouble finding all of his socks, though. Write a function that returns the number of sock pairs he has. A sock pair consists of two of the same letter, such as 'AA'. The socks are represented as an unordered sequence.
//Examples
//SockPairs("AA") --> 1
//SockPairs("ABABC") --> 2
//SockPairs("CABBACCC") --> 4
//Notes
//If given an empty string (no socks in the drawer), return 0.
//There can be multiple pairs of the same type of sock, such as two pairs of CC for the last example.

// Reverse Coding Challenge #1 https://edabit.com/challenge/bqveyPRgcWZM7XzMQ
// This is a reverse coding challenge.Normally you're given explicit directions with how to create a function. Here, you must generate your own function to satisfy the relationship between the inputs and outputs.
// Your task is to create a function that, when fed the inputs below, produce the sample outputs shown.
// Examples
// A4B5C2 --> AAAABBBBBCC
// C2F1E5 --> CCFEEEEE
// T4S2V2 --> TTTTSSVV
// A1B2C3D4 --> ABBCCCDDDD
// Steps
// Turn input String into a char List stringToList//
// create solutionString;
// Loop through stringToList increase by 2
// string charToAdd = stringToList[i];
// start new loop j loop is stringToList[i+1]
// solutionString = solutionString + charToAdd
// return solutionString


// Next Prime
// Given an integer, create a function that returns the next prime.If the number is prime, return the number itself.
// Examples
// NextPrime(12) --> 13
// NextPrime(24) --> 29
// NextPrime(11) --> 11
// // 11 is a prime, so we return the number itself.

// Smooth Sentences
// Carlos is a huge fan of something he calls smooth sentences.A smooth sentence is one where the last letter of each word is identical to the first letter the following word.
// To illustrate, the following would be a smooth sentence: "Carlos swam masterfully."
// Since "Carlos" ends with an "s" and swam begins with an "s" and swam ends with an "m" and masterfully begins with an "m".
// Examples
// IsSmooth("Marta appreciated deep perpendicular right trapezoids") --> true
// IsSmooth("Someone is outside the doorway") --> false
// IsSmooth("She eats super righteously") --> true
// Steps
// turn inputString into an Array --> stringAsArray
// turn array into a jagged array --> arrayWithWordsAsArrays with as many members as stringAsArray.length
// sentenceIsSmooth = true;
// Start loop to go through sentence and create arrayWithWordsAsArrays using ToCharArray--> i
// Now compare arrayWithWordsAsArrays to see if smooth
// Loop through arrayWithWordsAsArrays to go through words--> i
//    Loop through arrayWithWordsAsArrays[i] to go through letters
//    
// If arrayWithWordsAsArrays[i]

//Power Ranger https://edabit.com/challenge/McGCFZYn8ikn3GSqz
//Create a function that takes in n, a, b and returns the number of values raised to the nth power that lie in the range[a, b], inclusive.
//Examples
//PowerRanger(2, 49, 65) --> 2
//// 2 squares (n^2) lie between 48 and 65, 49 (7^2) and 64 (8^2)
//PowerRanger(3, 1, 27) --> 3
//// 3 cubes (n^3) lie between 1 and 27, 1 (1^3), 8 (2^3) and 27 (3^3)
//PowerRanger(10, 1, 5) --> 1
//// 1 value raised to the 10th power lies between 1 and 5, 1 (1^10)
//PowerRanger(5, 31, 33) --> 1
//PowerRanger(4, 250, 1300) --> 3
//Notes
//Remember that the range is inclusive.
//a<b will always be true.

// Palindrome Timestamps https://edabit.com/challenge/asngMFwniLcegJJ7P
// Create a function that takes two times of day(hours, minutes, seconds) and returns the amount of occurences of palendrome timestamps.
// A palindrome timestamp should be read the same hours : minutes : seconds as seconds : minutes : hours, keeping in mind the second's and hour's digits will reverse.For example, 02 : 11 : 20 is a palendrome timestamp.
// Examples
// PalindromeTimestamps(2, 12, 22, 4, 35, 10) --> 14
// PalindromeTimestamps(12, 12, 12, 13, 13, 13) --> 6
// PalindromeTimestamps(6, 33, 15, 9, 55, 10) --> 0
// Notes
// Expect military time.
// Include the given time parameters if they happen to be palindromes.
// The parameter timestamps are chronological.
// Steps
// Create TimeSpan variables for timeSpan1 and timeSpan2 with corresponding hours, minutes, seconds
// Create int palidromeCounter variable = 0;
// Check to see if timeSpan1.ToString() is a palindrome
// if it is, then add 1 to the palidromeCounter
// else add 1 to the seconds of timeSpan1 and repeat

// Reversing a Binary String
// Write a function that takes an integer n, reverses the binary representation of that integer, and returns the new integer from the reversed binary.
// Examples
// ReversedBinaryInteger(10)--> 5
// // 10 = 1010 -> 0101 = 5
// ReversedBinaryInteger(12) --> 3
// // 12 = 1100 -> 0011 = 3
// ReversedBinaryInteger(25) --> 19
// // 25 = 11001 -> 10011 = 19
// ReversedBinaryInteger(45) --> 45
// // 45 = 101101 -> 101101 = 45
// Notes
// All values of n will be positive.



// Area of a Triangle
// Write a function that takes the base and height of a triangle and return its area.
// Examples
// triArea(3, 2) --> 3
// triArea(7, 4) --> 14
// triArea(10, 10) --> 50
// Notes
// The area of a triangle is: (base * height) / 2
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

//ReverseAndNot https://edabit.com/challenge/YGhgctqPsKQxQQCFS
//Write a function that takes an integer i and returns a string with the integer backwards followed by the original integer.
//To illustrate:
//123
//We reverse 123 to get 321 and then add 123 to the end, resulting in 321123.
//Examples
//ReverseAndNot(123) --> "321123"
//ReverseAndNot(152) -->"251152"
//ReverseAndNot(123456789) --> "987654321123456789"
//Notes
//i is a non-negative integer.

//Return the Sum of the Two Smallest Numbers
//Create a function that takes an array of numbers and returns the sum of the two lowest positive numbers.
//Examples
//SumSmallest([19, 5, 42, 2, 77]) --> 7
//SumSmallest([10, 343445353, 3453445, 3453545353453]) --> 3453455
//SumSmallest([2, 9, 6, -1]) --> 8
//SumSmallest([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]) --> 563
//SumSmallest([3683, 2902, 3951, -475, 1617, -2385]) --> 4519
//Notes
//Don't count negative numbers.
//Floats and empty arrays will not be used in any of the test cases.


// Check if a Number is Prime https://edabit.com/challenge/aoR4PFS6FfpJs6v79
// Create a function that outputs true if a number is prime, and false otherwise.
// Examples
// isPrime(31) --> true
// isPrime(18) --> false
// isPrime(11) --> true
// Notes
// A prime number has no other factors except 1 and itself.

//Return the Middle Character(s) of a String
//Create a function that takes a string and returns the middle character(s). 
//If the word's length is odd, return the middle character. 
//If the word's length is even, return the middle two characters.
//Examples
//GetMiddle('test') --> 'es'
//GetMiddle('testing') --> 't'
//GetMiddle('middle') --> 'dd'
//GetMiddle('A') --> 'A'
//Notes
//All test cases contain a single word(as a string).

//Check if a Number is a Palindrome
//Create a function that returns true if a number is a palindrome.
//Examples
//IsPalindrome(838) --> true
//IsPalindrome(4433) --> false
//IsPalindrome(443344) --> true
// Steps
// create var numberToTest
// pass numberToTest into IsPalindrome function
// set var isNumberPalindrome to true;
// turn the inputNumber of the IsPalindrome into an Array as numberAsArray
// var startingPoint is equal to the numberAsArray/2 round this number
// if numberAsArray.length is even
// loop through numberAsArray startingPoint times
//    if numberAsArray[i -1] == numberAsArray[startingPoint + i]
//     continue
//    else
//      return false
// else
//    if numberAsArray[startingPoint -1 - i] == numberAsArray[startingPoint + i]
//     continue
//    else
//      return false

//Find the Characters Counterpart Char Code
//Create a function that takes a single character as an argument and returns the char code of its lowercased / uppercased counterpart.
//Examples
//Given that:
//  - 'A' char code is: 65
//  - 'a' char code is: 97
//CounterpartCharCode('A') -->97
//CounterpartCharCode('a') --> 65
//Notes
//The argument will always be a single character.
//Not all inputs will have a counterpart(e.g.numbers), in which case return the inputs char code.
// Steps
// var originalChar = "A";
// pass originalChar into function CounterpartCharCode(inputChar);
// create var counterChar and set equal to GetOppositeCase(inputChar)
// pass into function GetOppositeCase and pass in inputChar
// create var counterpartCount and get char code for counterChar


//Count Ones in Binary Representation of Integer https://edabit.com/challenge/zn3A3AAzoE7vezw7Q
//Count the amount of ones in the binary representation of an integer.So for example, since 12 is '1100' in binary, the return value should be 2.
//Examples
//CountOnes(0) --> 0
//CountOnes(100) --> 3
//CountOnes(999) --> 8
//Notes
//The input will always be a valid integer(number).
// Steps
// Create var originalNumber
// Create CountOnes which takes in an inputNumber
// Create a GetBinary function which takes in a number and returns a string of 1's and 0's
// Turn the string into an array with split
// create a binaryCount variable initially set to 0
// for loop which adds 1 to binaryCount for every time there is a 1 in the array
// return binaryCount


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