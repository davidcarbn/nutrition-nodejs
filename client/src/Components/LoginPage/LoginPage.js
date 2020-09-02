import React, { useState } from 'react'
import './LoginPage.css'
import { Link, Redirect, Route, useHistory } from 'react-router-dom'
import { useAuth } from '../../providers/AuthContext'
import Axios from 'axios'
export const LoginPage = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { isAuthenticated, setIsAuthenticated} = useAuth();
    const history = useHistory()
    const login = async (event) => {
        try {
            const res = await Axios.request('/api/v1/auth',{
                method: "POST",
                data:{email,password},
                baseURL: process.env.REACT_APP_BASE_URL
            })
            if (res.status === 200) {
                setIsAuthenticated(true)
                history.push('/app')
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="login-page">
            <div className="login-window">
                <div className="login-heading">
                    <h1>Anmelden</h1>
                    <p>Gebe deine Nutzerdaten an</p>
                </div>
                <form className="login-form">
                    <div className="input-field">
                        <input type="email" onChange={event => setEmail(event.target.value)} autoFocus required />
                        <label for="email">E-Mail</label>
                    </div>
                    <div className="input-field">
                        <input type="password" onChange={event => setPassword(event.target.value)} required />
                        <label for="password">Passwort</label>
                    </div>
                    <Link className="login-links" to="/forgotpassword">Passwort vergessen?</Link>

                    <div className="input-field">
                        <input type="submit" value="Anmelden" onClick={login} />
                    </div>
                    <Link className="login-links text-center" to="/register">Konto erstellen</Link>
                </form>
            </div>
        </div>
    )
}