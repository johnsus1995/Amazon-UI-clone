import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css'


// import { auth } from './firebase'

function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault()
        // some fancy firebase login shitttt
    }

    // const register = (e) => {
    //     e.preventDefault();
    //     // some fancy firebase reg shitttt
    //     auth
    //         //it successfully created a new user with email and password
    //         .createUserWithEmailAndPassword(email, password)
    //         .then((auth) => {
    //             console.log(auth)
    //         })
    //         .catch(error => alert(error.message))
    // }

    return (
        <div className="login">
            <Link to='/'>
                <img
                    className='login-logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
                    alt="logo"></img>
            </Link>
            <div className="login-container">
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    >
                    </input>
                    <h5>Password</h5>
                    <input
                        type="password"
                        name="email"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    >
                    </input>
                    <button
                        className="signin-btn"
                        onClick={signIn}
                        type="submit"
                    >Sign In</button>
                </form>
                <p>
                    By signing in you agree to JJ's Amazon conditions of use
                    and sale. Please see our privacy notice, out cookies notes
                    notice and out Interest based ads.
                </p>
                <button className="reg-btn" >Create your Amazon account</button>
            </div>
        </div>
    )
}

export default LoginPage
