import React, { useState, useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import Axios from 'axios'
import { useDate } from '../../../providers/DateContext'

import Header from '../../Header'
import BackButton from '../../Header/Button'
import FoodDetails from '../../Food/FoodDetails'

const AddFood = (props) => {
    const {currentDate} = useDate()
    const { data, loading, error } = useFetch('/api/v1/food/' + props.location.state.foodId)
    const [amount, setAmount] = useState(props.location.state.amount || 100)
    
    console.log(props.location.state.foodId)
    console.log(data)
    const handleAmountChange = (e) => {
        setAmount(e.target.value)
    }
    const handleAdd = async (e) => {
        e.preventDefault()
        try {
            const res = await Axios.request({
                url: '/api/v1/diary/'+currentDate,
                method: "POST",
                baseURL: process.env.REACT_APP_BASE_URL,
                data: {
                    entry: {
                        [props.location.state.mealtime]: {
                            food: data._id,
                            amount
                        }
                    }
                }
            })
            props.history.push({
                pathname: '/dashboard',
                state: {
                    date: props.location.state.date
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
        <Header>
            <BackButton target="/food/search" />
            <input type="submit" onClick={handleAdd} value="Hinzufügen"/>
        </Header>
        {
        !data ? "Loading..." : (
            <div>
                <input type="number" step="10" onChange={handleAmountChange} value={amount}/>
                <FoodDetails food={data} amount={amount}/>
                <input type="submit" onClick={handleAdd} value="Add"/>
            </div>

        )}
        </>

    )
}
export default AddFood