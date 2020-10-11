import React from 'react'
import { Link } from 'react-router-dom'
const AddButton = ({ target }) => {
    return (
        <Link className="btn-header" to={target}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                <g transform="translate(-305.5 -50.5)">
                    <line y2="12" transform="translate(312.5 51.5)" fill="none" stroke="#343540" stroke-linecap="round" stroke-width="2" />
                    <line y2="12" transform="translate(318.5 57.5) rotate(90)" fill="none" stroke="#343540" stroke-linecap="round" stroke-width="2" />
                </g>
            </svg>
        </Link>
    )
}
export default AddButton