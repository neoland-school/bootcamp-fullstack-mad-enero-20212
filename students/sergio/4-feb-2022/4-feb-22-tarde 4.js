// EJERCICIO 1 //

class TypeProducts {
    constructor(name,imag,price){
        this.name = name;
        this.imag = imag;
        this.price = price;
        this.contador = 0;
    }
}



// EJERCICIO 2 //
const bici_id1 = new TypeProducts('Kestrell 4000 LTD Ultegra Di2 2013','bicicleta.jpg',519);
const lego_id1 = new TypeProducts('LEGO CITY POLICE STATION', 'lego.jpg', 59);
const ipad_id1 = new TypeProducts('Ipad Mini with Retina Display 32GB', 'ipad.jpg',549);
const shoes_id1 = new TypeProducts('Nike Air Max Bolt', 'shoes.jpg', 84.99);
const tv_id01 = new TypeProducts('TV AU7105 Crystal UHD 125 cm 50" 4K Smart TV (2021)','tv.jpg',579);


let allProduct = [];
allProduct.push(bici_id1,lego_id1,ipad_id1,shoes_id1,tv_id01)
// EJERCICIO 3 //

// CREO CARDS DE LOS ELEMENTOS //


// UL CATALOGO //
const cards_container = document.createElement('div');
document.body.appendChild(cards_container);
cards_container.classList.add('cards_container');

function HtmlOutPut(obj){ 
    obj.forEach((e,i)=> {
    
            // DIV TYPE_PRODUCT /
            const item = document.createElement('div');
            item.classList.add('type_product');
            cards_container.appendChild(item);
        
            // DIV IMAGEN //   
            const card_img = document.createElement('div');
            card_img.classList.add('card_img'); 
            item.appendChild(card_img);

            // IMAGEN DE LOS PRODUCTOS //
            const card_img_jpg = document.createElement('img');
            card_img_jpg.classList.add('card_img_jpg');
            card_img_jpg.setAttribute('src', e.imag);
            card_img.appendChild(card_img_jpg);
           
        
            // H3 DESCRIPCION //
            const card_description = document.createElement('h3');
            card_description.classList.add('card_description');
            item.appendChild(card_description);
            card_description.textContent = e.name;


            // DIV PRICE //
            const card_total = document.createElement('div');
            card_total.classList.add('card_total');
            item.appendChild(card_total);

            // P PRICE //
            const card_priceUd = document.createElement('p');
            card_priceUd.classList.add('card_price');
            card_total.appendChild(card_priceUd);
            card_priceUd.textContent =`$ ${e.price}`;


            // DIV BOTTOM //
            const card_button = document.createElement('div');
            card_button.classList.add('card_button');
            card_total.appendChild(card_button);

            // BOTTOM //
            const inside_carShoping = document.createElement('button');
            inside_carShoping.classList.add('inside_carShoping');
            card_button.appendChild(inside_carShoping);

            inside_carShoping.addEventListener('click', e => {
                e.preventDefault();
                car.addProduct(obj[i]);
                console.log(car.products);
                
            });



        });
         /*
            // aqui llamo al evento, e, porque es el e de la array, dejo el () vacio porque los eventos no escuchan objetos //
            buttom_item.addEventListener('click', () => {
                e.votes = e.votes + 1;
                p_n_votos_item.textContent = e.votes;
            });*/
};

HtmlOutPut(allProduct);
console.log(allProduct);


// DIV CARRITO COMPRA //
const cart_shopping_container = document.createElement('div');
document.body.appendChild(cart_shopping_container);
cart_shopping_container.classList.add('cart_shopping_container');


function HtmlOutPutCarShopping(array) {  

        // DIV card_product_cart //
    const card_product_cart = document.createElement('div');
    card_product_cart.classList.add('card_product_cart');
    cart_shopping_container.appendChild(card_product_cart);

        // DIV imag_prodcut_cart //
    const imag_prodcut_cart = document.createElement('div');
    imag_prodcut_cart.classList.add('imag_prodcut_cart');
    card_product_cart.appendChild(imag_prodcut_cart);

    // IMAGEN DE LOS PRODUCTOS //
    const card_img_cart = document.createElement('img');
    card_img_cart.classList.add('card_img_cart');
    imag_prodcut_cart.appendChild(card_img_cart);
    card_img_cart.setAttribute('src', array.imag);

    // DIV info_product_cart //
    const info_product_cart = document.createElement('div');
    info_product_cart.classList.add('info_product_cart');
    card_product_cart.appendChild(info_product_cart);

    // P descrip_product_cart //
    const descrip_product_cart = document.createElement('p');
    descrip_product_cart.classList.add('descrip_product_cart');
    info_product_cart.appendChild(descrip_product_cart);
    descrip_product_cart.textContent = `${array.name}`;

    // DIV para los dos precios //
    const div_prices = document.createElement('div');
    div_prices.classList.add('div_prices');
    info_product_cart.appendChild(div_prices)

    // P price_product_cart //
    const price_product_cart = document.createElement('p');
    price_product_cart.classList.add('price_product_cart');
    div_prices.appendChild(price_product_cart);
    price_product_cart.textContent = `- $ ${array.price} -`

    // P PRICE //
    const card_priceTot = document.createElement('p');
    card_priceTot.classList.add('card_priceTot');
    div_prices.appendChild(card_priceTot);
    card_priceTot.textContent = '$ 0';


    // BUTTON q_buttons //
    const q_buttons = document.createElement('div');
    q_buttons.classList.add('q_buttons');
    card_product_cart.appendChild(q_buttons);

    // BUTTON + //
    const plus_q = document.createElement('button');
    plus_q.classList.add('plus_q');
    q_buttons.appendChild(plus_q);
    plus_q.textContent = '+';

    // P q_number //
    const q_number = document.createElement('p');
    q_number.classList.add('q_number');
    q_buttons.appendChild(q_number);
    q_number.textContent = `- ${array.contador} ud -`;
    

    // BUTTON under_q //
    const under_q = document.createElement('button');
    under_q.classList.add('under_q');
    q_buttons.appendChild(under_q);
    under_q.textContent = '-';

    plus_q.addEventListener('click', () => {
        array.contador = array.contador + 1;
        q_number.textContent = `- ${array.contador} ud -`;

        array.totalPrice = array.price * array.contador;
        card_priceTot.textContent = `$ ${array.totalPrice}`;
        console.log(array);
       
        subtotal_final.textContent = array.totalPrice;
    });

    under_q.addEventListener('click', () => {
        if(array.contador > 0){
        array.contador = array.contador - 1;
        q_number.textContent = `- ${array.contador} ud -`;
        console.log(array.contador);
        } else {
            !alert('No tiene unidades seleccionadas');
        }

        array.totalPrice = array.price * array.contador;
        card_priceTot.textContent = `$ ${array.totalPrice}`;

        
        subtotal_final.textContent = array.totalPrice;
        
    });

    

};


class ShoppingCar {
    //La clase shoppingCar es una clase que actualizará los valores del carrito de compra.
    //esta clase tendrá métodos que reciban objetos de la clase Product y usará los valores
    //de sus propiedades para actualizar las propiedades de los objetos de Shoppingcar
        constructor(){
            this.products = []; //inicio un array que ira almacenando los productos
            this.totalPrice = 0; //este precio total será la suma de los precios de todos los productos del array
            this.discount = 0; //este precio será el dscuento cuando compremos más de 3 productos, eliminará el valor del menor
            this.balance =  this.totalPrice - this.discount; //este será el precio total a pagar por el usuario
        }
        addProduct(newProduct){ //función que añade un nuevo producto a mi array y actualiza los
                                // valores del precio, descuento y balance
            this.products.push(newProduct); //mando mis productos a la propiedad products de mi objeto
           this.totalPrice = newProduct.price; //actualizo el total price de mi objeto sumandole el precio del producto que añado
           this.balance += this.totalPrice //actualizo el balance total
           console.log(newProduct);
           HtmlOutPutCarShopping(newProduct);
        }
     }
    

const car = new ShoppingCar();



// CAJON DEL TOTALES //

// DIV PADRE //
const container_total = document.createElement('div');
container_total.classList.add('container_total');
cart_shopping_container.appendChild(container_total);

// SUBTOTALES //
const subtotal_final = document.createElement('p')
subtotal_final.classList.add('subtotal_final');
container_total.appendChild(subtotal_final);


// DISCOUNT //
const discount_final = document.createElement('p');
discount_final.classList.add('discount_final');
container_total.appendChild(discount_final)

// TOTALES CARRITOS //
const total_final = document.createElement('p');
total_final.classList.add('total_final');
container_total.appendChild(total_final);
total_final.textContent = car.balance;
discount_final.textContent = car.discount
subtotal_final.textContent = car.totalPrice


// me he quedado mas o menos, poniendo los totales... 
// bajo mi punto de vista para esto han de hacerse reduce que recorran y vayan acumulando por cada vuelta todos los precios totales.