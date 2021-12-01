import React, {useState} from 'react';
import {} from 'react-router-dom';

function Login() {
    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')

    return (
        <div className = "Login/Register">
            <div className ="registration">
                <h1>Register</h1>
                <label>Username</label>
                <input 
                 type="text" 
                 onChange={(e)=>{
                    setUsernameReg(e.target.value);
                }} 
                />
                <label>Password</label>
                <input 
                 type="text"
                 onChange={(e)=>{
                    setPasswordReg(e.target.value);
                }} 
                />
                <label>Phone Number</label>
                <input type="text" />
                <label>Email</label>
                <input type="text" />
                <button> Register </button>
            </div>
            <div className = "login">
                <h1> Login </h1>
                <input type = "text" placeholder="username.." />
                <input type = "text" placeholder="password.." />
                <button> Login </button>
            </div>    
        </div>
    )
}

export default Login
