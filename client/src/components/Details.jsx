import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getDetail} from '../actions/index'
import { useState,useEffect } from 'react'
import {Link} from 'react-router-dom';
import '../cssComponents/HomeCss.css'


export default function Detail(props) {
    console.log(props)
    console.log(props.children)
    const dispatch = useDispatch()
    
    const [loading, setLoading] = useState(true)

useEffect(async() => {
   setLoading(false)
   await dispatch(getDetail(props.children));
   setLoading(true)
    

},[dispatch])

const myCountry = useSelector ((state) => state.detail)
console.log(myCountry)

return(
    <div>
        {
            myCountry.name&& loading?
            <div className='card-detail'>
                <h1>{myCountry.name}</h1>
                <img src={myCountry.flag} alt='not img' width='350px' height='250px' />
                <h2>Capital: {myCountry.capital}</h2>
                <p>Code: {myCountry.alpha3Code}</p>
                <p>Subregion: {myCountry.subregion}</p>
                <p>Area: {myCountry.area}km²</p>
                <p>Population: {myCountry.population}</p>
                <h3 className='Activities'>Activities: {!myCountry.activities[0]?'No activity created ' : myCountry.activities.map((el) => <li>{('Name: ') + el.name + (', ') + ('Duration(Weeks): ') + el.duration + (', ') + ('Difficulty: ') + el.difficulty + (', ') + ('Season: ') + el.season + ('.')}</li>)}</h3>
            <Link to='/home'>
                <button className='boton-detalle'>Back</button>
            </Link>
            </div> : <img alt='Hola' src='https://3.bp.blogspot.com/-RzsAO993gtw/W1dFHnTUrGI/AAAAAAAAp-M/2_lCCA7eKJMWMqP2hOM794dEcLZGjoMewCEwYBhgL/s1600/world_flags_globe_2.gif'/>

        }
        
    </div>
)
}