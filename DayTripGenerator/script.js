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

function RunDayTripGenerator(){
    // main "facade" function for application logic
    var trip = buildDayTrip();
    alert("Welcome to Day Trip Generator!\nClick OK to see your trip!");
    alert(trip);

    
    
}

function randomNumberGenerator(maxValue){
    let randomNumber = Math.random() * maxValue;

    return Math.floor(randomNumber);
}

function generateRandomFeature(tripFeatures){
    var randomIndex = randomNumberGenerator(tripFeatures.length);

    return tripFeatures[randomIndex];
}

function buildDayTrip(){

    let selectedDestination = generateRandomFeature(destinations);
    let selectedRestaurant = generateRandomFeature(restaurants);
    let selectedTransportation = generateRandomFeature(transporationModes);
    let selectedEntertainment = generateRandomFeature(entertainmentForms);

    let entireTrip = "Destination: " + selectedDestination + "\n";
    entireTrip += "Restaurant: " + selectedRestaurant + "\n";
    entireTrip += "Transportation: " + selectedTransportation + "\n";
    entireTrip += "Entertainment: " + selectedEntertainment + "\n";
  
    return entireTrip;

}

RunDayTripGenerator();