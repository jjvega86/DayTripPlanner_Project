"use strict"
//TO DO:
// Create arrays for destination, restaurant, mode of transporation, and form of entertainment
// Write functions to randomly generate trip features. 
// Display the randomly generated trip to the user
// Prompt for re-generate random features and confirm that the trip is complete
// Display "Complete" in console to signify end of running script


let destinations = ["Virginia Beach", "Williamsburg", "Charlottsville", "Washington DC", "Richmond"];
let restaurants = ["Enoteca Italian", "Gus's Fried Chicken", "Tim's Chinese Food", "The Table", "Stir Crazy"];
let transporationModes = ["car", "bike", "train", "airplane"];
let entertainmentForms = ["live music", "zoo visit", "wine tasting", "brewery tour", "live sports"];

function mainMenu(){
    let userInput = prompt("Welcome to Day Trip Generator!");
}

function randomNumberGenerator(maxValue){
    let randomNumber = Math.random() * maxValue;

    return Math.floor(randomNumber);
}

function generateRandomDestination(destinations){
    var randomIndex = randomNumberGenerator(destinations.Length);

    return destinations[randomIndex];
}
