const productList = document.getElementById("product-list");

let products;

fetch("http://localhost:3000/products")
    .then(response => response.json())
    .then(data => {
        const products = data;
        for (const product of products) {
            product.discountedPrice = calculateDiscountedPrice(product.cost);
        }
        products.forEach(product => {
            const productElement = document.createElement("div");
            productElement.innerHTML = `
        <h2>${product.name}</h2>
        <img src="${product.image}" alt="${product.name}">
        <p>Cost: $${product.cost}</p>
        <p>Quantity: ${product.quantity}</p>
        <p>
        <s>${product.cost}$</s>
        ${product.discountedPrice}$
        </p>
      `;
            productList.appendChild(productElement);
        });
        for (const product of products) {
            product.discountedPrice = calculateDiscountedPrice(product.price);
        }
    });

function calculateDiscountedPrice(price) {
    return price * 0.75;
}

const duration = 3 * 24 * 60 * 60 * 1000; 
const endTime = Date.now() + duration;

const timer = document.getElementById("timer");

setInterval(() => {
    console.log('1111')
  const remainingTime = endTime - Date.now();
  if (remainingTime <= 0) {
    clearInterval();
    timer.innerHTML = "Акция закончилась.";
  } else {
    const remainingTimeInSeconds = Math.ceil(remainingTime / 1000);
    timer.innerHTML = `Акция закончится через ${remainingTimeInSeconds} секунд.`;
  }
}, 1000);