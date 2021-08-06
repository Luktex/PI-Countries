import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { getNameCountries } from '../actions';

export default function SearchBar(){
    const dispatch = useDispatch()
    const [name,setName] = useState("")

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
    }

    function handleSumbit(e){
        e.preventDefault()
        dispatch(getNameCountries(name))
    }

return (
    <div>
        <input 
            type = 'text'
            placeholder = 'Search country...'
            onChange = {(e) => handleInputChange(e)}
        />
        <button type='submit' onClick={(e) => handleSumbit(e)}>Search</button>
    </div>
)

}