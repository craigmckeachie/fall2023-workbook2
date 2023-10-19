"use strict";
const departmentCode = 12;
let departmentName = "";

switch (departmentCode) {
  case 1:
    departmentName = "Marketing";
    break;
  case 5:
    departmentName = "Human Resources";
    break;
  case 10:
    departmentName = "Accouting";
    break;
  case 12:
    departmentName = "Legal";
    break;
  default:
    break;
}

console.log(departmentName);
