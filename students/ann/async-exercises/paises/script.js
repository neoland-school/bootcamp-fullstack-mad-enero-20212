const dataSrc = `https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json`
const translateButton = document.querySelector('.button-translate')

async function getData() {
    const result = await fetch(dataSrc)
    const countries = await result.json()
    return countries;
}

const inputSearch = document.querySelector('#search');

getData().then( country => {
    printCountriesInSpanish(country)

    const countriesHTML = document.querySelectorAll('.country')
    // const regex = /([A-Z])/gi;
    let string = []
    
    inputSearch.addEventListener('keydown', (e) => {
        let key = e.key
        console.log(key);
        console.log(key.length);

        if (key === 'Backspace') {
            string.pop();
        }

        if (key.length === 1) {
            string.push(key.toLowerCase());
            console.log(string);
        }  

        countriesHTML.forEach(c => {
            if (!c.children[0].textContent.toLowerCase().startsWith(string.join(''))) {
                c.style = `display: none`;
            } else {
                c.style = `display: block`;
            }
        })
    console.log(string);
})

    
})

function printCountriesWithMoreThan4Letters(country) {
    const countriesList = country.countries;
    const countriesWithMoreThan4Letters = countriesList.filter( p => p.name_en.length > 4)
    countriesWithMoreThan4Letters.forEach( c => {
        const country = document.createElement('p')
        country.textContent = c.name_en
        document.body.appendChild(country)
    })  
}

function printCountriesInSpanish(country) {
    const countriesList = country.countries;
    const customSpanishCountries = countriesList.map( c => {
        delete c.name_en
        return c
    })
    customSpanishCountries.forEach( c => {
        const countryContainer = document.createElement('div');
        countryContainer.classList.add('country')

        const countryName = document.createElement('h3');
        countryName.classList.add('country-name')
        countryName.textContent = `${c.name_es}`;

        const countryCode = document.createElement('p');
        countryCode.textContent = `Code: ${c.code}`;

        const countryDialCode = document.createElement('p');
        countryDialCode.textContent = `Dial code: ${c.dial_code}`;

        document.body.appendChild(countryContainer);
        countryContainer.appendChild(countryName);
        countryContainer.appendChild(countryCode);
        countryContainer.appendChild(countryDialCode);
    })  
    
}

translateButton.addEventListener('click', (e) => {
    getData().then(country => {
        const countriesArray = country.countries;
        const countriesNameHTML = document.querySelectorAll('.country-name');
        countriesNameHTML.forEach( (cn, i) => {
            cn.textContent = countriesArray[i].name_en;
        })
    })
})

