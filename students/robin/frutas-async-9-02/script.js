
/*

function start (){
    fetch(`https://run.mocky.io/v3/b68bb258-78a1-4c92-acf5-2c5401707ae0`)
    .then (res => res.json())
    .then (data => console.log(data))
}

start()

*/

async function start (){
    const r = await fetch(`https://run.mocky.io/v3/b68bb258-78a1-4c92-acf5-2c5401707ae0`)
    const p = await r.json();
    createFruit(p)
    console.log(p)
   
}

start()

const body = document.querySelector('body')

function createFruit(fruta){

    fruta.forEach( fruit => {

 
    const cardContainer = document.createElement('article')
    cardContainer.classList.add('card-container')

    const foto = document.createElement('img');
    foto.src = fruit.img

    const name = document.createElement('h3')
    name.textContent = fruit.name

    const origin = document.createElement('p')
    origin.classList.add('name')
    origin.textContent = fruit.origin

    cardContainer.appendChild(foto)
    cardContainer.appendChild(name)
    cardContainer.appendChild(origin)


    body.appendChild(cardContainer)
})

}

// O tambien 

/*

function printFruits(fruitArr){1
    fruitArr.forEach(f => createFruit(f))
}

*/


// Es un array de objetos
//46.252.181.104:443 ip y puerto
// Tiene 3 atributos img,name y origin
// 200 ok