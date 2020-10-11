import React from 'react'
import './List.css'
const List = ({ content,title ,mealtime, onAdd,onEdit }) => {
    return (
        <div className="list-container">
            <div className="list-heading">
                {title}
            </div>
            <ul className="list">{
                content.map((item,idx) => (
                    <li key={idx} className="list-item">
                        <button data-mealtime={mealtime} data-amount={item.amount} data-foodid={item.food._id} data-entryid={item._id} onClick={onEdit}>
                            <div>
                                <div>{item.food.name}</div>
                                <div>{item.amount}g</div>
                            </div>
                            <div>
                                {item.amount * item.food.kcal/100} kcal
                            </div>
                        </button>

                    </li>
                ))
            }
            </ul>
            <button data-mealtime={mealtime} className="btn-add" onClick={onAdd}>
                + Nahrungsmittel hinzufügen
            </button>
        </div>
    )
    if (content === 'undefined') {
        return null
    }
    return content.map((listitem) => (<li>{listitem.food.name}</li>))
}
export default List