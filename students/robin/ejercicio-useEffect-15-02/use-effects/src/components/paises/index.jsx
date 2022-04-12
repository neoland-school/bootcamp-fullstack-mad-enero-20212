import { useState, useEffect } from 'react';





function GetCountries(){

    let [countries, updateCountries] = useState([])
   


    useEffect(()=> {
        fetch('https://gist.githubusercontent.com/Yizack/bbfce31e0217a3689c8d961a356cb10d/raw/107e0bdf27918adea625410af0d340e8fc1cd5bf/countries.json')
        .then(r => r.json())
        .then(c => {
            updateCountries(c.countries)
            setData(c.countries)
        })
    },[])  

    const [searchCountry, updateCountry] = useState('')
    const [data, setData] = useState(countries)

    const handleChange = value => {
        updateCountry(value)
        filterData(value)
    }

    const filterData = value => {
        const toLowerCase = value.toLowerCase();
        if(!toLowerCase){
            setData(countries)
        }else {
            const filteredData = countries.filter(n => {
                return Object.keys(n).some(key => {
                    return n[key].toString().toLowerCase().includes(toLowerCase)
                })
            })
            setData(filteredData)
        }
    }


    return(
        <ul>
            <input type='text' value={searchCountry} onChange={e => handleChange(e.target.value)}/>
            {data.map((c, i)=> <li key={i}>{c.name_es} {c.dial_code}</li>)}
           
        </ul>
    )
}

export default GetCountries