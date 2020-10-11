import React, { useState } from 'react'
import Axios from 'axios'
import './Search.css'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import BackButton from '../../Header/Button'
import Container from '../../Container'
const SearchProt = () => {
    return (
        <div className="Search-container">
            <div className="search-heading">
                <input className="food-search" />
            </div>
        </div>
    )
}
const Search = (props) => {
    const [result, setResult] = useState([])
    const [result2, setResult2] = useState([])
    const searchFood = async (event) => {
        try {
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
        console.log(event.currentTarget)
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
                <BackButton target="/dashboard" />
            </Header>
            <Container>

                <input className="food-search" type="text" placeholder="Suchen..." onChange={searchFood} />
                


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

            </Container>

        </>

    )
}
export default Search