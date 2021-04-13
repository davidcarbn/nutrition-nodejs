import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import Container from '../../../Containers/Container'
import ContainerChild from '../../../Containers/Container/ContainerChild'
import LayoutContainer from '../../../Containers/LayoutContainer'
import LayoutContainerChild from '../../../Containers/LayoutContainer/LayoutContainerChild'
import Content from '../../../Content'
import Header from '../../../Header'
import Button from '../../../Header/Button'
import LabelInput from '../../../Input/LabelInput'
import ButtonList from '../../../List/ButtonList'

const CustomFood = (props) => {
    const [foodList, setFoodList] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    useEffect(() => {
        const fetchCustomFood = async () => {
            const res = await Axios.request({
                method: "GET",
                baseURL: process.env.REACT_APP_BASE_URL,
                url: "/api/v1/food"
            })
            setFoodList(res.data.food)
        }
        fetchCustomFood()
    }, [])
    const handleClick = (e) => {
        props.history.push({
            pathname: "/settings/customFood/edit",
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
                <LabelInput
                    label={false}
                    onChange={e => setSearchTerm(e.currentTarget.value)}
                    value={searchTerm}
                    />
                <Button target="/settings/customFood/add">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                        <g transform="translate(-305.5 -50.5)">
                            <line y2="12" transform="translate(312.5 51.5)" fill="none" stroke="#343540" stroke-linecap="round" stroke-width="2" />
                            <line y2="12" transform="translate(318.5 57.5) rotate(90)" fill="none" stroke="#343540" stroke-linecap="round" stroke-width="2" />
                        </g>
                    </svg>
                </Button>
            </Header>
            <Content>
                <LayoutContainer>
                    <LayoutContainerChild>
                        <Container>
                            <ContainerChild>
                                <ButtonList 
                                    items={
                                        foodList
                                            .filter((food) => (food.name.includes(searchTerm)))
                                            .sort((a,b) => {
                                                if (a.name < b.name) return -1
                                                if (a.name > b.name) return 1
                                                return 0
                                            })
                                        }
                                    handleClick={handleClick} />
                            </ContainerChild>
                        </Container>
                    </LayoutContainerChild>
                </LayoutContainer>
            </Content>

        </>
    )
}

export default CustomFood