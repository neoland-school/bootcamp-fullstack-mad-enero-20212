/**
 * 
 * Vamos a crear una app de crypto monedas la cual debe lucir como el diseño de la 
 * imagen, usaremos la api https://www.coingecko.com/es
 * 
 * 
 * 
 *   1- Para ver el precio de las cripto monedas,  lo primero sera obtener 
 *      los datos ("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1"),
 *   2- Muestra en un html la lista de todas las criptomonedas con su precio 
 *   actual y el  price change.
 *   3- si el price change es  negativo deberá mostrarse en rojo, si es positivo en verde.
 *   4- Debera tener un filtro de búsqueda que filtre por nombre de 
 *   la cripto, basar el diseño en la imagen siguiente.
 */


//voy a obtener los datos

const divContainerCoins = document.querySelector('.container_coins');
const inputDOM = document.querySelector('#search-coin');
let inputValueDOM = inputDOM.value;


async function getCriptoData(){

    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1');
    const data = await response.json();
    return data;
}

console.log(getCriptoData());

/** Creo una función que me pinte los resultados. Esta función recibirá un array,
    que es el valor de la respuesta. Lo que devuelve mi función getCriptoData.

*/

function printCriptoCurrencies(arrCripto){
    

    arrCripto.forEach(coin => { //cada posición del array (moneda) es un objeto

        //pinto un nuevo div para cada moneda

        const divCoins = document.createElement('div');
        divCoins.classList.add('coins');
        divContainerCoins.appendChild(divCoins);

        const divCoinId = document.createElement('div');
        divCoinId.classList.add('coins-id');
        divCoins.appendChild(divCoinId);

        const divCoinImage = document.createElement('div');
        divCoinImage.classList.add('coin-image');
        divCoinImage.style.backgroundImage = `url('${coin.image}')`;
        divCoinId.appendChild(divCoinImage);

        const divCoinName = document.createElement('div');
        divCoinName.classList.add('coin-name');
        divCoinId.appendChild(divCoinName);

        const h4TittleCoin = document.createElement('h4');
        h4TittleCoin.classList.add('tittle-coin');
        h4TittleCoin.textContent = coin.name;
        divCoinName.appendChild(h4TittleCoin);

        const h4CoinAbbr = document.createElement('h4');
        h4CoinAbbr.classList.add('coin-abbr');
        h4CoinAbbr.textContent = coin.symbol.toUpperCase();
        divCoinName.appendChild(h4CoinAbbr);
        
        const divCoinsPrices = document.createElement('div');
        divCoinsPrices.classList.add('coins-prices');
        divCoins.appendChild(divCoinsPrices);

        const h3CoinPrice = document.createElement('h3');
        h3CoinPrice.classList.add('coin_price');
        h3CoinPrice.textContent = `${coin.current_price} US$`;
        divCoinsPrices.appendChild(h3CoinPrice);

        const h3CoinPriceChange = document.createElement('h3');
        h3CoinPriceChange.classList.add('coin_price-change');
        coin.price_change_percentage_24h<0 ? h3CoinPriceChange.classList.add('coin_price-low') : h3CoinPriceChange.classList.add('coin_price-up');
        h3CoinPriceChange.textContent = coin.price_change_percentage_24h;
        divCoinsPrices.appendChild(h3CoinPriceChange);
        
    });
}




//Creo una función que me pinte por un parámetro de entrada de tipo input

function printByFilter(arrCoins,input){

    const inputLowerCase = input.toLowerCase();
    
    const arrFilter = arrCoins.filter((coin) => coin.name.toLowerCase().startsWith(inputLowerCase));
    arrFilter.forEach(filterCoin =>{

        const divCoins = document.createElement('div');
        divCoins.classList.add('coins');
        divContainerCoins.appendChild(divCoins);

        const divCoinId = document.createElement('div');
        divCoinId.classList.add('coins-id');
        divCoins.appendChild(divCoinId);

        const divCoinImage = document.createElement('div');
        divCoinImage.classList.add('coin-image');
        divCoinImage.style.backgroundImage = `url('${filterCoin.image}')`;
        divCoinId.appendChild(divCoinImage);

        const divCoinName = document.createElement('div');
        divCoinName.classList.add('coin-name');
        divCoinId.appendChild(divCoinName);

        const h4TittleCoin = document.createElement('h4');
        h4TittleCoin.classList.add('tittle-coin');
        h4TittleCoin.textContent = filterCoin.name;
        divCoinName.appendChild(h4TittleCoin);

        const h4CoinAbbr = document.createElement('h4');
        h4CoinAbbr.classList.add('coin-abbr');
        h4CoinAbbr.textContent = filterCoin.symbol.toUpperCase();
        divCoinName.appendChild(h4CoinAbbr);
        
        const divCoinsPrices = document.createElement('div');
        divCoinsPrices.classList.add('coins-prices');
        divCoins.appendChild(divCoinsPrices);

        const h3CoinPrice = document.createElement('h3');
        h3CoinPrice.classList.add('coin_price');
        h3CoinPrice.textContent = `${filterCoin.current_price} US$`;
        divCoinsPrices.appendChild(h3CoinPrice);

        const h3CoinPriceChange = document.createElement('h3');
        h3CoinPriceChange.classList.add('coin_price-change');
        filterCoin.price_change_percentage_24h<0 ? h3CoinPriceChange.classList.add('coin_price-low') : h3CoinPriceChange.classList.add('coin_price-up');
        h3CoinPriceChange.textContent = filterCoin.price_change_percentage_24h;
        divCoinsPrices.appendChild(h3CoinPriceChange);
      
    });
};

function removeElements(){ //función que me elimina todos mis divs de la clase "coins"
    const allDivCoinsDOM = document.querySelectorAll('.coins');
    allDivCoinsDOM.forEach(div => div.remove());
}

//creo una función asincrona para ejecutar el pintado de los elementos por filtrado
async function startPrintByFilter(){
    const arrCoins = await getCriptoData();
    printByFilter(arrCoins, inputValueDOM); 
}


//creo un adeventlistener para que escuche pulso una tecla.
//dentro del evento tengo que actualizar el valor del input, tengo que eliminar el contenido y pintar el nuevo
inputDOM.addEventListener('keyup',()=>{

    inputValueDOM = inputDOM.value;
    startPrintByFilter();
    removeElements()

}); 


async function startPrintCripto(){
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1');
    const data = await response.json();
    printCriptoCurrencies(data)

};

startPrintCripto();



