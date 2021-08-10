import React from 'react'
import { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getCountries, filterCountriesByRegion, filterCreated, orderByName, orderByPopu, getActivities, getActivities2 } from '../actions'
import {Link} from 'react-router-dom'
import Card from './Card'
import '../cssComponents/HomeCss.css'
import Paginado from './Paginado'
import SearchBar from './SearchBar'
import Details from './Details'


export default function Home(){


const dispatch = useDispatch()
const myCountry = useSelector ((state) => state.activities)


const allCountries = useSelector((state) => state.countries)
const [orden, setOrden] = useState('')
const [currentPage,setCurrentPage] = useState(1);
const [countriesPerPage,setCountriesPerPage]= useState(9);
const indexOfLastCountry = currentPage * countriesPerPage; //9
const indexOfFirstCountry = indexOfLastCountry - countriesPerPage; //0
const currentCountries = allCountries.slice(indexOfFirstCountry,indexOfLastCountry)
const paginado = (pageNumber) => {
  setCurrentPage(pageNumber);
}; 


useEffect(async () => {
    await dispatch(getCountries())
    dispatch(getActivities())
},[])

function handleClick(e){
e.preventDefault();
dispatch(getCountries())
}

function handleFilterRegion(e){
    e.preventDefault();
dispatch(filterCountriesByRegion(e.target.value))
}

function handleActivities(e){
    e.preventDefault();
    dispatch(getActivities(e.target.value))
}

function handlePopu(e){
    e.preventDefault();
    dispatch(orderByPopu(e.target.value))
    setCurrentPage(1);
    setOrden(`Ordered ${e.target.value}`)
}

function handleSort (e){
    e.preventDefault();
    dispatch(orderByName(e.target.value))
    setCurrentPage(1);
    setOrden(`Ordered ${e.target.value}`)
}

return (
    <div className='principal'>
        <button><Link to= '/activity'>Create a turistic activity</Link></button>
        
        <h1>Countries of the world</h1>
        <button onClick={e => {handleClick(e)}}>
            Reload countries
        </button>
        <button onClick={e => {handleActivities(e)}}>.
        <Link to= '/activities'>Activities created</Link>
        </button> 
        <div>
            <select onChange={e => handleSort(e)}>
                <option value= 'asc'>Ascendente</option>
                <option value= 'desc'>Descendente</option>
            </select>
            <select onChange={e => handlePopu(e)}>
                <option value= 'popu'>Population asc</option>
                <option value= 'popu2'>Population desc</option>
            
            </select>
            <select onChange={e => handleFilterRegion(e)}>
                <option value= 'All'>All</option>
                <option value= 'Americas'>Americas</option>
                <option value= 'Europe'>Europe</option>
                <option value= 'Asia'>Asia</option>
                <option value= 'Oceania'>Oceania</option>
                <option value= 'Africa'>Africa</option>
                <option value= 'Polar'>Antarctica</option>
            </select>
            <select Change={e => handleActivities(e)}>
            <option disabled selected>Activity</option>
            
                    {myCountry.map((e) => (
                    <option value={e.name}>{e.name}</option>  
                    ))
                }
            </select>
            

            <Paginado countriesPerPage = {countriesPerPage} allCountries = {allCountries.length} paginado = {paginado}/>
            <SearchBar/>
            
        <div className='principal2'>
        {currentCountries?.map( (c) => {
                return(
                    <div className='cartas'>
                        
                            <Card id={c.alpha3Code} name={c.name} flag={c.flag} region={c.region} key={c.alpha3Code}/>
                        
                    </div>
                    
                )})
        }
        </div>


        </div>
    </div>
)



}