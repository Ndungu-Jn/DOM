// ------------------------------------
// createElement()
// appendChild()
// append()
// prepend()
// insertBefore()

/* insertAdjacentElement(
    'beforebegin'
    'afterend'
    'beforeend'
    'afterend',
    element
) */

// removeChild()
// remove()
// ------------------------------------
// const h1 = document.createElement("h1");
// const body = document.body;
// h1.textContent = "Hello World";
// h1.classList.add("greetings");
// console.log(h1);
// body.append(h1);
const ul = document.querySelector("ul");

const newLi = document.createElement("li");
newLi.innerText = "I'm li tag";
ul.appendChild(newLi);
