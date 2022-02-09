/*
1-Crea una clase de tipo producto que contenga nombre, imagen  y precio.
*/
class Product {

    constructor(name,img,price){

        this.name = name;
        this.image = img;
        this.price = price;
    }
}

/*
2- luego crea varios productos de la clase Producto.
voy a crear 5
*/

const bike = new Product ('Bike','url(./src/bike.jpg)',250);

const watch = new Product ('Watch','url(./src/applewatch.jpg)',450);

const airpods = new Product ('Airpods','url(./src/airpods.jpg)',200);

const phone = new Product ('Iphone 13','url(./src/iphone_13.jpg)',1000);

const shoes = new Product ('Nano XI', 'url(./src/nano_xi.jpg)', 120);

/*
3- Crea una clase de carrito de compra que va a contener, una array
 de los productos,  un precio total,  el descuento, la cuenta global, 
 y un método de agregar productos el cual sumara productos al array e 
 ira sumando al precio total.
*/
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
       
/*/aqui tengo que llamar a mi función que pinta mi producto. Esta a su vez,
actualiza el precio de la sección payment-info, para que se actualice cada vez que 
se suma o se resta un producto. Además, dentro de la función pintar hay implementado un evento que llama los métodos
updatePlusPrices() y updateMinusPrices() para actualizar el valor de mi precio total
*/
        printProducts(newProduct,this.products.length-1)

    }

    updatePlusPrices(newProduct,counter){ //creo un nuevo método para actualizar el valor de las propiedades
                                    //que almacenan el sumatorio de los precios y la defino como mi
                                    //función handle cuando añado los eventos a los botones de + y -
    //la función recibe un objeto y un numero, que será el numero de productos seleccionados

                                   

  if(counter.textContent>3){ //el descuento se actualiza cuando el numero de productos es mayor a 3
    if( counter.textContent%3 === 1 ){ //si el resto del numero de productos entre 3 es igual a 1 se aplica un descuento de una unidad
        this.discount += newProduct.price
    } 
  }
        this.totalPrice += newProduct.price; //actualizo el total price de mi objeto sumandole el precio del producto que añado
        this.balance += newProduct.price -this.discount//actualizo el balance total
    }
    updateMinusPrices(newProduct,counter){ //esta función hace lo mismo que la anterior, pero retirando el descuento en este caso
        if(counter.textContent>=3){ //el descuento se actualiza cuando el numero de productos es mayor a 3
            if( counter.textContent%3 === 0 ){ //siempre que al reducir el numero de productos entre 3 de un resto de cero, se retira el descuento
                this.discount -= newProduct.price
            } 
          }        
          if(this.totalPrice-newProduct.price<0){ //meto una corrección para que el precio total no pueda ser negativo
            this.totalPrice=0;
            this.balance =0;
        }else{
            this.totalPrice -= newProduct.price; //actualizo el total price de mi objeto restándole el precio del producto que añado
            this.balance -= newProduct.price -this.discount //actualizo el balance total
        }
    }
    updatePaymentInfoPlus(newProduct, counter){
          //ahora lo que hace es actualizar la información del precio
    const subTotalValue = document.querySelector('.subtotal-value');
    subTotalValue.textContent = parseFloat(subTotalValue.textContent) + newProduct.price;

    const totalPriceValue = document.querySelector('.total-price-value');
    totalPriceValue.textContent = this.totalPrice - this.discount;

    const shippingValue = document.querySelector('.shipping-value');
    
    if(counter.textContent>3){ //el descuento se actualiza cuando el numero de productos es mayor a 3
        if( counter.textContent%3 === 1 ){ //si el resto del numero de productos entre 3 es igual a 1 se aplica un descuento de una unidad
            shippingValue.textContent =  parseFloat(shippingValue.textContent) + newProduct.price;
        } 
      }
    }

    updatePaymentInfoMinus(newProduct,counter){
    //ahora lo que hace es actualizar la información del precio
    const subTotalValue = document.querySelector('.subtotal-value');
    subTotalValue.textContent = parseFloat(subTotalValue.textContent) - newProduct.price;

    const totalPriceValue = document.querySelector('.total-price-value');
    totalPriceValue.textContent = this.totalPrice - this.discount;

    const shippingValue = document.querySelector('.shipping-value');
    
    if(counter.textContent>=3){ //el descuento se actualiza cuando el numero de productos es mayor a 3
        if( counter.textContent%3 === 0 ){ //siempre que al reducir el numero de productos entre 3 de un resto de cero, se retira el descuento
            if(this.discount-newProduct.price<0){ //meto una corrección para que el descuento no pueda ser negativo
                shippingValue.textContent = 0;
            }else{
                shippingValue.textContent = parseFloat(shippingValue.textContent) - newProduct.price;
            }
        } 
      }        
    }
}

// me creo un objeto de la clase ShoppingCar definida anteriormente
 const shopingCar = new ShoppingCar();
 
 shopingCar.addProduct(bike); //añado a ese objeto el producto bici
 shopingCar.addProduct(watch); //añado al mismo objeto el producto watch
 shopingCar.addProduct(airpods); //añado al mismo objeto el producto watch
 shopingCar.addProduct(phone); //añado al mismo objeto el producto watch
 shopingCar.addProduct(shoes); //añado al mismo objeto el producto watch

const allMyProducts = shopingCar.products; // en esta variable, que es un array, tengo todos los productos

 /*
4- Pinta por pantalla un carrito de compra con los productos que vayas 
agregando, el diseño será libre aquí unos ejemplos
 */

//lo primero es crear una función que pinte mi estructura html. Esta recibirá un objeto
//los productos iran guardados en un array y mediante un forEach llamaré a mi función
//para que pinte.

//Esta función solo pinta los productos. Tendré que crear otra que me actualice el precio de
//mi carrito de la compra. Estás serán métodos de la clase ShoppingCar

function printProducts(obj, position){

    const mainContainer = document.querySelector('.main__container');

    const products = document.createElement('section');
    products.classList.add('products');
    mainContainer.appendChild(products);

    const productsInfo = document.createElement('div');
    productsInfo.classList.add('product-info');
    products.appendChild(productsInfo);

    const productImage = document.createElement('div');
    productImage.classList.add('product-image');
    productImage.style.cssText = `background-image: ${obj.image}; `;
    productsInfo.appendChild(productImage);

    const nameProduct = document.createElement('div');
    nameProduct.classList.add('name-product');
    productsInfo.appendChild(nameProduct);

    const tittleProduct = document.createElement('p');
    tittleProduct.textContent = obj.name;
    nameProduct.appendChild(tittleProduct);

    const priceProduct = document.createElement('p');
    priceProduct.textContent = `${obj.price} €`;
    nameProduct.appendChild(priceProduct);

    const addProductarea = document.createElement('div');
    addProductarea.classList.add('add-product')
    products.appendChild(addProductarea);

    const plus = document.createElement('button');
    plus.classList.add('plus');
    plus.setAttribute('data-position', position);
    plus.textContent = '+';
    addProductarea.appendChild(plus);

    const counter = document.createElement('p');
    counter.classList.add('counter');
    counter.setAttribute('data-position', position);
    counter.textContent = '0';
    addProductarea.appendChild(counter);

    const minus = document.createElement('button');
    minus.classList.add('minus');
    minus.classList.add('minus');
    minus.setAttribute('data-position', position);
    minus.textContent = '-';
    addProductarea.appendChild(minus);

    //creo los eventos en los botones de suma y resta
    plus.addEventListener('click',() =>{ //actualizo el numero de productos al darle al +

        updateProductCounterPlus(counter);
    });

    plus.addEventListener('click',()=>{ //actualizo los valores de los precios del objeto de la clase shoppingcar al darle al +
        shopingCar.updatePlusPrices(obj, counter);
    });

    plus.addEventListener('click', ()=>{ //actualizo la sección de pago en el html al darle al +
        shopingCar.updatePaymentInfoPlus(obj, counter);
    });

    minus.addEventListener('click',()=>{ //actualizo el numero de productos al darle al -
        
        updateProductCounterMinus(counter);
    });

    minus.addEventListener('click',()=>{ //actualizo los valores de los precios del objeto de la clase shoppingcar al darle al -
        shopingCar.updateMinusPrices(obj,counter);
    });

    minus.addEventListener('click',()=>{ //actualizo la sección de pago en el html al darle al -
        shopingCar.updatePaymentInfoMinus(obj,counter);
    });

}


//Voy a crear 2 funciones que aumenten o disminuyan la cantidad de productos al darle al + o al -

function updateProductCounterPlus (counter){ //esta función es sumar uno al contador de productos
        counter.textContent ++
}

function updateProductCounterMinus (counter){  //esta función es restar uno al contador de productos
       if((counter.textContent - 1)<=0){ //evita que aparezcan productos negativos
        counter.textContent=0;
    }else{
        counter.textContent --

    }
}

/*
5- La clase debe tener un método que cada vez que compres tres productos deberás obtener 
uno gratis, así que si compras tres teléfonos pagaras 3 y deberás tener 4, si compras 
4 teléfonos solo pagaras 3, si compras 8 teléfonos solo pagaras 6, cambiando el precio total.
*/

//lo implemento en los métodos  updatePaymentInfoPlus() y updatePaymentInfoMinus()