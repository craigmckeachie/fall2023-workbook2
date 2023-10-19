"use strict";

var costOfFood = 0;
var app = 9;
var entree = 19;
var drink = 11;
var dessert = 6;
var tipPercentage = 20;

costOfFood = app + entree + drink + dessert;
var tipAmount = costOfFood * (tipPercentage / 100);

console.log("The tip on " + costOfFood + " food bill is " + tipAmount + " . ");

