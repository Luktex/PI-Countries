import React, {useState,useEffect} from 'react'
import { Link,useHistory } from 'react-router-dom'
import {postActivity,getCountries} from '../actions/index'
import { useDispatch, useSelector } from 'react-redux'


export default function CountryCreate(){
    const dispatch = useDispatch()
    const countries = useSelector((state) => state.countries)

    const [input,setInput] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        country: []
    })

function handleChange(e){
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })
    console.log(input)
}

function handleSelect(e){
    setInput({
        ...input,
        country: [...input.country,e.target.value]
    })
}

    useEffect(() => {
        dispatch(getCountries())
    }, []);

    return (
        <div>
            <Link to= '/home'><button>Home</button></Link>
            <h1>Create your activity!</h1>
            <form>
                <div>
                    <label>Name:</label>
                    <input 
                    type= "text" 
                    value= {input.name}
                    name="name"
                    onChange={handleChange}
                    />
                   
                </div>
                <div>
                    <label>Difficulty:</label>
                    <input
                    type="text"
                    value= {input.difficulty}
                    name="difficulty"
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Duration:</label>
                    <input
                    type="text"
                    value= {input.duration}
                    name="duration"
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Season:</label>
                    <input
                    type="text"
                    value= {input.season}
                    name="season"
                    onChange={handleChange}
                    />
                </div>
                <select onChange={(e) => handleSelect(e)}>
                    {countries.map((coun) => (
                        <option value={coun.name}>{coun.name}</option>
                    ))}
                </select>
                <ul><li>{input.country.map(el => el + ", ")}</li></ul>
                <button type="submit">Create activity</button>
            </form>
        </div>
    )
}