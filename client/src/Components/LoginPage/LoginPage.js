import React, { useState } from 'react'
import './LoginPage.css'
import { Link } from 'react-router-dom'
import {AuthConsumer} from '../../AuthContext'
export const LoginPage = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

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
                    <AuthConsumer>
                        {({ initialLogin }) => (
                            <div className="input-field">
                                <input type="submit" value="Anmelden" onClick={(event) => {event.preventDefault(); initialLogin(email,password) }} />
                            </div>
                        )}
                    </AuthConsumer>


                    <Link className="login-links text-center" to="/register">Konto erstellen</Link>
                </form>
            </div>

        </div>
    )
}