let count = 0;

const cartCount = document.getElementById("cart-count");
const buttons = document.querySelectorAll(".add-cart");

buttons.forEach(button => {

button.addEventListener("click", () => {

count++;

cartCount.innerText = count;

button.innerText = "Added ";

button.style.background = "#e9c349";
button.style.color = "#121414";

setTimeout(() => {
button.innerText = "Add to Bag";
button.style.background = "transparent";
button.style.color = "#e9c349";
}, 1500);

});

});

console.log("L'ESSENCE Loaded Successfully");