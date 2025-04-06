// href
// value
// type
// getAttribute(attrName)
// setAttribute(attrName, value)

const a = document.querySelector("a");
const input = document.querySelector("input");
//Getting attributes
console.log(a.href);
console.log(input.value);
console.log(input.type);

//setting Attributes
a.href = "https://www.youtube.com/@huxnwebdev";
console.log((input.value = "Bye"));
console.log((input.type = "password"));
console.log((input.placeholder = "please provide a strong password"));

//get attribute(atrrName)  -- gets the attribute from a specific element
console.log(input.getAttribute("type"));
console.log(input.getAttribute("placeholder"));

//setAttributes(attrName, value)
console.log(input.setAttribute("placeholder", "Password"));
console.log(input.setAttribute("type", "Password"));
