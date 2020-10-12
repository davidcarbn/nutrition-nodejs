import React from 'react'
import './ButtonList.css'

import ButtonListItem from './ButtonListItem'
const ButtonList = ({items,handleClick,...rest}) => {
    return (
        <ul className="list">
            {items.length ? items.map((item, idx) => {
                return (
                    <ButtonListItem idx={idx} item={item} handleClick={handleClick} {...rest} />
                )
            }) : <div>Keine Ergebnisse</div>}
        </ul>
    )
}
export default ButtonList