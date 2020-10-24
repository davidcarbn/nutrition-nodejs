import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { useDate } from '../../../providers/DateContext'

import Header from '../../Header'
import Button from '../../Header/Button'
import FoodDetails from '../../Food/FoodDetails'
import Container from '../../Containers/Container'
import Food from '../../../objects/Food'
import LabelInput from '../../Input/LabelInput'

const AddFood = (props) => {
    const { currentDate } = useDate()
    const [food, setFood] = useState(new Food())
    const [amount, setAmount] = useState(props.location.state.amount || 100)
    const [foodID, setFoodID] = useState(null)
    useEffect(() => {
        const fetchFood = async () => {
            try {
                const res = await Axios.request({
                    url: '/api/v1/food/' + props.location.state.foodId,
                    baseURL: process.env.REACT_APP_BASE_URL
                })
                setFood(new Food(res.data.food))
                console.log(res.data)
                setFoodID(res.data.food._id)
            } catch (error) {
                console.log(error)
            }
        }
        fetchFood()
    }, [])
    const handleAmountChange = (e) => {
        setAmount(e.target.value)
    }
    const handleAdd = async () => {
        try {
            const res = await Axios.request({
                url: '/api/v1/diary/' + currentDate,
                method: "POST",
                baseURL: process.env.REACT_APP_BASE_URL,
                data: {
                    entry: {
                        [props.location.state.mealtime]: {
                            food: foodID,
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
                <Button target="/food/search" state={{ mealtime: props.location.state.mealtime }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8.429" height="14.03" viewBox="0 0 8.429 14.03">
                        <path d="M149.076,42.925l-5.6,5.6,5.6,5.6" transform="translate(-142.061 -41.511)" fill="none" stroke="#343540" stroke-linecap="round" stroke-width="2" />
                    </svg>
                </Button>
                <Button handleSubmit={handleAdd}>
                    <div className="save">
                        Speichern
                    </div>
                </Button>
            </Header>
            <Container>{
                !food ? "Loading..." : (
                    <>
                        <Container>
                            <LabelInput
                                type="number"
                                inputmode="numeric"
                                onChange={handleAmountChange}
                                value={amount}
                                label="Menge"
                            />
                        </Container>
                        <FoodDetails
                            food={food}
                            setFood={setFood}
                            amount={amount}
                        />
                    </>

                )}

            </Container>

        </>

    )
}
export default AddFood