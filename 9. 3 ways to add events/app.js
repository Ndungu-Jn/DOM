// ----------- GREAT WAY-----------
const best = document.querySelector(".best");
// best.addEventListener("click", function () {
//   console.log("Hello wolrd");
// });

// another Method -- create a function outside, then call it later.
function greeting() {
  console.log("Hello World");
}
best.addEventListener("click", greeting);

// ----------- Event (e) Object -----------
