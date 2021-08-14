import React from 'react'
import {Link} from 'react-router-dom'
import '../cssComponents/landing.css'


export default function LandingPage(){
    return(
        <div className='principalanding'>
            <h1>Welcome to the app to create an activity for your turistic vacation!</h1>
            <Link to='/home'>
            <button className='boton'>Create your own Activity!</button>
            </Link>
        </div>
    )
}