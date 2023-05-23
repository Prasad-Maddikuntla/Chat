import React from 'react'
import { useState } from 'react'

function Login() {
    
    const [userData, setUserData] = useState({})
    let usersList = []

   function createUser (event) {
    event.preventDefault()
    // console.log("event triggered", event)
    console.log(userData)
    usersList.push(userData)
    console.log(usersList);
}

const userInputChange = (name, value) => {
    userData[name] = value
    setUserData(userData)
}

    

  return (
    <form onSubmit={createUser}>
        <label htmlFor='username'>
            Username
        </label>
        <input name='userName' type='text' onChange={(event) => userInputChange(event.target.name, event.target.value)} placeholder='Enter Username' id='username'/>
        <label htmlFor='emailId'>
            Email
        </label>
        <input name='emailId' type='email' onChange={(event) => userInputChange(event.target.name, event.target.value)} placeholder='Enter EmailId' />
        <label htmlFor='password'>
            password
        </label>
        <input name='password' type='password' onChange={(event) => userInputChange(event.target.name, event.target.value)} placeholder='Enter Password' id='password'/>
        <label htmlFor='confirmpassword'>
            Confirm Password
        </label>
        <input name='confirmPassword' type='password' onChange={(event) => userInputChange(event.target.name, event.target.value)} placeholder='Confirm Password' id='confirmpassword'/>
        <div>
            <button type='submit'>
                Signup
            </button>
        </div>
    </form>
  )
}

export default Login