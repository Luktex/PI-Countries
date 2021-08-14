import React from 'react';
import '../cssComponents/cardsCss.css'
import {Link} from 'react-router-dom'
import '../cssComponents/HomeCss.css'


export default function Card({name, flag, region, id}) {
    return (
        <div className='cards'>
            <Link to={'/home/' + id}><h2 className='h2card'>{name}</h2></Link>
            <h5>{region}</h5>
            <Link to={'/home/' + id}><img className='flag' src={flag} alt='img not found' width='350px' height='250px'/></Link>
        </div>
        
    );
}