import React from 'react';
import '../cssComponents/cardsCss.css'



export default function ActCard({name, difficulty, duration, season, countries, countryName, id}) {
    
console.log(countries)
    
    return (
        
        <div className='cards'>
            <h2>Activity Name: {name}</h2>
            <h3>Difficulty: {difficulty}</h3>
            <h5>Duration: {duration}</h5>
            <h5>Season: {season}</h5>
            

            {
            countries.map( (el) => {return(
            <div> 
                <h3>Country name: {el.name}</h3>
                <img className='flag' src={el.flag} alt='Activity created without country' width='350px' height='250px'/>
            
            </div>
            )})}
            
            
        </div>
        //hola
    );
}