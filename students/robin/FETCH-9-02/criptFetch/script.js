

async function  start(){
    const r = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1")
    const data = await r.json();
    
    /*
    const image = data.forEach( f => {
        console.log(f.id)
    })
    */
    
   console.log(data)
   
    
    createCoin(data)

   
}

start()

function createCoin(coin){

    coin.forEach( f => {
      
    const article = document.querySelector('.list-container');
    
    const divContainer = document.createElement('div');
    divContainer.classList.add('coin')

    const divLeft = document.createElement('div')
    divLeft.classList.add('coin-part1')

    const img = document.createElement('img')
    img.src = f.image

    const pName = document.createElement('p')
    pName.textContent = f.id

    const pSymbol = document.createElement('p')
    pSymbol.textContent = f.symbol.toUpperCase()
    pSymbol.classList.add('symbol')

  
    const divRight = document.createElement('div')
    divRight.classList.add('coin-part2')

    const pCurrent = document.createElement('p')
    pCurrent.classList.add('price-change')
    pCurrent.textContent = `$ ${f.current_price}`

    
    const pChange = document.createElement('p')
    pChange.classList.add('color')
    pChange.textContent = f.price_change_percentage_24h
    

    if (f.price_change_percentage_24h < 0){
        pChange.classList.add('colored')
    }

    if(f.price_change_percentage_24h > 0){
        pChange.classList.add('green')
    }
   

    divLeft.appendChild(img);
    divLeft.appendChild(pName);
    divLeft.appendChild(pSymbol);


    divRight.appendChild(pCurrent);
    divRight.appendChild(pChange);

 
  
    

    divContainer.appendChild(divLeft)
    divContainer.appendChild(divRight)


    article.appendChild(divContainer)
   


})

}


const search = document.querySelector('#search')

document.addEventListener('keyup' , e => {
      
        document.querySelectorAll('.coin').forEach(coin  => {
            coin.textContent.toLowerCase().includes(e.target.value.toLowerCase()) 
            ? coin.classList.remove('filter')
            : coin.classList.add('filter')
        })
} )