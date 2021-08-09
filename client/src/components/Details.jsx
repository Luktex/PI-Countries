import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getDetail} from '../actions/index'
import { useEffect } from 'react'
import {Link} from 'react-router-dom';



export default function Detail(props) {
    console.log(props)
    console.log(props.children)
    const dispatch = useDispatch()
    

useEffect(() => {
    dispatch(getDetail(props.children));
    

},[dispatch])

const myCountry = useSelector ((state) => state.detail)
console.log(myCountry)

return(
    <div>
        {
            myCountry.name?
            <div>
                <h1>{myCountry.name}</h1>
                <img src={myCountry.flag} alt='not img' />
                <h2>Capital: {myCountry.capital}</h2>
                <p>Subregion: {myCountry.subregion}</p>
                <p>Area: {myCountry.area}km²</p>
                <p>Population: {myCountry.population}</p>
                <h3>Activities: {!myCountry.createdInDb? myCountry.activities + ' ' : myCountry.activities.map((el) => el.name + (' ') + el.duration)}</h3>

            </div> : <p>Loading...</p>

        }
        <Link to='/home'>
            <button>Back</button>
        </Link>
    </div>
)
}