import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
        <form action="">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required/>
            <label>Password: </label>
            <input type="password" id="password" name="password" required/>
        </form>
        <Link to ="/dashboard"><button>Login</button></ Link >
    </div>
  )
}

export default Login;
