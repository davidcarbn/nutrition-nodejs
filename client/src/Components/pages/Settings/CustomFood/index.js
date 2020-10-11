import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../Header'
import AddButton from '../../../Header/AddButton'
import Button from '../../../Header/Button'
import BackButton from '../../../Header/Button'

const CustomFood = (props) => {
    const [foodList, setFoodList] = useState()
    useEffect(() => {
        const fetchCustomFood = async () => {
            const res = await Axios.request({
                method: "GET",
                baseURL: process.env.REACT_APP_BASE_URL,
                url: "/api/v1/food"
            })
            console.log(res.data)
            setFoodList(res.data.food)
        }
        fetchCustomFood()
    }, [])

    const handleClick = (e) => {
        console.log(e.currentTarget.dataset.id)
        props.history.push({
            pathname: '/settings/customFood/edit',
            state: {
                foodid: e.currentTarget.dataset.id
            }
        })
    }

    return (
        <>
            <Header>
                <Button target="/settings">
                    <svg xmlns="http://www.w3.org/2000/svg" width="8.429" height="14.03" viewBox="0 0 8.429 14.03">
                        <path d="M149.076,42.925l-5.6,5.6,5.6,5.6" transform="translate(-142.061 -41.511)" fill="none" stroke="#343540" stroke-linecap="round" stroke-width="2" />
                    </svg>

                </Button>
                <Button target="/settings/customFood/add">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                        <g transform="translate(-305.5 -50.5)">
                            <line y2="12" transform="translate(312.5 51.5)" fill="none" stroke="#343540" stroke-linecap="round" stroke-width="2" />
                            <line y2="12" transform="translate(318.5 57.5) rotate(90)" fill="none" stroke="#343540" stroke-linecap="round" stroke-width="2" />
                        </g>
                    </svg>
                </Button>
            </Header>



            <div>
                <ul>{
                    foodList ? (
                        foodList.map((item, idx) => {
                            return (
                                <li key={idx}>
                                    <button
                                        data-id={item._id}
                                        onClick={handleClick}>
                                        {item.name}
                                    </button>
                                </li>
                            )
                        })
                    ) : "Keine Einträge"
                }</ul>
            </div>
        </>
    )
}

export default CustomFood