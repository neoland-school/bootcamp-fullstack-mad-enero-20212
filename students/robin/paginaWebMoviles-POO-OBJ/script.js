

// PESO ES DESCRIPCION

class Product {
    constructor(nombre, imagen, precio, peso) {
        this.nombre = nombre,
            this.imagen = imagen,
            this.precio = precio,
            this.peso = peso
    }

}

const iphone10 = new Product("Iphone 10", "img/iphon10.jpg", 800, "Color verde");
const iphone12 = new Product("Iphone 12", "img/iphone12.jpg", 999, "Color verde");
const samsung10 = new Product("Samsung galaxy 20", "img/samsung20.jpg", 1222, "Color negro");
const samsung12 = new Product("Samsung galaxy 12", "img/samsung12.jpg", 600, "Color rojo");
const xiaomMi = new Product("Xiaomi mi12", "img/xiaomi.png", 700, "Color limon");
const pocoX3 = new Product("Poco X3", "img/poco.jpg", 200, "Color blanco");
const nokia6 = new Product("Nokia6","img/nokia6.jpg",100,"Color negro" )
const realme = new Product("Realme GT", "img/realme.jpg",654,"Color rosa")
const XiaomiRedmi = new Product ("Xiaomi Redmi 10", "img/xiaomiredmi.jpg",349, "Color negro")
const samsungM22 = new Product ("Samsung M22", "img/samsungM22.jpg",179, "Color negro")
const alcatel = new Product ("Alcatel 3L", "img/alcatel.png", 139, "Color azul")

class Carrito {
    constructor() {
        this.products = []
        this.totalPrice = 0
    }
    addProduct(product) {
        this.products.push(product)
        this.totalPrice += product.precio;
    }


}

const carrito = new Carrito()



createProduct(iphone10.nombre, iphone10.imagen, iphone10.precio, iphone10.peso)
createProduct(iphone12.nombre, iphone12.imagen, iphone12.precio, iphone12.peso)
createProduct(samsung10.nombre, samsung10.imagen, samsung10.precio, samsung10.peso)
createProduct(xiaomMi.nombre, xiaomMi.imagen, xiaomMi.precio, xiaomMi.peso)
createProduct(pocoX3.nombre, pocoX3.imagen, pocoX3.precio, pocoX3.peso)
createProduct(nokia6.nombre, nokia6.imagen, nokia6.precio, nokia6.peso)
createProduct(realme.nombre, realme.imagen, realme.precio, realme.peso)
createProduct(XiaomiRedmi.nombre, XiaomiRedmi.imagen, XiaomiRedmi.precio, XiaomiRedmi.peso)
createProduct(samsungM22.nombre, samsungM22.imagen, samsungM22.precio, samsungM22.peso)
createProduct(alcatel.nombre, alcatel.imagen, alcatel.precio, alcatel.peso)


function createProduct(nombre, imagen, precio, peso) {

    
    let container = document.querySelector("main");
   

    let article = document.createElement("article");
    article.classList.add('article');

    let divImg = document.createElement('div');
    divImg.classList.add("imgDiv")
    let img = document.createElement('img');
    img.setAttribute("src", imagen);
    img.setAttribute('class', 'img');

    let divObj = document.createElement('div');
    divObj.classList.add('object')

    let h3 = document.createElement('h3');
    h3.textContent = nombre;

    let p = document.createElement('p');
    p.textContent = peso;




    let divPrice = document.createElement('div');
    divPrice.classList.add('price')

    let h1Price = document.createElement('h1')
    h1Price.classList.add("h1Price")
    h1Price.textContent = "Precio:";


    let pPRice = document.createElement('p');
    pPRice.classList.add("item-price")
    pPRice.textContent = `${precio}€`;


    let divInput = document.createElement('div');
    divInput.classList.add('input-container');

    let button = document.createElement("button");
    button.classList.add("btn");
    button.textContent = "Añadir carrito";



    document.querySelector("body").appendChild(container)
    container.appendChild(article);

    article.appendChild(divImg);
    divImg.appendChild(img);

    article.appendChild(divObj);
    divObj.appendChild(h3);
    divObj.appendChild(p);


    article.appendChild(divPrice);
    divPrice.appendChild(h1Price);
    divPrice.appendChild(pPRice);

    article.appendChild(divInput);
    divInput.appendChild(button)


}





const addShopping = document.querySelectorAll('.btn');

addShopping.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', addToCartClicked);
})

const comprarBtn = document.querySelector(".purchase");
comprarBtn.addEventListener("click", comprarBtnClicked)

const contenedorCart = document.querySelector(".subheader-page")


function addToCartClicked(event) {
    const button = event.target;
    const item = button.closest(".article");


    const itemTitle = item.querySelector('h3').textContent
    const itemPrice = item.querySelector('.item-price').textContent
    const itemImg = item.querySelector('.img').src

    addItemToShoppingCart(itemTitle, itemPrice, itemImg)
}

function addItemToShoppingCart(itemTitle, itemPrice, itemImg) {

    


    const addShoppingCartFila = document.createElement('div');
    const shoppingCartConten = `

<div class="fila-cart">
    <div>
        <div class="name">
            <h3>${itemTitle}</h3>
            <img src="${itemImg}" class="img">
        </div>
    </div>


    <div>   
        <div class="fila-cart-price">
            <p class="item-price">${itemPrice}</p>
        </div>
    </div>

    <div>
        <div class ="cancel">
            <input type="number" class="input shoopingCartItemQuantity" min="1" value="1">
            <i class="fas fa-minus-square"></i>
        </div>
    </div>
</div>
    `;

    addShoppingCartFila.innerHTML = shoppingCartConten;
    contenedorCart.append(addShoppingCartFila);

    addShoppingCartFila.querySelector('.fa-minus-square').addEventListener('click', removeShoppingCart)

    addShoppingCartFila.querySelector(".shoopingCartItemQuantity").addEventListener('change', quantityChange)

    updateShoppingCart()
  
}

function updateShoppingCart(){
    let total = 0;
    const shoppingCart = document.querySelector('.totalMoney')
    
    const shoppingItems = document.querySelectorAll(".fila-cart")
    
    shoppingItems.forEach(filaCart => {
        const shoppingCartItem = filaCart.querySelector(".item-price");
        const shoppingCartItemPrice = Number(shoppingCartItem.textContent.replace('€', ''));
        
        const quantityItem = filaCart.querySelector(".shoopingCartItemQuantity");
        const quantityValue = Number(quantityItem.value);

        total = total + shoppingCartItemPrice * quantityValue;
        
        
    })

    shoppingCart.innerHTML = `${total}€ `
}


function removeShoppingCart(event){
    const buttonClicked = event.target;
    buttonClicked.closest('.fila-cart').remove()
    updateShoppingCart()
}

function quantityChange(event){
    const quantityClicked = event.target;

    updateShoppingCart()
    
}

function comprarBtnClicked() {
    contenedorCart.innerHTML = ""
}


document.addEventListener("keyup", e => {
    
    if (e.target.matches("#search")){
        document.querySelectorAll(".article").forEach(movil => {console.log(e.name)
            movil.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
            ? movil.classList.remove("filter") 
            :movil.classList.add("filter")
        })
    }
} )