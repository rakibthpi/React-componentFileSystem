import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countrys = () => {
    const [dataCountrys, setDataCountrys] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => setDataCountrys(data))
    },[]);
    return (
        <div>
            <h1>Hello From Country {dataCountrys.length}</h1>
            {
                // dataCountrys.map(dataCountry => console.log(dataCountrys))
            }
            {
                dataCountrys.map(country => <Country 
                    name={country.name}
                    population={country.population}
                    flag = {country.flag}
                    ></Country>)
            }
        </div>
    );
};

export default Countrys;