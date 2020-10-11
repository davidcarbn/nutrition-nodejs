import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../../Header'
import BackButton from '../../../Header/BackButton'

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
        console.log( e.currentTarget.dataset.id)
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
            <BackButton target="/settings" />
            <Link to="/settings/customFood/add">Hinzufügen</Link>
        </Header>
            
                
            
            <div>
                <ul>{
                    foodList ? (
                        foodList.map((item,idx) => {
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