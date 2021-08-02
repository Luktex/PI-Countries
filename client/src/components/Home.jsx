import React from 'react'
import { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getCountries } from '../actions'
import {Link} from 'react-router-dom'
import Card from './Card'
import '../cssComponents/HomeCss.css'

export default function Home(){

const dispatch = useDispatch()
const allCountries = useSelector((state) => state.countries)

useEffect(() => {
    dispatch(getCountries());
},[])

function handleClick(e){
e.preventDefault();
dispatch(getCountries())
}



return (
    <div className='principal'>
        <Link to= '/countries'>Create country</Link>
        <h1>Countries of the world</h1>
        <button onClick={e => {handleClick(e)}}>
            Reload countries
        </button>
        <div>
            <select>
                <option value= 'asc'>Ascendente</option>
                <option value= 'desc'>Descendente</option>
                <option value= 'alf'>Alfabetico</option>
                <option value= 'popu'>Population</option>
            </select>
            <select>
                <option value= 'reg'>Region</option>
                <option value= 'act'>Turistic activity</option>
            </select>
        
        {allCountries?.map( (c) => {
                return(
                    <fragment className='cartas'>
                        <Link to={'/home/' + c.id}>
                            <Card name={c.name} flag={c.flag} region={c.region} key={c.id}/>
                        </Link>
                    </fragment>
                )})
        }


        </div>
    </div>
)



}