import React, { useState, useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import Axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useDate } from '../../../providers/DateContext'
import FoodDetails from '../../Food/FoodDetails'
import Header from '../../Header'
import BackButton from '../../Header/BackButton'

const EditFood = (props) => {
    const { currentDate } = useDate()
    console.log(props.location.state.foodId)
    const { data, loading, error } = useFetch('/api/v1/food/' + props.location.state.foodId)
    const [amount, setAmount] = useState(props.location.state.amount || 100)
    const handleAmountChange = (e) => {
        setAmount(e.target.value)
    }
    console.log(data)
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
            <BackButton target="/dashboard" />
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