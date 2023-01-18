import "../scss/app.scss";
const R = require("ramda");

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");
  const numbersArray = [1, 3, 4, 5, 6, 7];
  const isEven = (n) => n % 2 === 0;
  const filteredArray = numbersArray.filter((number) => {
    return isEven(number);
  });

  filteredArray.forEach(number => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(number));
    ul.appendChild(li);
  })
});
