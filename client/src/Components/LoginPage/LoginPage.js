import React from 'react'
import './LoginPage.css'
import { Link } from 'react-router-dom'
export const LoginPage = () => {
    return (
        <div className="login-page">
            <div className="login-window">
                <div className="login-heading">
                    <h1>Anmelden</h1>
                    <p>Gebe deine Nutzerdaten an</p>
                </div>
                
                <form className="login-form">
                <div className="input-field">
                    <input type="email" autoFocus/>
                    <label for="email">E-Mail</label>
                </div>
                <div className="input-field">
                    <input type="password" />
                    <label for="password">Passwort</label>
                </div>
                <Link to="/forgotpassword">Passwort vergessen?</Link>
                
                <div className="input-field">
                    <input type="submit" value="Anmelden"/>
                </div>
            </form>
            </div>
            
        </div>
    )
}