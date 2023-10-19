"use strict";

var studentName = "Craig";
var studentMajorCode = "ENG";

console.log("Student: " + studentName);

if (studentMajorCode == "BIOL") {
  console.log("Major: Biology");
  console.log("Advising Location: Science Building, Room 310");
}else if (studentMajorCode == "CSCI") {
  console.log("Major: Computer Science");
  console.log("Advising Location: Shepard Hall, Room 314");
} else if (studentMajorCode == "ENG") {
  console.log("Major: English");
  console.log("Advising Location: Kerr Hall, Room 201");
}