import React, { useState } from 'react'
import Axios from 'axios'
import './Search.css'
import { Link } from 'react-router-dom'
import Header from '../../Header'
import BackButton from '../../Header/BackButton'
const SearchProt = () => {
    return (
        <div className="Search-container">
            <div className="search-heading">
                <input className="food-search"/>
            </div>
        </div>
    )
}
const Search = (props) => {
    const [result, setResult] = useState([])
    const [result2, setResult2] = useState([])
    const searchFood = async (event) => {
        try {
            const food= event.target.value
            const reqPub = Axios.request({
                method: "POST",
                url: '/api/v1/search/' + food,
                baseURL: process.env.REACT_APP_BASE_URL
            })
            const reqOwn = Axios.request({
                method: "POST",
                url: '/api/v1/search/' + food,
                baseURL: process.env.REACT_APP_BASE_URL,
                data: {searchOwn: true}
            })
            const responses = await Axios.all([reqPub,reqOwn])
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
        
        <div className="Search-container">
            <input className="food-search" type="text" onChange={searchFood} />
            <ul className="list-heading">{result2 ?
                result2.map((listItem) => (
                    <li>
                        <button data-foodid={listItem._id} onClick={redirectToFood}>
                            <div>
                                <div>{listItem.name}</div>
                                <div>100g</div>
                            </div>
                            <div>
                                {listItem.kcal}
                            </div>
                        </button>
                    </li>
                )) : "Kein Ergebnis"
            }
            </ul>
            ------------------------------
            <ul className="list-heading">{result ?
                result.map((listItem) => (
                    <li>
                        <button data-foodid={listItem._id} onClick={redirectToFood}>
                            <div>
                                <div>{listItem.name}</div>
                                <div>100g</div>
                            </div>
                            <div>
                                {listItem.kcal}
                            </div>
                        </button>
                    </li>
                )) : "Kein Ergebnis"
            }
            </ul>
        </div>
        </>

    )
}
export default Search