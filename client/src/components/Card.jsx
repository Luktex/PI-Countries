import React from 'react';
import '../cssComponents/cardsCss.css'


export default function Card({name, flag, region}) {
    return (
        <div className='cards'>
            <h3>{name}</h3>
            <h5>{region}</h5>
            <img src={flag} alt='img not found' width='350px' height='250px' />
        </div>
    );
}