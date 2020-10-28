import React, { useState } from 'react'
import Axios from 'axios'
import './Search.css'
import Header from '../../Header'
import Container from '../../Containers/Container'
import Button from '../../Header/Button'
import LabelInput from '../../Input/LabelInput'
import Content from '../../Content'
import LayoutContainer from '../../Containers/LayoutContainer'
import LayoutContainerChild from '../../Containers/LayoutContainer/LayoutContainerChild'
import ContainerChild from '../../Containers/Container/ContainerChild'

const Search = (props) => {
    console.log('search', props.location.state.mealtime)
    const [result, setResult] = useState([])
    const [result2, setResult2] = useState([])
    const [search, setSearch] = useState("")
    const searchFood = async (event) => {
        try {
            setSearch(event.target.value)
            const food = event.target.value
            const reqPub = Axios.request({
                method: "POST",
                url: '/api/v1/search/' + food,
                baseURL: process.env.REACT_APP_BASE_URL
            })
            const reqOwn = Axios.request({
                method: "POST",
                url: '/api/v1/search/' + food,
                baseURL: process.env.REACT_APP_BASE_URL,
                data: { searchOwn: true }
            })
            const responses = await Axios.all([reqPub, reqOwn])
            setResult(responses[0].data.foods)
            setResult2(responses[1].data.foods)

        } catch (error) {
            console.log(error)
        }
    }
    const redirectToFood = (event) => {
        event.preventDefault()
        props.history.push({
            pathname: '/food/add',
            state: {
                foodId: event.currentTarget.dataset.foodid,
                mealtime: props.location.state.mealtime
            }
        })
    }
    return (
        <>
            <Header>
                <Button target="/dashboard">
                    <svg xmlns="http://www.w3.org/2000/svg" width="8.429" height="14.03" viewBox="0 0 8.429 14.03">
                        <path d="M149.076,42.925l-5.6,5.6,5.6,5.6" transform="translate(-142.061 -41.511)" fill="none" stroke="#343540" stroke-linecap="round" stroke-width="2" />
                    </svg>
                </Button>
            </Header>
            <Content>
                <LayoutContainer>
                    <LayoutContainerChild>
                        <Container>
                            <ContainerChild>
                                <LabelInput
                                    type="text"
                                    label="Suche"
                                    placeholder="Suchen..."
                                    onChange={searchFood}
                                    value={search}
                                />
                            </ContainerChild>
                            <ContainerChild>
                                <ul className="search-result">
                                    <div className="result-heading">
                                        Gespeicherte Nahrungsmittel
                                    </div>
                                    {result2.length ?
                                        result2.map((listItem) => (
                                            <li>
                                                <button data-foodid={listItem._id} onClick={redirectToFood}>
                                                    <div>
                                                        <div>{listItem.name}</div>
                                                    </div>
                                                    <div>
                                                        {listItem.kcal} kcal
                                                    </div>
                                                </button>
                                            </li>
                                        )) : <div className="no-result">Kein Ergebnis</div>
                                    }
                                </ul>


                                <ul className="search-result">
                                    <div className="result-heading">
                                        Vorschläge
                                    </div>
                                    {result.length ?
                                        result.map((listItem) => (
                                            <li>
                                                <button data-foodid={listItem._id} onClick={redirectToFood}>
                                                    <div>
                                                        <div>{listItem.name}</div>

                                                    </div>
                                                    <div>
                                                        {listItem.kcal} kcal
                                </div>
                                                </button>
                                            </li>
                                        )) : <div className="no-result">Kein Ergebnis</div>
                                    }
                                </ul>
                            </ContainerChild>
                        </Container>
                    </LayoutContainerChild>
                </LayoutContainer>
            </Content>


        </>

    )
}
export default Search