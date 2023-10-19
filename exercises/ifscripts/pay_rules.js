"use strict";

var payRate = 25;
var hoursWorked = 40;
var grossPay = 0;
var standardHours = 40;
var overtimePayRateMultiplier = 1.5;

if (hoursWorked <= standardHours) {
  grossPay = payRate * hoursWorked;
} else {
  var overtimeHoursWorked = hoursWorked - standardHours;
  var overtimePayRate = payRate * overtimePayRateMultiplier;
  var standardPay = payRate * standardHours;
  overtimePay = overtimeHoursWorked * overtimePayRate;
  grossPay = standardPay + overtimePay;
}

console.log(grossPay.toFixed(2));
