let cart = [];

function addToCart(name,price){

cart.push({name,price});

updateCart();

}

function updateCart(){

document.getElementById("cart-count").innerText = cart.length;

let itemsHTML = "";
let total = 0;

cart.forEach(item => {

itemsHTML += `<p>${item.name} - ₹${item.price}</p>`;

total += item.price;

});

document.getElementById("cart-items").innerHTML = itemsHTML;

document.getElementById("total").innerText = "Total Price: ₹" + total;

}

function searchProduct(){

let input = document.getElementById("search").value.toLowerCase();

let products = document.querySelectorAll(".product");

products.forEach(product => {

let name = product.querySelector("h3").innerText.toLowerCase();

if(name.includes(input))
product.style.display = "block";
else
product.style.display = "none";

});

}