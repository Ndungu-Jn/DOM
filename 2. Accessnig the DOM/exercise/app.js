// 1. Select element h4 which holds text of "Red" by using getElementsByTagName
let color = document.getElementsByTagName("h4");
console.log(color);
// 2. Select div with the class of "green" which holds text (Green) by using getElementsByClassName
let green = document.getElementsByClassName("green");
console.log(green);
// 3. Select div with the ID of blue which holds the text "Blue" by using getElementsByIdName
let blue = document.getElementById("blue");
console.log(blue);
// 4. Select div which has the class & Id of "yello" by using querySelector()
const yellow = document.querySelector("#yellow");
console.log(yellow);
// 5. Select all the elements which has the class of "teal" by using querySelectorAll
const allteal = document.querySelectorAll(".teal");
console.log(allteal);
