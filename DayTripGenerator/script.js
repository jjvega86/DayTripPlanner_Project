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
    alert(displayTrip(trip));  
    regenerateFeatures(trip); 
    
}

function regenerateFeatures(trip){
    let doneSelecting = false;

    while(doneSelecting === false){
        var input = prompt("Would you like to re-generate any of these features? Yes or No").toLowerCase();

        switch(input){
            case "yes":
                break;
            case "no":
                doneSelecting = true;
                break;
            default:
                regenerateFeatures();
        }

    } 

    alert("Your final trip is: \n" + trip);
}

function selectFeatureToRegenerate(trip){
    var input = prompt("Pick which feature you'd like to change! <Destination, Restaurant, Transportation, Entertainment").toLowerCase();
    let selectedFeature;
    switch(input){
        case "destination":
            selectedFeature = generateRandomFeature(destinations);
            modifyTrip(0, selectedFeature, trip);
        case "restaurant":
            selectedFeature = generateRandomFeature(restaurants);
        case "transportation":
            selectedFeature = generateRandomFeature(transporationModes);
        case "entertainment":
            selectedFeature = generateRandomFeature(entertainmentForms);
        default:
            selectFeatureToRegenerate(trip);
    }

    return selectedFeature;
}

function modifyTrip(featureType, selectedFeature, trip){
    trip[featureType] = selectedFeature;
    return trip;
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

    let tripArray = [];
    tripArray.push(selectedDestination);
    tripArray.push(selectedRestaurant);
    tripArray.push(selectedTransportation);
    tripArray.push(selectedEntertainment);
  
    return tripArray;

}

function displayTrip(trip){
    let entireTrip = "Destination: " + trip[0] + "\n";
    entireTrip += "Restaurant: " + trip[1] + "\n";
    entireTrip += "Transportation: " + trip[2] + "\n";
    entireTrip += "Entertainment: " + trip[3] + "\n";

}

RunDayTripGenerator();