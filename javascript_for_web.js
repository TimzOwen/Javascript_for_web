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
