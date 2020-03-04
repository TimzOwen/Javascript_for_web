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

