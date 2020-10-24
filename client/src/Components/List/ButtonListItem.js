import React from 'react'
import './ButtonListItem.css'
const ButtonListItem = ({ idx, item, handleClick }) => {
    return (
        <li key={idx}>
            <button
                className="list-item"
                data-id={item._id}
                onClick={handleClick}
            >
                <div>
                   {item.name}
                </div>
                <div className="btn-edit">Bearbeiten</div>
            </button>
        </li>
    )
}

export default ButtonListItem