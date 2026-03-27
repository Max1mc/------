// загрузка товаров

if(document.querySelector(".products-grid")){

fetch("bd.json")
.then(res=>res.json())
.then(data=>{

const container=document.querySelector(".products-grid")

data.products.forEach(product=>{

const card=document.createElement("div")
card.className="card"

card.innerHTML=`
<img src="${product.image}">
<h3>${product.name}</h3>
<p>${product.price} грн</p>
<button onclick="addToCart(${product.id})">Купити</button>
`

container.appendChild(card)

})

})

}


// добавление в корзину

function addToCart(id){

fetch("bd.json")
.then(res=>res.json())
.then(data=>{

const product=data.products.find(p=>p.id===id)

let cart=JSON.parse(localStorage.getItem("cart")) || []

cart.push(product)

localStorage.setItem("cart",JSON.stringify(cart))

alert("Товар додано у кошик")

})

}


// отображение корзины

if(document.querySelector(".cart-items")){

let cart=JSON.parse(localStorage.getItem("cart")) || []

const container=document.querySelector(".cart-items")

cart.forEach((item,index)=>{

const div=document.createElement("div")

div.className="cart-item"

div.innerHTML=`
<span>${item.name}</span>
<span>${item.price} грн</span>
<button onclick="removeItem(${index})">Видалити</button>
`

container.appendChild(div)

})

}


// удаление

function removeItem(index){

let cart=JSON.parse(localStorage.getItem("cart"))

cart.splice(index,1)

localStorage.setItem("cart",JSON.stringify(cart))

location.reload()

}