var costOfFood = 0;
var app = 9;
var entree = 19;
var drink = 11;
var dessert = 6;
var tipAmount = 20;
var tipAmountAsPercentage = 20 / 100;

costOfFood = app + entree + drink + dessert;
var tipAmount = costOfFood * tipAmountAsPercentage;

console.log("The tip on " + costOfFood + " food bill is " + tipAmount + ".");
