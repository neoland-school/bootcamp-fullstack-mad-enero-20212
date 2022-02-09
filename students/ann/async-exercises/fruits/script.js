const fruitData = `https://run.mocky.io/v3/b68bb258-78a1-4c92-acf5-2c5401707ae0`

async function getFruitInfo() {
    const result = await fetch(fruitData);
    const data = await result.json();
    console.log(data);
    return data
}

getFruitInfo().then(fruits => {
    fruits.forEach(fruit => {
        const fruitContainer = document.createElement('div');
        const fruitName = document.createElement('h1');
        fruitName.textContent = `${fruit.name}`;

        const fruitOrigin = document.createElement('h3');
        fruitOrigin.textContent = `Origen: ${fruit.origin}`;
        
        const fruitImg = document.createElement('img');
        fruitImg.src = fruit.img;
        fruitImg.classList.add('fruit-img');
        fruitImg.style = `width: 400px`;

        document.body.appendChild(fruitContainer);
        fruitContainer.appendChild(fruitName);
        fruitContainer.appendChild(fruitOrigin);
        fruitContainer.appendChild(fruitImg);
    })
})

/*

¿Qué tipo de datos tiene la respuesta? - Objeto JSON
¿Cuál es la ip y el puerto de la petición? - 46.252.181.104:443
¿Cuántos atributos tiene cada elemento de la fruta de la respuesta? 3 atributos
¿Qué tipo de datos tiene esos atributos? objeto
¿Qué código http de respuesta hemos recibido? 202

*/