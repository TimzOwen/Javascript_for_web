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

