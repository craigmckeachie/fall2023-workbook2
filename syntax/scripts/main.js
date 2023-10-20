function greet(){
    let dog = "Leo"
    let heading = document.getElementById("title")
    console.log(heading);

    let myInput = document.getElementById("myInput");
    let currentValue = myInput.value;
    console.log(currentValue);
    myInput.value = "Ronald"
}
greet();