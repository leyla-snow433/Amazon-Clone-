const products = [
    { id: 1, name: "Wireless Headphone", price: 2000, image: "images/Wireless headphone.jpeg" },
    { id: 2, name: "Smart Phone", price: 250000, image: "images/phone.webp" },
    { id: 3, name: "Watch", price: 89000, image: "images/ghadi.webp" },
    { id: 4, name: "Speaker", price: 1000, image: "images/speaker.jpeg" },
    { id: 5, name: "Macbook M3 Air", price: 349000, image: "images/laptop.jpg" }
   
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderProduct() {
    const list = document.getElementById("product-list");
    products.forEach(product => {
        const div = document.createElement("div")
        div.className = "product";
        div.innerHTML = `
        <img src ="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        list.appendChild(div);
    });
}

function addToCart(id){
    const product = products.find(p => p.id === id);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}
function updateCartCount(){
    document.getElementById("cart-count").textContent =  cart.length;
}
renderProduct();
updateCartCount();
0