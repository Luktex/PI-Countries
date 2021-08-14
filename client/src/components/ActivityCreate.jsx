import React, {useState,useEffect} from 'react'
import { Link,useHistory } from 'react-router-dom'
import {postActivity,getCountries, orderByName} from '../actions/index'
import { useDispatch, useSelector } from 'react-redux'
import '../cssComponents/create.css'


export default function ActivityCreate(){
    const dispatch = useDispatch()
    const countries = useSelector((state) => state.countries)
    const history = useHistory()
    dispatch(orderByName("asc"))



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
    
    input.country.includes(e.target.value)?
    alert('Already Selected')
    
    :setInput({
        ...input,
        country: [...input.country,e.target.value]
        
    })
    
}

function handleSubmit(e){
    e.preventDefault();
    console.log(input)
    dispatch(postActivity(input))
    alert("Activity created successfully!")
    setInput({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        country: []
    })
    history.push('/home')
}

    useEffect(() => {
        dispatch(getCountries())
    }, []);

    return (
        <div className="create">
            <button><Link to= '/home'>Home</Link></button>
            <h1>Create your activity!</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Name:</label>
                    <input 
                    type= "text" 
                    value= {input.name}
                    name="name"
                    required
                    onChange={(e) => handleChange(e)}
                    />
                   
                </div>
                <div>
                    <label>Difficulty:</label>
                    <input
                    type="text"
                    value= {input.difficulty}
                    name="difficulty"
                    onChange={(e) => handleChange(e)}
                    required
                    />
                </div>
                <div>
                    <label>Duration:</label>
                    <input
                    type="text"
                    value= {input.duration}
                    name="duration"
                    onChange={(e) => handleChange(e)}
                    required
                    />
                </div>
                <div>
                    <label>Season:</label>
                    <input
                    type="text"
                    value= {input.season}
                    name="season"
                    onChange={(e) => handleChange(e)}
                    required
                    />
                </div>
                <select onChange={(e) => handleSelect(e)}>
                <option disabled selected>Countries</option>
                    {countries.map((coun, i) => (
                        <option key={i} value={coun.name}>{coun.name}</option>
                    ))}
                </select>
                <ul>
                    {input.country.map((el) => <li>{el + ", "}</li>)}
                    
                </ul>
               <button type="submit">Create activity</button>
            </form>
        </div>
    )
}