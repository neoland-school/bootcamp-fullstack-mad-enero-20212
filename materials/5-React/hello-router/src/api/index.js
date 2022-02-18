
export const getCountriesFromApi = async () => {
  const r = await fetch('https://countriesnow.space/api/v0.1/countries/capital')
  if (r.ok){
    const d = await r.json();
    return d.data;
  }else{
    switch(r.status){
      case 400: console.log('se ha producido un 400'); break;
      default: console.log('Opcion por defecto')
    }
  }
}

export const getCountriesFromApiByIsoCode = async (isoCode) => {
    const reqOptions = {
      method: 'POST',
      body: JSON.stringify({ iso2: isoCode }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const r = await fetch('https://countriesnow.space/api/v0.1/countries/capital', reqOptions)
    const country = await r.json();
    return country.data;
}