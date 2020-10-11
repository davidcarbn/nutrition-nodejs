import React, { useState, useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useDate } from '../../../providers/DateContext'
import FoodDetails from '../../Food/FoodDetails'
import Header from '../../Header'
import Button from '../../Header/Button'

const EditFood = (props) => {
    const { currentDate } = useDate()
    const { data, loading, error } = useFetch('/api/v1/food/' + props.location.state.foodId)
    const [amount, setAmount] = useState(props.location.state.amount || 100)
    const handleAmountChange = (e) => {
        setAmount(e.target.value)
    }
    const handleSave = async (e) => {
        e.preventDefault()
        try {
            const res = await Axios.request({
                url: '/api/v1/diary/' + currentDate + '/' + props.location.state.mealtime + '/' + props.location.state.entryId,
                method: "PUT",
                baseURL: process.env.REACT_APP_BASE_URL,
                data: {
                    amount
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
    const deleteEntry = async () => {
        try {
            const res = await Axios.request({
                method: "DELETE",
                url: '/api/v1/diary/' + currentDate + '/' + props.location.state.mealtime + '/' + props.location.state.entryId,
                baseURL: process.env.REACT_APP_BASE_URL
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
    return (<>
        <Header>
            <Button target="/dashboard">
            <svg xmlns="http://www.w3.org/2000/svg" width="8.429" height="14.03" viewBox="0 0 8.429 14.03">
                        <path d="M149.076,42.925l-5.6,5.6,5.6,5.6" transform="translate(-142.061 -41.511)" fill="none" stroke="#343540" stroke-linecap="round" stroke-width="2" />
                    </svg>
                    </Button>
            <input type="submit" onClick={handleSave} value="Speichern"/>
        </Header>
        <>{
        !data ? "Loading..." : (
            <div>
                <input type="number" onChange={handleAmountChange} value={amount} />
                <FoodDetails food={data} amount={amount} /> 
                <input type="submit" onClick={deleteEntry} value="Delete" />
            </div>
       
        )
 }</></>
    )
}
export default EditFood