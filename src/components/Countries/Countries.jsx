import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries,setCountries]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
        .catch(err=>console.log(err));
    },[])
    return (
        <div>
            <h1>Hello World !!</h1>
            <p>{countries.length}+ more Countries</p>
            <div className='countries'>
                {
                    countries.map(country=> <Country 
                        country={country} key={country.cca3}></Country> )
                }
            </div>
        </div>
    );
};

export default Countries;