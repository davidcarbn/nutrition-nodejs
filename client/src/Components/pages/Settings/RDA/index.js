import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import Food from '../../../../objects/Food'
import Container from '../../../Containers/Container'
import LayoutContainer from '../../../Containers/LayoutContainer'
import LayoutContainerChild from '../../../Containers/LayoutContainer/LayoutContainerChild'
import Content from '../../../Content'
import FoodDetails from '../../../Food/FoodDetails'
import Header from '../../../Header'
import Button from '../../../Header/Button'

const RDA = props => {
    const [food,setFood] = useState(new Food())

    useEffect(() => {
        const fetchRDA = async () => {
            try {
                const res = await Axios.request({
                    url: '/api/v1/rda',
                    method: 'GET',
                    baseURL: process.env.REACT_APP_BASE_URL
                })
                console.log(res.data)
                setFood(new Food(res.data))
            } catch (error) {
                console.log(error)
            }
        }
        fetchRDA()
    },[])

    const handleSubmit = async () => {
        try {
            const res = await Axios.request({
                url: '/api/v1/rda',
                method: 'PUT',
                baseURL: process.env.REACT_APP_BASE_URL,
                data: food
            })
            console.log(res.data)
            props.history.push('/settings/')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <Header>
                <Button target="/settings">
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
            <Content>
                <LayoutContainer>
                    <LayoutContainerChild>
                        <Container>
                            <FoodDetails food={food} setFood={setFood} showName={false} asInput/>
                        </Container>
                    </LayoutContainerChild>
                </LayoutContainer>
            </Content>

        </>
    )
}
export default RDA