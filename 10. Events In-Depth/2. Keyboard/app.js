// https://www.w3schools.com/jsref/obj_keyboardevent.asp
const input = document.querySelector("input");

input.addEventListener("keypress", () => {
  console.log("key Pressed");
});

//USEFUL PROPERTIES AND METHODS
input.addEventListener("keypress", (e) => {
  console.log(e.charCode);
  console.log(e.code);
  console.log(e.ctrlKey);
});
