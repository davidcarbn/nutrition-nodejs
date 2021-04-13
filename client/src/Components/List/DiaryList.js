import React, { useState } from 'react'
import Container from '../Containers/Container'
import Button from '../Header/Button'
import './DiaryList.css'
const DiaryList = ({ loading, content, title, mealtime, onAdd, onEdit }) => {
    const [cont,setContent] = useState(content)
    console.log("content",content)
    return (
        <Container>
            <Container flexRow alignCenter spaceBetween>
                <div className="mealtime-heading">{title}</div>
                <Button target="/food/search" state={{mealtime}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                        <g transform="translate(-305.5 -50.5)">
                            <line y2="12" transform="translate(312.5 51.5)" fill="none" stroke="#343540" stroke-linecap="round" stroke-width="2" />
                            <line y2="12" transform="translate(318.5 57.5) rotate(90)" fill="none" stroke="#343540" stroke-linecap="round" stroke-width="2" />
                        </g>
                    </svg>
                </Button>
            </Container>
            <Container>
                <ul className="mealtime-list">{
                    loading ? (
                        <li>
                            <button className="mealtime-list-item">
                                <div>
                                    <div className="mealtime-name-placeholder placeholder"></div>
                                    <div className="mealtime-amount-placeholder placeholder"></div>
                                </div>
                                <div className="mealtime-kcal-placeholder placeholder">
                                    
                                </div>
                            </button>
                        </li>
                    ) : (
                            content.length ? content.map((item,idx) => (
                                <li key={idx}>
                                    <button className="mealtime-list-item" onClick={onEdit} data-mealtime={mealtime} data-amount={item.amount} data-foodid={item.food && item.food._id} data-entryid={item._id}>
                                        <div>
                                            <div className="mealtime-list-item-name">{item.food.name}</div>
                                            <div className="mealtime-list-item-amount">{item.amount}g</div>
                                        </div>
                                        <div>
                                            {item.food.kcal * item.amount / 100} kcal
                                        </div>
                                    </button>
                                </li>
                            )) : (<Container flexRow justifyCenter>Kein Eintrag</Container>)
                        )
                }
                </ul>
            </Container>
        </Container>
    )
}
export default DiaryList