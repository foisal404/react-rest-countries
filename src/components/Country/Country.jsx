import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,region,flags,area}=props.country;
    return (
        <div className='country'>
            <h2>Name : {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Region {region}</p>
            <p><small>area {area}</small></p>
        </div>
    );
};

export default Country;