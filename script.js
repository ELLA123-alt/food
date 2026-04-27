function goToMenu() {
    window.location.href = "menu.html";
}

function orderItem(food) {
    localStorage.setItem("food", food);
    window.location.href = "order.html";
}

function placeOrder(event) {
    event.preventDefault();
    document.getElementById("message").innerText = "✅ Order placed!";
}

// MENU DATA (easy to update)
const menu = [
    { name: "Burger", price: 300, image: "images/burger.jpg" },
    { name: "Pizza", price: 800, image: "images/pizza.jpg" },
    { name: "Fries", price: 200, image: "images/fries.jpg" }
];

function loadMenu() {
    let container = document.getElementById("menu-container");
    if (!container) return;

    menu.forEach(item => {
        container.innerHTML += `
            <div class="item">
                <img src="${item.image}" width="150">
                <h3>${item.name}</h3>
                <p>Ksh ${item.price}</p>
                <button onclick="orderItem('${item.name}')">Order</button>
            </div>
        `;
    });
}

window.onload = loadMenu;