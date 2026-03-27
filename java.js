let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

// ДОБАВИТЬ В КОРЗИНУ С РАЗМЕРОМ
function addToCart(name, price, size = "M") {
    cart.push({name, price, size});
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Додано в кошик ✅");
}

// ДОБАВИТЬ В ОБРАНЕ
function addToWishlist(name, price) {
    wishlist.push({name, price});
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert("Додано в обране ❤️");
}

// КОРЗИНА
function renderCart() {
    const list = document.getElementById("cart-list");
    if (!list) return;

    list.innerHTML = "";
    let total = 0;

    cart.forEach((item, i) => {
        total += item.price;

        list.innerHTML += `
            <div class="cart-item">
                <span>${item.name} (${item.size})</span>
                <span>${item.price} грн</span>
                <button onclick="removeCart(${i})">❌</button>
            </div>`;
    });

    document.getElementById("total").innerText =
        "Загальна сума: " + total + " грн";
}

function removeCart(i){
    cart.splice(i,1);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
}

// ОБРАНЕ
function renderWishlist(){
    const list = document.getElementById("wishlist-list");
    if(!list) return;

    list.innerHTML = "";

    wishlist.forEach((item,i)=>{
        list.innerHTML += `
            <div class="cart-item">
                <span>${item.name}</span>
                <span>${item.price} грн</span>
                <button onclick="removeWish(${i})">❌</button>
            </div>`;
    });
}

function removeWish(i){
    wishlist.splice(i,1);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    renderWishlist();
}

// ОФОРМЛЕНИЕ
function checkout(){
    if(cart.length === 0){
        alert("Кошик порожній");
    } else {
        alert("Замовлення оформлено ✅");
        cart = [];
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
    }
}

// ДЛЯ PRODUCT PAGE
function addProductToCart(name, price) {
    const size = document.getElementById("size").value;
    addToCart(name, price, size);
}

// INIT
renderCart();
renderWishlist();