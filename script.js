const products = [
  { id: 1, name: "Glossy Pink", price: 500, img: "https://i.imgur.com/AZBlRKh.png" },
  { id: 2, name: "Matte Rose", price: 650, img: "https://i.imgur.com/SxKJdZ0.png" },
  { id: 3, name: "Nude Crush", price: 700, img: "https://i.imgur.com/XYCkpMv.png" }
];

const productList = document.getElementById("product-list");
const cartPopup = document.getElementById("cart-popup");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");

let cart = [];

function renderProducts() {
  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>KSH ${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCartUI();
}

function updateCartUI() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item, i) => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - KSH ${item.price}`;
    cartItems.appendChild(li);
  });
  cartCount.textContent = cart.length;
  cartTotal.textContent = total;
}

document.getElementById("cart-btn").onclick = () => {
  cartPopup.classList.toggle("hidden");
};

function closeCart() {
  cartPopup.classList.add("hidden");
}

function checkout() {
  alert("Checkout feature coming soon!");
}

renderProducts();