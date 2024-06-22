import React from 'react'
import './NewLetter.css'
const NewLetter = () => {
  return (
    <div className='newsletter'>
        <h1> GET ALL EXCLUSIVE OFFERS ON YOUR EMAIL</h1>
        <p> Suubscribe to a=our newsletter snd stay updated</p>
        <div >
            <input type='email' placeholder='Your email id'/>
            <button> Subscribe</button>
        </div>
    </div>
  )
}

export default NewLetter