import React from 'react'
import { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getCountries, filterCountriesByRegion, filterCreated, orderByName, orderByPopu, getActivities, filterByActivities } from '../actions'
import {Link} from 'react-router-dom'
import Card from './Card'
import '../cssComponents/HomeCss.css'
import Paginado from './Paginado'
import SearchBar from './SearchBar'
import Details from './Details'


export default function Home(){


const dispatch = useDispatch()
const myCountry = useSelector ((state) => state.activities)
console.log('home',myCountry)
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
    dispatch(orderByName('asc'))
},[])

function handleClick(e){
e.preventDefault();
dispatch(orderByName("asc"))
dispatch(getCountries());
setCurrentPage(1);
setOrden(`Ordered ${e.target.value}`)

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

function HandleByActivities(e){
    
    

    e.preventDefault();
dispatch(filterByActivities(e.target.value))
}

return (
    <div className='principal'>
        <button className='botoncreate'><Link to= '/activity'>Create a turistic activity</Link></button>
        
        <h1 className='tituloPrincipal'>Countries of the world</h1>
        <button className='botonreload' onClick={e => {handleClick(e)}}>
            Reload countries
        </button>
        {/* <button onClick={e => {handleActivities(e)}}>.
        <Link to= '/activities'>Activities created</Link>
        </button>  */}
        <div className='selects'>
            <select onChange={e => handleSort(e)}>
                <option key='asc' value= 'asc'>A-Z</option>
                <option key='desc' value= 'desc'>Z-A</option>
            </select>
            <select onChange={e => handlePopu(e)}>
                <option key='popu' value= 'popu'>Population min-max</option>
                <option key='popu2' value= 'popu2'>Population max-min</option>
            
            </select>
            <select onChange={e => handleFilterRegion(e)}>
                <option key='All' value= 'All'>All</option>
                <option key='Americas' value= 'Americas'>Americas</option>
                <option key='Europe' value= 'Europe'>Europe</option>
                <option key='Asia' value= 'Asia'>Asia</option>
                <option key='Oceania' value= 'Oceania'>Oceania</option>
                <option key='Africa' value= 'Africa'>Africa</option>
                <option key='Polar' value= 'Polar'>Antarctica</option>
            </select>
            <select onChange={e => HandleByActivities(e)}>
            <option >Activity</option>
            
                    {myCountry.map((e,i) => (
                    <option key={i} value={e}>{e}</option>  
                    ))
                }
            </select>
            

            <Paginado countriesPerPage = {countriesPerPage} allCountries = {allCountries.length} paginado = {paginado}/>
            <SearchBar/>
            
        <div className='contenedor-cartas'>
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