import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import Food from '../../../../../objects/Food'
import FoodDetails from '../../../../Food/FoodDetails'
import Header from '../../../../Header'
import Button from '../../../../Header/Button'

const EditCustomFood = (props) => {
    const [food,setFood] = useState(new Food())
    const [loading,setLoading] = useState(false)
    useEffect(() => {
        const fetchCustomFood = async () => {
            const res = await Axios.request({
                url: '/api/v1/food/' + props.location.state.foodid,
                baseURL: process.env.REACT_APP_BASE_URL,
                method: 'GET'
            })
            const food = res.data.food
            setFood(new Food(food))
        }
        fetchCustomFood()
    },[])

    const handleSubmit = async () => {
        try {
            setLoading(true)
            const res = await Axios.request({
                method: "PUT",
                data: food,
                baseURL: process.env.REACT_APP_BASE_URL,
                url: "/api/v1/food/" + props.location.state.foodid
            })
            setLoading(false)
            props.history.push('/settings/customFood')
        } catch (error) {

        }


    }

    const deleteEntry = async () => {
        try {
            setLoading(true)
            const res = await Axios.request({
                method: "DELETE",
                baseURL: process.env.REACT_APP_BASE_URL,
                url: '/api/v1/food/'+props.location.state.foodid
            })
            setLoading(false)
            props.history.push('/settings/customFood')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <Header>
                <Button target="/Settings/customFood" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="8.429" height="14.03" viewBox="0 0 8.429 14.03">
                        <path d="M149.076,42.925l-5.6,5.6,5.6,5.6" transform="translate(-142.061 -41.511)" fill="none" stroke="#343540" stroke-linecap="round" stroke-width="2" />
                    </svg>
                </Button>
                <Button handleSubmit={handleSubmit}>
                    <div className="save">
                        Speichern
                    </div>
                </Button>
            </Header>
            <FoodDetails
                food={food}
                setFood={setFood}
                asInput
            />
            <input className="btn-delete" type="submit" onClick={deleteEntry} value="Eintrag löschen" />
        </>
    )
}

export default EditCustomFood