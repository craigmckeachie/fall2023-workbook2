"use strict";

var payRate = 25;
var hoursWorked = 40;
var grossPay = 0;

if (hoursWorked <= 40) {
  grossPay = payRate * hoursWorked;
} else {
  var overtimeHoursWorked = hoursWorked - 40;
  var overtimePayRate = payRate * 1.5;
  regularPay = payRate * 40;
  overtimePay = overtimeHoursWorked * overtimePayRate;
  grossPay = regularPay + overtimePay;
}

console.log(grossPay.toFixed(2));
