const coinsDataApi = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1`
const coinTableHTML = document.querySelector('.coin__table');
const searchInput = document.querySelector('.search');

async function getCoinsData() {
    const result = await fetch(coinsDataApi)
    const data = await result.json()
    return data;
}

function generateCoinRow(id, logoSrc, name, symbol, price, priceChange) {
    const tableRow = document.createElement('tr');
    tableRow.classList.add(`${id}`, 'coin');


    const nameDiv = document.createElement('div');
    nameDiv.classList.add('coin-container');

    const imgLogo = document.createElement('img')
    imgLogo.classList.add('coin-logo');
    imgLogo.src = logoSrc

    const coinName = document.createElement('td');
    coinName.classList.add('coin-name');
    coinName.textContent = `${name}`

    const coinSymbol = document.createElement('td');
    coinSymbol.classList.add('coin-symbol');
    coinSymbol.textContent = `${symbol}`

    const coinPrice = document.createElement('td');
    coinPrice.classList.add('coin-price');
    coinPrice.textContent = `$${price}`;

    const coinPriceChange = document.createElement('td');
    coinPriceChange.textContent = priceChange;
    coinPriceChange.classList.add('coin-price-change');

    tableRow.appendChild(nameDiv)
    nameDiv.appendChild(imgLogo)
    nameDiv.appendChild(coinName)
    nameDiv.appendChild(coinSymbol)
    tableRow.appendChild(coinPrice)
    tableRow.appendChild(coinPriceChange)

    return tableRow;
}

function printCoinRows(data) {
    data.forEach(coin => {
        const coinData = generateCoinRow(coin.id, coin.image, coin.name, coin.symbol, coin.current_price, coin.price_change_24h);
        coinTableHTML.appendChild(coinData);
    })
}

function colorPriceChange() {
    const pricesChange = document.querySelectorAll('.coin-price-change');
    pricesChange.forEach(price => {
        price.textContent < 0 ? price.style = `color: red` : price.style = `color: green`;
    })
}
function styleCoinSymbol() {
    const coinsNames = document.querySelectorAll('.coin-name');
    console.log(coinsNames);
    const ok = coinsNames.forEach(c => {
        const coinName = c.textContent.split(' ')

        const symbol = coinName.slice(coinName.length - 1).join('')
        symbol.style = `color: red`
        console.log(symbol);
        // console.log(c.textContent.slice(0, c.textContent.length - 1));
    })
    console.log(ok);

}

function filterMatchedSearchedCoins(input) {
    const coinsHTML = document.querySelectorAll('.coin')
    Array.from(coinsHTML).forEach(c => {
        if (c.children[1].textContent.toLowerCase().startsWith(input.value)) {
            c.style.display = null;
        } else {
            c.style = `display: none`;
        }
    })
}

function enableSearchBar() {
    searchInput.addEventListener('keyup', () => {
        filterMatchedSearchedCoins(searchInput);
    })
}