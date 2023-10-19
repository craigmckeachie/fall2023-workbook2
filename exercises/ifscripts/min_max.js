"use strict";

var a = 1;
var b = 2;
var c = 3;
var lowest;

if (a < b && a < c) {
  console.log("min a: " + a);
} else if (b < a && b < c) {
  console.log("min b: " + b);
} else {
  console.log("min c: " + c);
}

if (a > b && a > c) {
  console.log("max a: " + a);
} else if (b > a && b > c) {
  console.log("max b: " + b);
} else {
  console.log("max c: " + c);
}
