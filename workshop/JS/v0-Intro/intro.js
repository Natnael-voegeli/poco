//single line comment
/*
multi
line
comment
*/

/** 
 * DATA TYPES
 * All data types in javaScript
 *--------------------------------------------
*/

/* STRINGS
-------------------------*/
"I'm writing in java script"
'\'string must finish with the same thing it started'


"Wrong string'
'<h1 class="bob" id="dada">I\'m Natu</h1>'


/* NUMBERS
-------------------------*/
3
55
67
345798165903225729
0
1
34.3//this is called decimal or float


//negative numbers
-3
-0.01


/* BOOLEANS 
-------------------------*/
true//also 1
false//also 0


/* NULL & UNDEFINED 
-------------------------*/
let bob = null;
let age = undefined;


/* OBJECT
-------------------------*/
//Array
["Andre","Chris","jamess"]

//Function
function myFunction () {
    return 'something';
}

//Object
{
    "Name": Natnael,
    "Age" : 24,
    "country": "ER",
}


/** 
 * VARIABLES
 * Variables are like boxes / containers
 *--------------------------------------------
*/
// let => when content will/can change 
let name = "Natnael";
let age = 24;

let person = name + age;

// let => when content must not  change 

const days = ["MAonday", "Tuesday","etc"];

// var => the old way, a global variable;

var douch = 3;

// RULES & CONVENTIONS (of naming variables)
let bob = 3; //good
let BOB = 3; //bad
let Bob = 3; //bad

let 0bob = 3; //WRONG, starts with number
let bob the great = 3; //WRONG
let aimé = 3; // wrong, this have special characters

//js is case sensitive language
let bob = 3;
let BOB = 2; // not the same as bob!

//LOng words and the Camel case 
let bob_the_great = 34;// could be like this 
let bobthegreat = 34; //bad practice
let bobTheGreat = 34; //good practice,very used