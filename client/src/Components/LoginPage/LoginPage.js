import React, { useState } from 'react'
import './LoginPage.css'
import { Link, Redirect, Route } from 'react-router-dom'
import { useAuth } from '../../providers/AuthContext'
export const LoginPage = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { isAuthenticated } = useAuth();
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
                        <input type="submit" value="Anmelden" onClick={(event) => { event.preventDefault() }} />
                    </div>
                    <Link className="login-links text-center" to="/register">Konto erstellen</Link>
                </form>
            </div>
        </div>
    )
}