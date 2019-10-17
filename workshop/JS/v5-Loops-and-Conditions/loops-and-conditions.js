//CONDITION: what to do depending on the weather
// let weather = "sunny"; //sunny,rainy,cloudy,snowy

// if (weather=="sunny"){
// console.log("Take your sun glasses");
// }

// else if (weather=="rainny"){
//     console.log("Take your umbrella");
//     }

   
// else if (weather=="cloudy"){
//         console.log("...");
//         }

// else if (weather=="snowy"){
//             console.log("go Skiing");
//             }

// else {
// console.log("Don't know yet")
// }


//AGE CONDITION 
function calculateAge(birthYear){

let currentYear= new Date().getFullYear();
let age = currentYear - birthYear;

let msg = "";

if(age< 6){
    msg = "drink your milk"
}

else if(age >= 6 && age < 18){
   msg = "Go to sleep, you have school tommorrow.";
}

else if (age>=18 && age< 40){
    msg = "Work you can do it !";
}

else if (age>=40 && age<=65){
    msg = "you win 1 million dollors !";
}


else if(age > 65){
    msg = "Don't forget to take your pills!";
    }

    else{
        msg = "Let's Party!"
    }

return "You have " + age + ": " + msg; // you have 24: Let's party!
}

// console.log(calculateAge(1995));
// console.log(calculateAge(1904));

// OR COMPARISON OPERATORS 
//COMPARISON OPERATORS
/*
== //=>equality
|| //OR
&& //AND

>
>=
<
<=
*/


// LOOPS ------------------------------
// let num = 100;

// for(let i = 1; i <= num; i++){
// console.log(i);
// }
// AN ARRAY
let names = ["Maddison","Werner","Saul","Dembele","Costa","Kane"];
// console.log(names.length );

// FOR LOOP with array length
// for(let i = 0; i < names.length; i++){
//     console.log(names[i]);

// }


// FOR EACH LOOP -with anonymus function
// names.forEach (function(item,index){
// console.log(index,item);

// });
// // FOR EACH LOOP - with a custom function
// function iterateNames(item){
//     console.log(item);
// } 



// EXERCISE : LOOP INSIDE AN ARRAY CONTAINING OBJECTS

let myTodos = [
    {
        text: "Item 1",
        completed: false
    },
    {
        text: "Item 2",
        completed: true
    },
    {
        text: "Item 3",
        completed: true
    },
    {
        text: "Item 4",
        completed: false
    },
];


// USE FO TO DISPLAY THE TODOS TEXTS 
// for(let i = 0; i < myTodos.length; i++){
//     console.log(myTodos[i].text);
// };


// USE "FOR EACH" TO DISPLAY  
 myTodos.forEach(function(item) {
// // CLASSIC APPROACH
let completedStr = "( )";

if(item.completed == true){
completedStr = "(x)";
}
else{
    completedStr ="( )"
}

// TERNARY OPERATOR
let completedStr2 = (item.completed) ? "(x)" : "( )";
    // console.log(completedStr2,item.text);
});


