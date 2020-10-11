import React from 'react'
import { Link } from 'react-router-dom'
const BackButton = ({ target }) => {
    return (
        <Link className="btn-back" to={target}>
            <svg xmlns="http://www.w3.org/2000/svg" width="9.843" height="15.444" viewBox="0 0 9.843 15.444">
                <path id="left-arrow" d="M149.076,42.925l-5.6,5.6,5.6,5.6" transform="translate(-141.354 -40.804)" fill="none" stroke="#343540" stroke-linecap="round" stroke-width="3" />
            </svg>
            <p>Zurück</p>
        </Link>
    )
}
export default BackButton