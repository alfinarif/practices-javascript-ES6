// RE-START JAVASCRIPT ONCE AGAIN
// console.log("Hello World");
// "use strict"
// myName();

// function myName(){
//     let name = "Alfin Arif"
// }


// let poorCountry = ["Bangladesh", "Srilanka"];
// let richCountry = [...poorCountry, "America", "Canada"];

// console.log(richCountry);


// REST PARAMETER
// function Calculation(a, b, ...numbers){
//     let sum = 0;
//     for(let i=0; i < numbers.length; i++){
//         sum += numbers[i];
//     }

//     console.log(a, b, sum);

// }

// Calculation(10, 20, 1, 2, 3, 4, 5);




// DYNAMIC FUNCTION
// const names = function(name){
//     return name;
// }

// console.log(names("Alfin Arif"));



// SIMPLE FOR LOOP
// for(let i=0; i<5; i = i+1){
//     console.log(i);
// }


// FOR IN LOOP
// const myObject = {name: "Alfin Arif", age: 25, country: "Bangladesh"};

// for(let person in myObject){
//     console.log(myObject[person]);
// }



// DECISION MAKING if else statement
// const myObject = {name: "Alfin Arif", age: 25, country: "Bangladesh"};

// if (myObject.country == "Bangladesh"){
//     console.log("I am from Bangladesh");
// } 
// else if(myObject.country == "Pakistan"){
//     console.log("I am from Pakistan")
// }
// else if(myObject.country == "USA"){
//     console.log("I am from USA");
// }
// else{
//     console.log("Where are you from?");
// }



// ES6 FUNCTION DECLARATION
// Simple Function
function simpleFunc () {
    let x = 10;
    let y = 10;
    let sum = x + y;
    console.log(sum);
}

// simpleFunc();


// Parameterized Function
function paraFunc (a, b){
    let sum = a + b;
    console.log(sum);
}

// paraFunc(10, 20);


// Rest Parameters Function
function restParaFunc (...props){
    console.log(props[5]);
}

// restParaFunc(1, 3, 5, 2, 7, "Alfin", "Arif");


// Function Return Type
function returnFunc (){
    return "I am from Bangladesh";
};
const myFunc = returnFunc(); // we can store the function in a variable;
// console.log(myFunc);



// Anonymous Function
const anonymousFunc = function(){
    return "This is an anonymous function";
}
// console.log(anonymousFunc());


// Arrow Function
const arrowFunc = () => {
    return "This is an arrow function";
}
console.log(arrowFunc());



