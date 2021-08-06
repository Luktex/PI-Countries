import React from 'react';
import '../cssComponents/cardsCss.css'
import {Link} from 'react-router-dom'


export default function Card({name, flag, region, id}) {
    return (
        <div className='cards'>
            <Link to={'/home/' + id}><h3>{name}</h3></Link>
            <h5>{region}</h5>
            <Link to={'/home/' + id}><img className='flag' src={flag} alt='img not found' width='350px' height='250px'/></Link>
        </div>
        
    );
}