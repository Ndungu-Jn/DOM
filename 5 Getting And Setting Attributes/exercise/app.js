// 1. Select the anchor tag
const anchor = document.querySelector("a");
console.log(anchor);
// 2. Use getAttribute(attrName) to check the attribute.
console.log(anchor.getAttribute("href"));
// 3. Select a-two & set "href" attribute
const a2 = document.querySelector(".a-two");
a2.setAttribute("href", "https://youtube.com/@huxnwebdev");
// setAttribute(attrName, value)
