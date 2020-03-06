//comments in js use double forward slash
/*
This is also comment
*/

//variable in javascript
//uses key words var to declare variables and ends in semicolon
//also uses assignment operator to assign values
var myName;
var a;
var b = 7;
b = a;
console.log(a); //now prints the values of a assigned to b;

//varible initialization with assignment operator
var a = 10;
// Initialize these three variables
var a = 5;
var b = 10;
var c = "I am a ";

// assign task here 

a = a + 2;
b = b + 7;
c = c + " String!";

//case sensitivity;
// js is case sensitive and you should follow the camelCase during naming of your variables
var myName;
var properCamelCase;
var intToAdd;

myName = "Owen";
properCamelCase = "String";
intToAdd = 15;

//basic mathematical operations with JavaScript
myVarSum = 5 + 15;
additionOfTwoNumbers = 10 + 5 + 2;
var difference = 45 - 23;
var product = 10 * 10;
var quotient = 66 / 33;

//basic variables increment and decrement values using ++ operator;
//i++ is the same as i = i+1;
var myNumber;
myNumber = myNumber + 1;
myNumber++;
i = i + 1; // same as i++;

var myVar = 10;
myVar = myVar - 1;
myVar--;

//Decimal numbers with javascript/ floating numbers
var myDecimal = 10.56;
var decimalMultiplication = 2.5 * 2.5;
var decimalDivision = 10.2 / 2.5;

//remainder in java script using modulus "%""
var remainder;
remainder = 15 % 2;

//augmented addition and subtraction js
var a = 2;
var b = 3;
var c = 5;

a += 10;
b += 12;
c += 15;
console.log(a) //gives12
console.log(b) //15
console.log(c) //20

var a = 10;
var b = 9;
var c = 3;

a -= 3;
b -= 5;
c -= 5;
console.log(a) //gives 7
console.log(b) //4
console.log(c) //-2

var a = 5;
var b = 12;
var c = 4.6;

// Only modify code below this line

a *= 5;
b *= 3;
c *= 10;
console.log(a) //gives 25
console.log(b) //36
console.log(c) //46

var a = 48;
var b = 108;
var c = 33;

// Only modify code below this line

a /= 12;
b /= 4;
c /= 11;
console.log(a) //gives 4
console.log(b) // 27
console.log(c) //3

//String variables
// Example
var firstName = "Alan";
var lastName = "Turing";

// Only change code below this line and create your new Name
var myFirstName = "Owen";
var myLastName = "Timz";

//escaping literal quotes in strings using back slashes
var myStr = "I am \"double quoted\" string inside \"double quotes\"";

//quoting strings with single quotes
var myString = '\"I am coming today\" said the master ';

//escape sequences
/*
Code Output
    FirstLine
        \SecondLine
    ThirdLine

 \'	single quote
 \"	double quote
\\backslash
\ n newline
\ r carriage return
\ t tab
\ b word boundary
\ f form feed
*/
var myStr = "FirstLine\n\t\\\SecondLine\nThirdLine";

//String Concatenation with + operator
// =+ operator concatenation
//String with variables concatenation
//appending variables to string
var ourStr = "I come first. " + "I come second.";
var myStr = "This is the start." + " This is the end.";
// += operator concatenation
var ourStr = "I come first. ";
ourStr += "I come second.";

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence."

// using String concatenation with +=
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";

var myName = "owen";
var myStr = "My name is " + myName + " and I am well!";

//using appending to concatenate Strings
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

var someAdjective = "using Android studio";
var myStr = "You can develop mobile apps ";
myStr += someAdjective;

//finding Lengths os Strings character
// Finding lenghts of characters in js 
var firstNameLength = 0;
var firstName = "Ada";
firstNameLength = firstName.length;

// Setup
var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;

//bracket notation to find the first char in a string
//used the indexing array starting from 0
var firstLetterOfFirstName = "";
var firstName = "Ada";
firstLetterOfFirstName = firstName[0];

var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[0];

var firstCharName = " ";
var theNameis = "Owen";
firstCharName = theNameis[0]; // print O as the 1st char 

//String immutabiltiy(Strings once created cannot be modified);
//unless you reassign the content of the var you cannot change and individual char
var myStr = "Jello World";
myStr = "Hello World"; 
console.log(myStr); 

//using bracket notation to find the Nth char in a string 
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];

var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];
console.log(thirdLetterOfLastName)

//using bracket notation to find the last char in a string
// Example
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

var lastName = "TimzOwenisAcoder";
var lastLetterOfLastName = lastName[lastName.length-1];
console.log(lastLetterOfLastName); //prints r

//Use Bracket Notation to Find the Nth-to-Last Character in a String
// Example
var firstName = "AdamOwen";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 5];
console.log(thirdToLastLetterOfFirstName);

var lastName = "LovelaceNotForOwen";
var secondToLastLetterOfLastName = lastName[lastName.length-2];
console.log(secondToLastLetterOfLastName);

//WorldBlanks in javaScript. Uses String contatenation to form the puzzles and filling in the questions
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

var wordBlanks = "My " + myNoun + " is very " + myAdjective + " and it can " + myVerb + " very " + myAdverb + " than me";

//Javascript Arrays of storing more than one String in a variables//ARRAYS:we shall cover;
//Javascript Arrays of storing more than one String in a variable;
//Multidimentional arrays(2D Arrays ) 
//accessing elements of an array
//modifying elements in an arrays
//accessing 2D arrays with indexing
//appending arrays with .push() function //adds to the last part 
//removing last elements with .pop() function 
//manipulating arrays with .shift() function //Removes first element
//manipulating with .unshift() function //adding elements from the front;
var ourArray = ["John", 23];
var myArray = ["Owen", 22];

//2D arrays 
var students = [
["kabarak university", 20, "computer science"],
["Kabarak Primary", 420, "cool Kids"]
]];

//accessing
var ourArray = [50, 60, 70];
var ourData = ourArray[0]; // equals 50

var myArray = [50, 60, 70];
var myData = myArray[0];

//modify
var ourArray = [18, 64, 99];
ourArray[1] = 45; // ourArray now equals [18,45,99].

var myArray = [18, 64, 99];
myArray[0] = 45;
console.log(myArray); //45, 64, 99

//2D indexing access
var myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [
        [10, 11, 12],
        13, 14
    ]
];

// Only change code below this line
var myData = myArray[2][1];
console.log(myData); //8
myData = myArray[3][0][2]; //12

//push
var ourArray = ["Owen", "Kabarak", "cs"];
ourArray.push(["final year", "Eldohub"]);
console.log(ourArray); //owen,kabarak,cs,final year,Eldohub

var myArray = [
    ["John", 23],
    ["cat", 2]
];
myArray.push(["dog", 3]);
console.log(myArray); //['John',23]['cat'2]['dog',3]

//.pop();
var threeArrys = [1, 4, 6];
var oneDown = threeArrys.pop();
console.log(oneDown); // Returns 6
console.log(threeArrays); // Returns [1, 4] 

var ourArray = [1, 2, 3];
var removedFromOurArray = ourArray.pop();
// now equals 3, and ourArray now equals [1,2]
console.log(removedFromOurArray); //3

var myArray = [
    ["John", 23],
    ["cat", 2]
];
var removedFromMyArray = myArray.pop();
console.log(removedFromMyArray); //['cat',2]

//manipulating arrays .shift()
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
//now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

var myArray = [
    ["Owen", 22],
    ["Kabarak", 41]
];
var removedFromMyArray = myArray.shift();
console.log(removedFromMyArray); // ['Owen',22];
console.log(myArray); //['Kabarak',41];

//unshifting
var ourArray = ["Captain", "O", "pilot"];
ourArray.shift(); //["O", "Pilot"]
ourArray.unshift("Happy");
console.log(ourArray); //["Happy", "O", "Pilot"]

var myArray = [
    ["Owen", 22],
    ["CS", 41]
];
myArray.shift();
console.log(myArray); // ['CS',41]
myArray.unshift(["Sean", 42]);
console.log(myArray); // [['Sean',42],['CS',41]]

//CHALLENGE:
//create your shopping List of items, it must contain atLeast 5sub-arrays with atleast two elements in each array
var myList = [
    ["computer",1],
    ["Bar Soaps",2],
    ["Trousers",5],
    ["shirts",10],
    ["Keyboard",2],
    ["Desktop Computers",3]
];
console.log(myList);

UPNEXT: WRITING REUSABLE CODE WITH JS FUNCTIONS;
//WRITING REUSABLE CODES IN JS WITH FUNCTIONS;
//Functions are reusable parts in Js where we call a function mutliple times and still executes the same code;
//Let's get started with simple hello world Function;
//Next, Passing values to functions with parameters 
//Next, Global scope n Function, local varibales are defined within a fn, global def on top of fn and can be called everywhere
//global vs local: the local varibales always takes precedence over global var changing their values;
//returning a value from a function; using return to send back a value from the function. pass values into args of fns n return value 
//undefined Value returned from a function; on processing it the fn processes inner code but the returned value is undefined;
//Assignment with return values; returning a function and using the assignment operator to set new var from the fn result;
function ourReusableFunction() {
  console.log("Hey, I am reusable function, call me");
}
ourReusableFunction(); // Hey, I am reusable function, call me

function reusableFunction(){
  console.log("Hello World, simple Function");
}
reusableFunction(); //Hello World, simple Function


//parameters & arguments
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5


function functionWithArgs(a,b){
  console.log(a+b);
}
functionWithArgs(4,5);

function fnWithArgs(name,age){
  console.log("Your name is " + name + " and you are " + age + " Years old");
}
fnWithArgs("Owen", 22);

function simpleMultiplication(c,d){
  console.log("The results is: " + (c*d));
}
simpleMultiplication(10,5);


//Global var in Functions
var myGlobal = 10; //global

function fun1() {
  oopsGlobal = 5; //local

}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}


//Local scope
function myLocalScope() {
  'use strict';
var myVar = 10;
  console.log(myVar);
}
myLocalScope(); // 10


function innerVariable(){
  var name = "Owen";
  console.log(name);
}
innerVariable(); //Owen

console.log(myVar); // var not defined
console.log(name);// name not defined

//global vs Local;
var someVar = "Food";
function myFun() {
  var someVar = "cars";
  return someVar; // cars and not food
}

var outerWear = "T-Shirt";
function myOutfit() {
var outerWear = "sweater";
  return outerWear;
}

console.log(myOutfit()); //sweater

var animals = "Cows";
function animalsChangedByLocalScope(){
  var animals = "goats";
    return animals;
}
console.log(animalsChangedByLocalScope()); //goats

//return function;
function minusSeven(num) {
  return num - 7;
}
console.log(minusSeven(10)); //3

function plusTen(num){
  return num + 10;
}
console.log(plusTen(10)); // 20

function timesFive(num){
  return num * 5
}
console.log(timesFive(10)); // 50

function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5); // 8


//Undefined values from a return fn
var sum = 0;
function addSum(num) {
  sum = sum + num;
  //no return fn
}
console.log(addSum(3)); //undefined

var sum = 0;
function addThree() {
  sum = sum + 3;
}
function addFive(){
  sum += 5;
}
console.log(addThree()); //undefined
console.log(addFive()); //undefined


//assgnment operator;
var changed = 0;
function change(num) {
  return (num + 5) / 3;
}
changed = change(10);
console.log(changed); // 5

var processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = console.log(processArg(7));

var newFnNameReturned = "Owen Code Ninja";
function newVarNamefunction(name){
  return name + " is " + 22 + " years Old";
}
newFnNameReturned = console.log(newVarNamefunction("Timz Owen"));

var bankBalance = 0;
function checkBalance(amount){
  return (amount += 800)/2;
}
bankBalance = console.log(checkBalance(200)); //500

// UPNEXT: STAND IN LINE;
//This works similar to Queues and stacks in computer sciece;
//Boolean Values:  True/fals , on/off 1/0 
//Conditional statements with if logic (used to make decisions) 
//comparison with equality operator (uses equal sign to do comaprison between operators);
//comaparison with the strict equality operator; (===) has no type of conversion unlke == where we can compare ints n strings by converting them to strings
//practise comparing different values === & == in one function . conversioncacn happens using .typeOf Function.
 function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}
var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 8));
console.log("After: " + JSON.stringify(testArr));


//boolean
function welcomeToBooleans() {
  return true; 
}
console.log(welcomeToBooleans()); // Reurns true

//if statements
//Ex1
function test (myCondition) {
  if (myCondition) {
     return "It was true";
  }
  return "It was false";
}
test(true);  // returns "It was true"
test(false); // returns "It was false"

// Ex2
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}
console.log(ourTrueOrFalse(true));

//ex3
function trueOrFalse(wasThatTrue) {
if(wasThatTrue){
  return "Yes, that was true";
}
return "No, that was false";
}

console.log(trueOrFalse(false));

//comparison
//Ex1
function equalityTest(myVal) {
  if (myVal == 10) {
     return "Equal";
  }
  return "Not Equal";
}
// Ex2
function testEqual(val) {
  if (val==12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
console.log(testEqual(10));
//Ex3
function comapreTwoVal(nums){
  if(nums == 50){
    return "Equal to 50";
  }
  return "Not equal to 500";
}
console.log(comapreTwoVal(50));


//Strict comparison:

function testStrict(val) {
  if (val === 7) { 
    return "Equal";
  }
  return "Not Equal";
}
console.log(testStrict(7)); //Equal


function strictTestNotSameType(num){
  if(num===10){
    return "strictly equal";
  }
  return "Not strictly Eqaul";
}
console.log(strictTestNotSameType("10")); // Not eqal


//practise comapring comparisons 
// comparison 
// Setup
function compareEquality(a, b) {
  if (a === b) { 
    return "Equal";
  }
  return "Not Equal";
}
compareEquality(10, "10"); //not strictly equal. diff types

//comparison with inequality operator
//1 !=  2     // true
//1 != "1"    // false
//1 != '1'    // false
//1 != true   // false
//0 != false  // false
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}
console.log(testNotEqual(10)); //not equal

function notEqualTest(a,b){
  if(a!=b){
    return "Not equal";
  }
  return "Equal";
}
console.log(notEqualTest(10,'10')); //Equal

//comparison with strict inequality operator:
// 3 !==  3    false
// 3 !== '3'   true
// 4 !==  3    true
function testStrictNotEqual(val) {
  if (val !== 17) { 
    return "Not Equal";
  }
  return "Equal";
}
console.log(testStrictNotEqual(10));


function checkStrictEquality(a,b){
  if(a!==b){
    return "Strictly not equal";
  }
  return "strictly Equal";
}
console.log(checkStrictEquality(10, '10')); //not

function checkStrictEquality2(a,b){
  if(a!==b){
    return "Strictly not equal";
  }
  return "strictly Equal";
}
console.log(checkStrictEquality2(10, 10)); //Equal


//comparison with greater than operator
// 5   >  3    true
// 7   > '3'   true
// 2   >  3    false
// '1' >  9    false
function testGreaterThan(val) {
  if (val>100) { 
    return "Over 100";
  }
  if (val >10 ) { 
    return "Over 10";
  }
  return "10 or Under";
}
console.log(testGreaterThan(200)); //over 100

//using greater than / equal to 
//6   >=  6    true
//7   >= '3'   true
//2   >=  3    false
//'7' >=  9    false

function testGreaterOrEqual(val) {
  if (val>=20) {  
    return "20 or Over";
  }
  if (val>=10) {
    return "10 or Over";
  }
  return "Less than 10";
}
console.log(testGreaterOrEqual(50));


function gradingMarks(marks){
  if(marks>=80){
    return "Good";
  }
  if(marks>=60){
    return "Trial";
  }
  return "Failure";
}
console.log(gradingMarks(10)); //failure

//comaprison with lessThan operator;
//2   < 5   true
//'3' < 7   true
//5   < 5   false
//3   < 2   false
//'8' < 4   false
function testLessThan(val) {
  if (val<25) {  
    return "Under 25";
  }
  if (val<55) {  
    return "Under 55";
  }
  return "55 or Over";
}
console.log(testLessThan(10)); // under 25

//Less/ EqualTo
function testLessOrEqual(val) {
  if (val<=12) { 
    return "Smaller Than or Equal to 12";
  }
  if (val<=24) { 
    return "Smaller Than or Equal to 24";
  }
  return "More Than 24";
}
testLessOrEqual(10);


//comparison with Logical and Operator &&
//comparison with Logical and Operator &&
//checks if the number's logic is satisfied
//or operator return a True when either of the values are true otherwise false;
//Else statemets. Execute next command if the value is false, others true
if (num > 5 && num < 10) {
  return "Yes";
}
return "No"; 

function testLogicalAnd(val) {
  if (val >5 && val <20) {
      return "Yes";
  }
  return "No";
}
console.log(testLogicalAnd(100)); // No

function tester(num){
  if(num> 2 && num < 5){
    return "yeeeeees";
  }
  return "Noo";
}
console.log(tester(3)); //yes

function testLogicalAnd(val) {
  if (val <=50 && val >=25) {
      return "Yes";
  }
  return "No";
}
console.log(testLogicalAnd(0)); // No
console.log(testLogicalAnd(24)); // No
console.log(testLogicalAnd(25)); // Yes
console.log(testLogicalAnd(30)); // yes
console.log(testLogicalAnd(50)); // yes
console.log(testLogicalAnd(51)); // No
console.log(testLogicalAnd(75)); // No
console.log(testLogicalAnd(80)); // No

//logical or operator:
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";

//UP-NEXT: 
//If Else statements.
//This are statements used to make decision based on the concept being measured or compared to
//else if. multidimensional choice when we have many values to choose from
//logical order in if/else statements. statements are executed from top to bottom so oder is important
//Chaining if statements. useful when we have multiple if else statements to check from
//To wrap up we will build a golf game:



if (num > 10) {
    return "Bigger than 10";
} else {
    return "10 or Less";
}

function testElse(val) {
    var result = "";
    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or smaller";
    }
    return result;
}
console.log(testElse(4));

//Else if statements
if (num > 15) {
    return "Bigger than 15";
} else if (num < 5) {
    return "Smaller than 5";
} else {
    return "Between 5 and 15";
}


function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}
testElseIf(7);

//logical order: look at this 2 examples which shows how significant order is
//Ex1:
function foo(x) {
    if (x < 1) {
        return "Less than one";
    } else if (x < 2) {
        return "Less than two";
    } else {
        return "Greater than or equal to two";
    }
}
console.log(foo(0)) //returns less than 1

//Ex2:
function bar(x) {
    if (x < 2) {
        return "Less than two";
    } else if (x < 1) {
        return "Less than one";
    } else {
        return "Greater than or equal to two";
    }
}
console.log(bar(0)) //returns less than 2

//correct oder:
function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

console.log(orderMyLogic(7));
console.log(orderMyLogic(4)) // less than 5
console.log(orderMyLogic(8)) // less than 10
console.log(orderMyLogic(12)) //greater/equal to 10;

//chaining if else;
if (condition1) {
    statement1
} else if (condition2) {
    statement2
} else if (condition3) {
    statement3
} else if (condition4) {

    //and conditions continues
} else {
    statementN
}

function testSize(num) {
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else if (num >= 20) {
        return "Huge"
    } else {
        return "Change Me";
    }
}
console.log(testSize(7)); //small
console.log(testSize(18)); //medium

//The game:In the game of golf each hole has a par meaning 
// the average number of strokes a golfer is expected to make in
//order to sink the ball in a hole to complete the play.Depending
// on how far above or below par your strokes are, there is a different nickname.
// Your function will be passed par and strokes arguments.
// Return the correct string according to this table
// which lists the strokes in order of priority;
// top(highest) to bottom(lowest):Strokes	Return


// 1 "Hole-in-one!"
// <=par - 2 "Eagle"
// par - 1 "Birdie"
// par "Par"
// par + 1 "Bogey"
// par + 2 "Double Bogey"
// >=  par + 3 "Go Home!"
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    if (strokes == 1) {
        return name[0];
    } else if (strokes <= par - 2) {
        return names[1];
    } else if (strokes == par - 1) {
        return names[2];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par + 2) {
        return names[5];
    } else if (strokes => par + 3) {
        return names[6];
    } else {
        return "Change Me";
    }
}
console.log(golfScore(5, 4)); // Birdie
console.log(golfScore(8, 2)); // Eagle
console.log(golfScore(2, 10)); // Go Home


//UPNEXT: using Switch statements:
