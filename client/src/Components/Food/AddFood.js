import React, { useState, useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import Axios from 'axios'
import { useDate } from '../../providers/DateContext'
import FoodDetails from './FoodDetails'
import {Link} from 'react-router-dom'

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
                        dinner: {
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
        <div>
            <Link to="/search">Zurück</Link>
        </div>
        {
        !data ? "Loading..." : (
            <div>
                <input type="number" onChange={handleAmountChange} value={amount}/>
                <FoodDetails food={data} amount={amount}/>
                <input type="submit" onClick={handleAdd} value="Add"/>
            </div>

        )}
        </>

    )
}
export default AddFood