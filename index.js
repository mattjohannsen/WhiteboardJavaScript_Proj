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
function Problem52(){
  alert(TextToNumberBinary("zero one zero one zero one zero one"));
  alert(TextToNumberBinary("Zero one zero ONE zero one zero one"));
  alert(TextToNumberBinary("zero one zero one zero one zero one one two"));
  alert(TextToNumberBinary("zero one zero one zero one zero three"));
  alert(TextToNumberBinary("one one"));
}
function TextToNumberBinary(str){
  str = str.toLowerCase().replace(/one/g, "1").replace(/zero/g, "0").replace(/[^0-1]/g, "");
  return str.substring(0, str.length - (str.length % 8));;
}
function Problem53(){
  alert(Trouble(451999277, 41177722899));
  alert(Trouble(1222345, 12345));
  alert(Trouble(666789, 12345667));
  alert(Trouble(33789, 12345337) );
}
function Trouble(num1,num2){
  var searchString = num1.toString() + "," + num2.toString();
  return /\d*(\d)\1{2}\d*,\d*\1{2}\d*/.test(searchString);
}
function Problem54(){
  alert(AverageWordLength("A B C."));
  alert(AverageWordLength("What a gorgeous day."));
  alert(AverageWordLength("Dude, this is so awesome!"));
}
function AverageWordLength(str){
  var arr = str.split(" ");
  var totalCharacters = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].replace(/[^0-9a-z]/gi, '');
    totalCharacters += arr[i].length;
  }
  return (totalCharacters/arr.length).toFixed(2);
}
function Problem55(){
  alert(Encrypt("banana"));
  alert(Encrypt("karaca"));
  alert(Encrypt("burak"));
  alert(Encrypt("alpaca"));
}
function Encrypt(str){
  return str.split('').reverse().join('').replace(/a/g,"0").replace(/e/g,"1").replace(/i/g,"2").replace(/o/g,"2").replace(/u/g,"3") + "aca";
}
function Problem56(){
  alert(CorrectSigns("3 < 7 < 11"));
  alert(CorrectSigns("13 > 44 > 33 > 1"));
  alert(CorrectSigns("1 < 2 < 6 < 9 > 3"));
  alert(CorrectSigns("9 < 9"));
}
function CorrectSigns(str){
  var arr = str.split(' ');
  for (let i = 0; i <= arr.length-3; i+=2) {
    if (arr[i+1]=="<" && parseInt(arr[i],10) >= parseInt(arr[i+2],10)) {
      return false;
    } else if (arr[i+1]==">" && parseInt(arr[i],10) <= parseInt(arr[i+2],10)) {
      return false;
    }
  }
  return true;
}
function Problem57(){
  alert(PossiblePalindrome("acabbaa"));
  alert(PossiblePalindrome("aacbdbc"));
  alert(PossiblePalindrome("aacbdb"));
  alert(PossiblePalindrome("abacbb"));
}
function PossiblePalindrome(str){
  var solution = "";
  for (let i = 0; i < str.length; i++) {
    if (solution.includes(str[i])) {
      solution = solution.replace(str[i], '');
    } else {
      solution += str[i];
    }
  }
  return !(solution.length > 1);
}
function Problem58(){
  alert(Mangle("Fun times!"));
  alert(Mangle("The quick brown fox."));
  alert(Mangle("Omega"));
}
function Mangle(str){
  var arr = str.split('');
  var vowels = "aeiouAEIOU";
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].toUpperCase().match(/[A-Z]/i)){
        arr[i] = arr[i];
    } else if (arr[i] == 'z' || arr[i] == 'Z'){
        arr[i] = 'A';
    } else if (arr[i] == ' '){
        arr[i] = ' ';
    } else {
        arr[i] = String.fromCharCode(arr[i].charCodeAt(0) + 1);
        if (vowels.includes(arr[i]))
        {
            arr[i] = arr[i].toUpperCase();
        }
    }    
  }
  return arr.join('');
}
function Problem59(){
  alert(RollingCipher("abcd", 1));
  alert(RollingCipher("abcd", -1));
  alert(RollingCipher("abcd", 3));
  alert(RollingCipher("abcd", 26));
}
function RollingCipher(str, n){
  var arr = str.split('');
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < arr.length; i++)
  {
      var startingPoint = alphabet.indexOf(arr[i]) + n;
      if (startingPoint > 25)
      {
          startingPoint -= 26;
      }
      else if (startingPoint < 0)
      {
          startingPoint += 26;
      }
      arr[i] = alphabet[startingPoint];
  }
  return arr.join('');
}
function Problem60(){
  alert(MinTurns("4089", "5672"));
  alert(MinTurns("1111", "1100"));
  alert(MinTurns("2391", "4984"));
}
function MinTurns(current, target){
  var total = 0;
  for (let i = 0; i < 4; i++) {
    var largest = Math.max(current[i], target[i]);
    var smallest = Math.min(current[i], target[i]);
    total += Math.min(largest-smallest, Math.abs(largest-(smallest + 10)));
  }
  return total;
}
function Problem61(){
  alert(ConvertTime("12:00 am"));
  alert(ConvertTime("6:20 pm"));
  alert(ConvertTime("21:00"));
  alert(ConvertTime("5:05"));
}
function ConvertTime(time){
  var returnTime = "";
  if (time.includes('m')) {
    var arr = time.split(' ');
    let amPm = arr[1];
    var hoursMinutes = arr[0].split(':');
    let hours = hoursMinutes[0];
    let minutes = hoursMinutes[1];
    returnTime = (amPm == "am") ? hours.replace("12", "0") + ":" + minutes : parseInt(hours) + 12 + ":" + minutes;
  } else {
    var hoursMinutes = time.split(':');
    let hours = hoursMinutes[0];
    let minutes = hoursMinutes[1];
    returnTime = (parseInt(hours) > 12) ? (parseInt(hours) - 12) + ":" + minutes + " pm" : hours + ":" + minutes + " am";
  }
  return returnTime;
}
function Problem62(){
  alert(Simplify("4/6"));
  alert(Simplify("10/11"));
  alert(Simplify("100/400"));
  alert(Simplify("8/4"));
}
function Simplify(str){
  var arr = str.split('/').map(x=>+x);
  var fractionIsNotSimplified = true;
  do {
    for (let i = 2; i <= arr[0]; i++) {
      if (arr[0] % i == 0 && arr[1] % i == 0) {
        arr[0] = arr[0] / i;
        arr[1] = arr[1] / i;
      }
    }
    fractionIsNotSimplified = false;
  }
  while (fractionIsNotSimplified);
  return (arr[0] % arr[1] == 0) ? arr[0] / arr[1] : arr.join("/");
}
function Problem63(){
  alert(BreakPoint(159780));
  alert(BreakPoint(112));
  alert(BreakPoint(1034));
  alert(BreakPoint(10));
  alert(BreakPoint(343));
}
function BreakPoint(num){
  var arr = num.toString(10).split('').map(Number);
  let leftSum = 0;
  let rightSum = arr.reduce((a, b) => a + b, 0);
  for (let i = 0; i < arr.length; i++) {
    leftSum += arr[i];
    rightSum -= arr[i];
    if (leftSum == rightSum) {
      return true;
    }
  }
  return false;
}
function Problem64(){
  alert(Overlap("ABC", "Ican'tsingmyABC"));
  alert(Overlap("abc", "Ican'tsingmyABC") );
  alert(Overlap("Ican'tsingmyABC", "abc"));
  alert(Overlap("hello world", "hello"));
  alert(Overlap("+=", "this should work too +="));
  alert(Overlap("hey", "*********"));
}
function Overlap(str1, str2){
  var arr1 = str1.split("").reverse();
  var arr2 = str2.split("").reverse();
  var stringOverlap = Boolean(false);
  for (let i = 0; i < Math.min(arr1.length, arr2.length); i++) {
    if (arr1[i] == "*" || arr2[i] == "*" ||  arr1[i].toUpperCase() == arr2[i].toUpperCase()) {
      stringOverlap = Boolean(true);
    } else {
      stringOverlap = Boolean(false);
      break;
    }
  }
  return stringOverlap;
}
function Problem65(){
  alert(EncodeMorse("EDABBIT CHALLENGE")); //". -.. .- -... -... .. -   -.-. .... .- .-.. .-.. . -. --. ."
  alert(EncodeMorse("HELP ME !")); //".... . .-.. .--.   -- .   -.-.--"
}
function EncodeMorse(str){
  var codeValues = {
    'a': ".-",
    'b': "-...",
    'c': "-.-.",
    'd': "-..",
    'e': ".",
    'f': "..-.",
    'g': "--.",
    'h': "....",
    'i': "..",
    'j': ".---",
    'k': "-.-",
    'l': ".-..",
    'm': "--",
    'n': "-.",
    'o': "---",
    'p': ".--.",
    'q': "--.-",
    'r': ".-.",
    's': "...",
    't': "-",
    'u': "..-",
    'v': "...-",
    'w': ".--",
    'x': "-..-",
    'y': "-.--",
    'z': "--..",
    '0': "-----",
    '1': ".----",
    '2': "..---",
    '3': "...--",
    '4': "....-",
    '5': ".....",
    '6': "-....",
    '7': "--...",
    '8': "---..",
    '9': "----.",
    ':': "--..--",
    ':': "---...",
    '\'': ".----.",
    '.': ".-.-.-",
    '?': "..--..",
    '!': "-.-.--",
    ' ': " "
  }
  var morseCode = [];
  for (let i = 0; i < str.length; i++) {
    morseCode.push(codeValues[str[i].toLowerCase()]);
  }
  return morseCode.join(' ');
}
function Problem66(){
  alert(FirstIndex("68 65 6c 6c 6f 20 77 6f 72 6c 64", "world"));
  alert(FirstIndex("47 6f 6f 64 62 79 65 20 77 6f 72 6c 64", "world"));
  alert(FirstIndex("42 6f 72 65 64 20 77 6f 72 6c 64", "Bored"));
}
function FirstIndex(hexString, needle){
  return hexString.split(' ').indexOf(needle.charCodeAt(0).toString(16))
}

function Problem67(){
  alert(countTrue([true, false, false, true, false]));
  alert(countTrue([false, false, false, false]));
  alert(countTrue([]));
}
function countTrue(arr){
  let trueCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length>0) {
      return 0;
    } else {
      if (arr[i] === true){
        trueCount ++;
      }
    }
  }
  return trueCount;
}
function Problem68(){
  alert(SortContacts(["John Locke", "Thomas Aquinas", "David Hume", "Rene Descartes"], "ASC"));
  alert(SortContacts(["Paul Erdos", "Leonhard Euler", "Carl Gauss"], "DESC"));
}
function SortContacts(names, sort){
  for (let j = 0; j < names.length - 1; j++) {
    for (let i = 0; i < names.length - 1; i++) {
      let sortValue = names[i].split(' ')[1].localeCompare(names[i + 1].split(' ')[1]);
      if (sortValue === 1 && sort === "ASC") {
        let temp = names[i + 1];
        names[i + 1] = names[i]
        names[i] = temp;
      } else if (sortValue === -1 && sort === "DESC"){
        let temp = names[i];
        names[i] = names[i + 1]
        names[i + 1] = temp;
      }
    }
  }
  return names;
}
function Problem69(){
  alert(IsValidIP("1.2.3.4"));
  alert(IsValidIP("1.2.3"));
  alert(IsValidIP("1.2.3.4.5"));
  alert(IsValidIP("123.45.67.89"));
  alert(IsValidIP("123.456.78.90"));
  alert(IsValidIP("123.045.067.089"));
}
function IsValidIP(ip){
  var arr = ip.split('.');
  if (arr.length !=4) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0]=='0' && arr[i].length > 1) {
      return false;
    } else if (arr[i] < '0' && arr[i] > '9') {
      return false;
    } else if (parseInt(arr[i], 10) < 0 || parseInt(arr[i], 10) > 255) {
      return false;
    }
  }
  return true;
}
function Problem70(){
  alert(CanComplete("butl", "beautiful"));
  alert(CanComplete("butlz", "beautiful"));
  alert(CanComplete("tulb", "beautiful"));
  alert(CanComplete("bbutl", "beautiful"));
}
function CanComplete(initial, word){
  var arr = initial.split('');
  let startIndex = 0;
  let characterFoundIndex;
  for (let i = 0; i < arr.length; i++) {
    if (word.includes(arr[i]))
    {
        characterFoundIndex = word.indexOf(arr[i], startIndex);
        if (characterFoundIndex == -1)
        {
            return false;
        }
        else
        {
            startIndex = characterFoundIndex + 1;
        }
    }
    else
    {
        return false;
    }
  }
  return true;
}
function Problem71(){
  alert(SmallestTransform(399));
  alert(SmallestTransform(1234));
  alert(SmallestTransform(153));
  alert(SmallestTransform(33338));
  alert(SmallestTransform(7777));
}
function SmallestTransform(num){
  var arr = Array.from(String(num), Number);
  var uniqueList = Array.from(new Set(arr));
  var solutionArray = [];
  uniqueList.forEach(uniqueNum => {
    let totalCount = 0;
    for (let i = 0; i < arr.length; i++) {
      totalCount += Math.max(uniqueNum, arr[i]) - Math.min(uniqueNum, arr[i]);
    }
    solutionArray.push(totalCount);
  });
  return Math.min.apply(Math, solutionArray);
}
function Problem72(){
  alert(CannotCapture([ [ 0, 0, 0, 1, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 1, 0, 0, 0, 1, 0, 0 ], [ 0, 0, 0, 0, 1, 0, 1, 0 ], [ 0, 1, 0, 0, 0, 1, 0, 0 ], [ 0, 0, 0, 0, 0, 0, 0, 0 ], [ 0, 1, 0, 0, 0, 0, 0, 1 ], [ 0, 0, 0, 0, 1, 0, 0, 0 ] ]));
  alert(CannotCapture([ [ 1, 0, 1, 0, 1, 0, 1, 0 ], [ 0, 1, 0, 1, 0, 1, 0, 1 ], [ 1, 0, 1, 0, 1, 0, 1, 0 ], [ 0, 0, 0, 1, 0, 1, 0, 1 ], [ 1, 0, 0, 0, 1, 0, 1, 0 ], [ 0, 0, 0, 0, 0, 1, 0, 1 ], [ 1, 0, 1, 0, 1, 0, 1, 0 ], [ 1, 0, 0, 1, 0, 0, 0, 1 ] ]));
}
function CannotCapture(board){
  var horizontalmoves = [ 2, 2, -2, -2, 1, 1, - 1, -1 ];
  var verticalmoves = [ 1, -1, 1, -1, 2, -2, 2, -2 ];
  for (let i = 0; i < board.length; i++)
  {
      for (let j = 0; j < board[i].length; j++)
      {
          if (board[i][j] == 1)
          {
              for (let k = 0; k < horizontalmoves.length; k++)
              {
                  let row = i + verticalmoves[k];
                  let column = j + horizontalmoves[k];
                  if (row < 0 || row > 7 || column < 0 || column > 7)
                  {
                      continue;
                  }
                  else
                  {
                      let boardValue = board[row][column];
                      if (boardValue == 1)
                      {
                          return false;
                      }
                  }
              }
          }
      }
  }
  return true;
}
function Problem73(){
  // alert(LCM([1, 2, 3, 4, 5, 6, 7, 8, 9]));
  // alert(LCM([5]));
  // alert(LCM([5, 7, 11]));
  alert(LCM([5, 7, 11, 35, 55, 77])); //--> 385
  //alert(GetGCF(250, 400));
}
function LCM(nums){
  //nums.sort();
  var multiplicationFactor = 1;
  for (let i = 0; i < nums.length; i++){
    for (let j = 0; j < nums.length; j++){
      var gcf = GetGCFNow(nums[i], nums[j]);
      if (nums[j] % gcf == 0 && i != j){
        multiplicationFactor *= gcf;
        nums = ReduceWhenPossible(nums, gcf);
        continue;
      }
    }
  }
  var lcm = 1;
  for (let k = 0; k < nums.length; k++){
      lcm *= nums[k];
  }
  return lcm * multiplicationFactor;
}
function ReduceWhenPossible(arr, divisor){
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % divisor == 0){
    arr[i] /= divisor;
    }
  }
  return arr;
}
function GetGCFNow(num1, num2){
  if (num2 == 0){
    return num1;
  }
  else{
    return GetGCFNow(num2, num1 % num2);
  }
}
function Problem74(){
  alert(UniqueFract());
}
function UniqueFract(){
  var arr = [];
  for (let i = 1; i < 10; i++){
      for (let j = 1; j < 10; j++){
          if (i < j){
              let gcd = GetGCF(i, j);
              var arrayToAdd = [i / gcd, j / gcd];
              arr.push(arrayToAdd);
          }
      }
  }
  var distinctArray = Array.from((new Map(arr.map((item) => [item.join(), item]))).values());
  let returnSum = 0;
  for (let i = 0; i < distinctArray.length; i++)
  {
      returnSum += distinctArray[i][0] / distinctArray[i][1];
  }
  return returnSum;
}
function GetGCF(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) 
    return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}
function Problem75(){
  alert(OverlappingRectangles([ 2, 1, 3, 4 ], [ 3, 2, 2, 5 ]));
  alert(OverlappingRectangles([ 2, -9, 11, 5 ], [ 5, -11, 2, 9 ]));
  alert(OverlappingRectangles([ -8, -7, 4, 7 ], [ -5, -9, 4, 7 ]));
}
function OverlappingRectangles(rect1, rect2){
  let xOverlap = Math.min(rect1[0] + rect1[2], rect2[0] + rect2[2]) - Math.max(rect1[0], rect2[0]);
  let yOverlap = Math.min(rect1[1] + rect1[3], rect2[1] + rect2[3]) - Math.max(rect1[1], rect2[1]);
  return ((xOverlap < 0) ? 0 : xOverlap) * ((yOverlap < 0) ? 0 : yOverlap);
}
function Problem76(){
  alert(AnagramStrStr("car", "race"));
  alert(AnagramStrStr("nod", "done"));
  alert(AnagramStrStr("bag", "grab"));
}
function AnagramStrStr(needle, haystack){
    var arr = Permutations(needle.split(''));
    for (let i = 0; i < arr.length; i++){
        if (haystack.includes(arr[i].join(''))){
            return true;
        }
    }
    return false;
}
function Permutations(inputArr) {
  var results = [];
  function Permute(arr, memo) {
    var cur, memo = memo || [];
    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      Permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }
    return results;
  }
  return Permute(inputArr);
}
//Find an Anagram of a String in Another String
//Create a function that takes two strings and determines if an anagram of the first string is in the second string. Anagrams of "bag" are "bag", "bga", "abg", "agb", "gab", "gba". Since none of those anagrams are in "grab", the answer is false. A "g", "a", and "b" are in the string "grab", but they're split up by the "r".
//Examples
//AnagramStrStr("car", "race") --> true
//AnagramStrStr("nod", "done") --> true
//AnagramStrStr("bag", "grab") --> false
//Notes
//Inputs will be valid strings in all lowercase letters.
//There exists a linear time algorithm for this.
// Steps turn string into array
// Enter a string into permutations --> abc
// The string is turned into an array [a,b,c]
// The first char is frozen
// if arr-Length - 1 == 2
// swap arr[1] and arr [2]
// return array;
// else
// create newArray[arr.Length - 1]

// Area of Overlapping Rectangles https://edabit.com/challenge/Jj6S7qQgtfAo4L2QR
// Create a function that returns the area of the overlap between two rectangles.The function will receive two rectangles, each with the coordinates of the lower left corner followed by the width and the height int[] { x, y, width, height }.
// Examples
// OverlappingRectangles(new int[] { 2, 1, 3, 4 }, new int[] { 3, 2, 2, 5  }) --> 6
// OverlappingRectangles(new int[] { 2, -9, 11, 5 }, new int[] { 5, -11, 2, 9 }) --> 10
// OverlappingRectangles(new int[] { -8, -7, 4, 7 },  new int[] { -5, -9, 4, 7 }) --> 5

//Amount of Unique Fractions
//Create a function double UniqueFract(), which should sum all irreducible regular fractions between 0 and 1, in the numerator and denominator of which there are only single-digit numbers: 1/2, 1/3, 1/4, ... 2/3, 2/4, ... 8/9.

//Task
//UniqueFract() --> sum
//Notes
//Of the fractions 1/2 2/4 3/6 4/8, only 1/2 is included in the sum.
//Don't include any values >= 1.

// Least Common Multiple
// Given a array of integers, create a function that will find the smallest positive integer that is evenly divisible by all the members of the list.In other words, find the least common multiple(LCM).
// Examples
// LCM({ 1, 2, 3, 4, 5, 6, 7, 8, 9 }) --> 2520
// LCM({ 5 }) --> 5
// LCM({ 5, 7, 11 }) --> 385
// LCM({ 5, 7, 11, 35, 55, 77 }) --> 385

// Knights on a Board
// Write a function that returns true if the knights are placed on a chessboard such that no 
// knight can capture another knight.Here, 0s represent empty squares and 1s represent knights.

// Examples
// CannotCapture(new int[,] {
//  { 0, 0, 0, 1, 0, 0, 0, 0 },
//  { 0, 0, 0, 0, 0, 0, 0, 0 },
//  { 0, 1, 0, 0, 0, 1, 0, 0 },
//  { 0, 0, 0, 0, 1, 0, 1, 0 },
//  { 0, 1, 0, 0, 0, 1, 0, 0 },
//  { 0, 0, 0, 0, 0, 0, 0, 0 },
//  { 0, 1, 0, 0, 0, 0, 0, 1 },
//  { 0, 0, 0, 0, 1, 0, 0, 0 }
// }) ➞ True

// CannotCapture(new int[,] {
//  {1, 0, 1, 0, 1, 0, 1, 0},
//  {0, 1, 0, 1, 0, 1, 0, 1},
//  {1, 0, 1, 0, 1, 0, 1, 0},
//  {0, 0, 0, 1, 0, 1, 0, 1},
//  {1, 0, 0, 0, 1, 0, 1, 0},
//  {0, 0, 0, 0, 0, 1, 0, 1},
//  {1, 0, 1, 0, 1, 0, 1, 0},
//  {1, 0, 0, 1, 0, 0, 0, 1} 
// }) ➞ False
// Notes
// Knights can be present in any of the 64 squares.
// No other pieces except knights exist.
// Steps
// There are 8 arrays that are 8 long
// if knight at arr[0][0] then possible moves are[2][1],[2][-1],[-2][1],[-2][-1], [1][2],[1][-2],[-1][2],[-1][-2]

//Smallest Transform
//Create a function that returns the smallest number of changes it takes to transform one number into one with identical digits.A step is incrementing or decrementing a digit by one.
//Examples
//SmallestTransform(399) --> 6
//// 399 transformed to 999 in 6 steps.
//SmallestTransform(1234) --> 4
//// 1234 can be transformed to either 2222 or 3333 using 4 steps.
//SmallestTransform(153) --> 4
//SmallestTransform(33338) --> 5
//SmallestTransform(7777) --> 0
//Notes
//If a number already has identical digits, return 0.

// Complete the Word
// An input string can be completed if additional letters can be added and no letters need to be taken away to match the word.Furthermore, the order of the letters in the input string must be the same as the order of letters in the final word.

// Create a function that, given an input string, determines if the word can be completed.

// Examples
// CanComplete("butl", "beautiful") --> true
// // We can add "ea" between "b" and "u", and "ifu" between "t" and "l".
// CanComplete("butlz", "beautiful") --> false
// // "z" does not exist in the word beautiful.
// CanComplete("tulb", "beautiful") --> false
// // Although "t", "u", "l" and "b" all exist in "beautiful", they are incorrectly ordered.
// CanComplete("bbutl", "beautiful") --> false
// // Too many "b"s, beautiful has only 1.
// Notes
// Both string input and word will be lowercased.

//IPv4 Validation
//Create a function that takes a string (IPv4 address in standard dot-decimal format) and returns true if the IP is valid or false if it's not. For information on IPv4 formatting, please refer to the resources in the Resources tab.
//Examples
//IsValidIP("1.2.3.4") --> true
//IsValidIP("1.2.3") --> false
//IsValidIP("1.2.3.4.5") --> false
//IsValidIP("123.45.67.89") --> true
//IsValidIP("123.456.78.90") --> false
//IsValidIP("123.045.067.089") --> false
//Notes
//IPv6 addresses are not valid.
//Leading zeros are not valid ("123.045.067.089" should return false).
//You can expect a single string for every test case.
//Numbers may only be between 1 and 255.
//The last digit may not be zero, but any other might.

//Contact List https://edabit.com/challenge/BxiTHaprzDiTvdSA4
//Write a sorting function that takes in an array of names and sorts them by last name either alphabetically(ASC) or reverse-alphabetically(DESC).
//SortContacts(new string[] {
//  "John Locke",
//  "Thomas Aquinas",
//  "David Hume",
//  "Rene Descartes"
//}, "ASC") --> {
//  "Thomas Aquinas",
//  "Rene Descartes",
//  "David Hume",
//  "John Locke"
//}
//// Aquinas (A) < Descartes (D) < Hume (H) < Locke (L)
//SortContacts(new string[] {
//  "Paul Erdos",
//  "Leonhard Euler",
//  "Carl Gauss"
//}, "DESC") --> {
//  "Carl Gauss",
//  "Leonhard Euler",
//  "Paul Erdos"
//}
//// Gauss (G) > Erdos (ER) > Euler (EU)
//SortContacts([], "DESC") --> {}
//SortContacts(null, "DESC") --> {}

// How Much is True?
// Create a function which returns the number of true values there are in an array.
// Examples
// countTrue([true, false, false, true, false]) --> 2
// countTrue([false, false, false, false]) --> 0
// countTrue([]) --> 0
// Notes
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).

//Needle in a Hex String
//Find the index of a string within a hex encoded string.
//You will be given a string which needs to be found in another string which has previously been translated into hex.You will need to return the first index of the needle within the hex encoded string.
//Examples
//FirstIndex("68 65 6c 6c 6f 20 77 6f 72 6c 64", "world") --> 6
//FirstIndex("47 6f 6f 64 62 79 65 20 77 6f 72 6c 64", "world") --> 8
//FirstIndex("42 6f 72 65 64 20 77 6f 72 6c 64", "Bored") --> 0

//Encode Morse
//Create a function that takes a string as an argument and return a non-encoded, encrypted string.
//Examples
//EncodeMorse("EDABBIT CHALLENGE") --> 
//". -.. .- -... -... .. -   -.-. .... .- .-.. .-.. . -. --. ."
//". -.. .- -... -... .. -   -.-. .... .- .-.. .-.. . -. --. ."
//EncodeMorse("HELP ME !") --> 
//".... . .-.. .--.   -- .   -.-.--"
//".... . .-.. .--.   -- .   -.-.--"
//Notes
//Input value can be lower or upper case.
//Input string can have digits.
//Input string can have some special characters (e.g.comma, colon, apostrophe, period, question mark, exclamation mark).

//Is One String in the Other?
//Create a function that takes two strings and returns true if either of the strings appears at the very end of the other string. Return false otherwise.The character * is a wildcard, so it can take the place of any character.
//Examples
//Overlap("ABC", "Ican'tsingmyABC") --> true
//Overlap("abc", "Ican'tsingmyABC") --> true
//Overlap("Ican'tsingmyABC", "abc") --> true
//Overlap("hello world", "hello") --> false
//Overlap("+=", "this should work too +=") --> true
//Overlap("hey", "*********") --> true
//Notes
//Your function should NOT be case sensitive(see example #2).

//Break Point
//A number has a breakpoint if it can be split in a way where the digits on the left side and the digits on the right side sum to the same number.
//For instance, the number 35190 can be sliced between the digits 351 and 90, since 3 + 5 + 1 = 9 and 9 + 0 = 9. On the other hand, the number 555 does not have a breakpoint(you must split between digits).
//Create a function that returns true if a number has a breakpoint, and false otherwise.
//Examples
//BreakPoint(159780) --> true
//BreakPoint(112) --> true
//BreakPoint(1034) --> true
//BreakPoint(10) --> false
//BreakPoint(343)  --> false
//Notes
//Read each digit as only one number.

// Simplified Fractions
// Create a function that returns the simplified version of a fraction.

// Examples
// Simplify("4/6") --> "2/3"
// Simplify("10/11") --> "10/11"
// Simplify("100/400") --> "1/4"
// Simplify("8/4") --> "2"
// Notes
// A fraction is simplified if there are no common factors(except 1) between the numerator and 
// the denominator.For example, 4/6 is not simplified, since 4 and 6 both share 2 as a factor.
// If improper fractions can be transformed into integers, do so in your code (see example #4).

//12 vs 24 Hours
//Create a function that converts 12-hour time to 24-hour time or vice versa.Return the output as a string.
//Examples
//ConvertTime("12:00 am") --> "0:00"
//ConvertTime("6:20 pm") --> "18:20"
//ConvertTime("21:00") --> "9:00 pm"
//ConvertTime("5:05") --> "5:05 am"
//Notes
//A 12-hour time input will be denoted with an am or pm suffix.
//A 24-hour input time contains no suffix.

// Briefcase Lock
// A briefcase has a 4-digit rolling-lock. Each digit is a number from 0-9 that can be rolled either forwards or backwards.
// Create a function that returns the smallest number of turns it takes to transform the lock from the current combination to the target combination. One turn is equivalent to rolling a number forwards or backwards by one.
// To illustrate:
// current-lock: 4089
// target-lock: 5672
// What is the minimum number of turns it takes to transform 4089 to 5672?
// 4 --> 5
// 4 --> 5  // Forward Turns: 1 <- Min
// 4 --> 3 --> 2 --> 1 --> 0 --> 9 --> 8 --> 7 --> 6 --> 5  // Backward Turns: 9
// 0 --> 6
// 0 --> 1 --> 2 --> 3 --> 4 --> 5 --> 6  // Forward Turns: 6
// 0 --> 9 --> 8 --> 7 --> 6  // Backward Turns: 4  <- Min
// 8 --> 7
// 8 --> 9 --> 0 --> 1 --> 2 --> 3 --> 4 --> 5 --> 6 --> 7  // Forward Turns: 9
// 8 --> 7  // Backward Turns: 1  <- Min
// 9 --> 2
// 9 --> 0 --> 1 --> 2  // Forward Turns: 3  <- Min
// 9 --> 8 --> 7 --> 6 --> 5 --> 4 --> 3 --> 2  // Backward Turns: 7
// It takes 1 + 4 + 1 + 3 = 9 minimum turns to change the lock from 4089 to 5672.
// Examples
// MinTurns(4089, 5672) --> 9
// MinTurns(1111, 1100) --> 2
// MinTurns(2391, 4984) --> 10

//Rolling Cipher
//Write a function that accepts a string and an n and returns a cipher by rolling each character forward(n > 0) or backward(n< 0) n times.
//Note: Think of the letters as a connected loop, so rolling a backwards once will yield z, and rolling z forward once will yield a. If you roll 26 times in either direction, you should end up back where you started.
//Examples
//RollingCipher("abcd", 1) --> "bcde"
//RollingCipher("abcd", -1) --> "zabc"
//RollingCipher("abcd", 3) --> "defg"
//RollingCipher("abcd", 26) --> "abcd"
//Notes
//All letters are lower cased.
//No spacing.
//Each character is rotated the same number of times.


//Mangle the String
//Create a function that takes a string and replaces every letter with the letter following it in the alphabet("c" becomes "d", "z" becomes "a", "b" becomes "c", etc). Then capitalize every vowel(a, e, i, o, u) and return the new modified string.
//Examples
//Mangle("Fun times!") --> "GvO Ujnft!"
//Mangle("The quick brown fox.") --> "UIf rvjdl cspxO gpy."
//Mangle("Omega") --> "Pnfhb"
//Notes
//If a letter is already uppercase, return it as uppercase(regardless of being a vowel).
//"y" is not considered a vowel.

//Possible Palindrome
//Create a function that determines whether it is possible to build a palindrome from the characters in a string.
//Examples
//PossiblePalindrome("acabbaa") --> true
//// Can make the following palindrome: "aabcbaa"
//PossiblePalindrome("aacbdbc") --> true
//// Can make the following palindrome: "abcdcba"
//PossiblePalindrome("aacbdb") --> false
//PossiblePalindrome("abacbb") --> false

//Correct Inequality Signs https://edabit.com/challenge/oh2F7YH25bKe2rwmZ 9 minutes
//Create a function that returns true if a given inequality expression is correct and false otherwise.
//Examples
//CorrectSigns("3 < 7 < 11") --> true
//CorrectSigns("13 > 44 > 33 > 1") --> false
//CorrectSigns("1 < 2 < 6 < 9 > 3") --> true
// Steps
// split str into an array => arr
// loop through arr.Length - 3 times
// if i % 2
// int leftNumber = arr[i]
// int rightNumber = arr[i+2]
// if arr[i+1] == "<" && arr[i] >= arr[i+2]
// return false;
// else if (arr[i+1] == ">" && arr[i] <= arr[i+2])
// return false;

//The Karaca's Encryption Algorithm
//Make a function that encrypts a given input with these steps:
//Input: "apple"
//Step 1: Reverse the input: "elppa"
//Step 2: Replace all vowels using the following chart:
//a => 0
//e => 1
//i => 2
//o => 2
//u => 3
//// "1lpp0"
//Step 3: Add "aca" to the end of the word: "1lpp0aca"
//Output: "1lpp0aca"
//Examples
//Encrypt("banana") => "0n0n0baca"
//Encrypt("karaca") => "0c0r0kaca"
//Encrypt("burak") => "k0r3baca"
//Encrypt("alpaca") => "0c0pl0aca"
//Notes
//All inputs are strings, no uppercases and all output must be strings.

//Average Word Length https://edabit.com/challenge/z84RP4x6TqLdW4iva
//Create a function that takes in a sentence and returns the average length of each word in that sentence.Round your result to two decimal places.
//Examples
//AverageWordLength("A B C.") --> 1.00
//AverageWordLength("What a gorgeous day.") --> 4.00
//AverageWordLength("Dude, this is so awesome!") --> 3.80

// Triple + Double = So Much Trouble https://edabit.com/challenge/Pf2mK8M6Av6RFcmtY
// Create a function that takes two integers and returns true if a number repeats three times
// in a row at any place in num1 AND that same number repeats two times in a row in num2.
// Examples
// Trouble(451999277, 41177722899) --> true
// Trouble(1222345, 12345) --> false
// Trouble(666789, 12345667) --> true
// Trouble(33789, 12345337) --> false
// Notes
// You can expect every test case to contain exactly two integers.

//Convert "Zero" and "One" to "1" and "0"
//Create a function that takes a string as an argument.The function must return a string containing 1s and 0s based on the string argument's words. If any word in the argument is not equal to "zero" or "one" (case insensitive), you should ignore it. The returned string's length should be a multiple of 8, if the string is not a multiple of 8 you should remove the numbers in excess.
//Examples
//TextToNumberBinary("zero one zero one zero one zero one") --> "01010101"
//TextToNumberBinary("Zero one zero ONE zero one zero one") --> "01010101"
//TextToNumberBinary("zero one zero one zero one zero one one two") --> "01010101"
//TextToNumberBinary("zero one zero one zero one zero three") --> ""
//TextToNumberBinary("one one") --> ""
//Notes

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