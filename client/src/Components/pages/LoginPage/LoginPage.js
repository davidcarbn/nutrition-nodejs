import React, { useState } from 'react'
import './LoginPage.css'
import { Link, Redirect, Route, useHistory } from 'react-router-dom'
import { useAuth } from '../../../providers/AuthContext'
import Axios from 'axios'
import LabelInput from '../../Input/LabelInput'
import Container from '../../Container'
export const LoginPage = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { isAuthenticated, setIsAuthenticated} = useAuth();
    const history = useHistory()
    const login = async (event) => {
        event.preventDefault()
        try {
            const res = await Axios.request('/api/v1/auth',{
                method: "POST",
                data:{email,password},
                baseURL: process.env.REACT_APP_BASE_URL
            })
            if (res.status === 200) {
                setIsAuthenticated(true)
                history.push('/dashboard')
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Container>
                <div className="login-heading">
                    <h1>Anmelden</h1>
                    <p>Gebe deine Nutzerdaten an</p>
                </div>
                <form className="login-form">
                    <LabelInput 
                        label="E-Mail"
                        id="email"
                        onChange={event => setEmail(event.target.value)}
                        value={email}
                        autoFocus
                        required
                    />
                    <LabelInput 
                        label="Passwort"
                        id="password"
                        onChange={event => setPassword(event.target.value)}
                        value={password}
                        required
                    />
                    <Link className="login-links" to="/forgotpassword">Passwort vergessen?</Link>

                    <div className="input-field">
                        <input type="submit" value="Anmelden" onClick={login} />
                    </div>
                    <Link className="login-links text-center" to="/register">Konto erstellen</Link>
                </form>
           
        </Container>
            
       
    )
}