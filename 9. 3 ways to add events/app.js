// ----------- GREAT WAY-----------
// const best = document.querySelector(".best");
// // best.addEventListener("click", function () {
// //   console.log("Hello wolrd");
// // });

// // another Method -- create a function outside, then call it later.
// // function greeting() {
// //   console.log("Hello World");
// // }
// // best.addEventListener("click", greeting);

// //arrow function way
// best.addEventListener("click", () => console.log("Yellow"));

// ----------- Event (e) Object -----------
const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(input.value);
});
