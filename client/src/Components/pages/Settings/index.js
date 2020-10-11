import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import BackButton from '../../Header/BackButton'

const Settings = () => {
    return (
        <>
        <Header>
            <BackButton target="/dashboard" />
        </Header>
        <ul>
            <li>
                <Link to="/settings/customFood">Eigene Nahrungsmittel verwalten</Link>
            </li>
        </ul>
        </>
    )
}

export default Settings