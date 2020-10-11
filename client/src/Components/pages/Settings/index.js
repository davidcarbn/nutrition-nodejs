import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import Button from '../../Header/Button'

const Settings = () => {
    return (
        <>
            <Header>
                <Button target="/dashboard">
                    <svg xmlns="http://www.w3.org/2000/svg" width="8.429" height="14.03" viewBox="0 0 8.429 14.03">
                        <path d="M149.076,42.925l-5.6,5.6,5.6,5.6" transform="translate(-142.061 -41.511)" fill="none" stroke="#343540" stroke-linecap="round" stroke-width="2" />
                    </svg>
                </Button>
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