import React from 'react';
import './Country.css';

const Country = (props) => {
    console.log(props);
    return (
        <div className='countySingleItem'>
            <h1>Name: {props.name}</h1>
            <p>Population: {props.population}</p>
            <p><img src={props.flag} alt="photos" /></p>
        </div>
    );
};

export default Country;