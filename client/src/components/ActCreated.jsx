import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getActivities} from '../actions/index'
import { useEffect } from 'react'
import {Link} from 'react-router-dom';
import ActCard from './ActCard'



export default function Activities() {

    const myCountry = useSelector ((state) => state.activities)
    const ActCreated = myCountry
    const dispatch = useDispatch()
     
    useEffect(() => {
        dispatch(getActivities());
    },[])


console.log('hola',myCountry)
if(ActCreated.length){
return(
    <div>
    <div className='principalact'>
        {ActCreated?.map( (c, index) => {
            console.log('holi', index)
                return(
                    <div className='cartasact'>
                        
                            <ActCard name={c.name} difficulty={c.difficulty} duration={c.duration} season={c.season} countries={c.countries} />
                            
                    </div>
                    
                )})
        }
        
        </div>
        <Link to='/home'>
            <button>Back</button>
        </Link>
    </div>
)}else {
    return(
        <div>
            <h1>There isn't activities created</h1>
            <img src='https://pbs.twimg.com/profile_images/1337052039122186249/3B3rQdHw_400x400.jpg' alt='lol' />
        </div>
    )
}}
