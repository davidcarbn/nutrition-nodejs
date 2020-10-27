import React, { useState, useEffect, useRef } from 'react'
import './Dashboard.css'
import Header from '../../Header'
import Axios from 'axios'
import DiaryList from '../../List/DiaryList'
import Button from '../../../Components/Header/Button'
import { useDate } from '../../../providers/DateContext'
import Container from '../../Containers/Container'
import LayoutContainer from '../../Containers/LayoutContainer'
import LayoutContainerChild from '../../Containers/LayoutContainer/LayoutContainerChild'
import ContainerChild from '../../Containers/Container/ContainerChild'
import Content from '../../Content'
import Nutrient from '../../Nutrient'
import Food from '../../../objects/Food'
const Dashboard = (props) => {
    const { currentDate, setCurrentDate } = useDate()
    const [diary, setDiary] = useState(new Map())

    const [loading, setLoading] = useState(false)
    const [foodSum, setFoodSum] = useState(new Food())

    const sumAllFood = () => {
        let diaryEntry = diary.get(new Date(currentDate).toISOString())
        if (!diaryEntry) {
            return new Food()
        }
        const allFood = diaryEntry.breakfast.concat(diaryEntry.lunch).concat(diaryEntry.dinner).concat(diaryEntry.snacks)
        const FoodProps = ["name", "kcal", "protein","carbohydrates", "sugar", "fiber","fats", "saturatedFats", "transFats", "polyunsaturatedFats", "monounsaturatedFats",
            "potassium","phosphate","calcium","sodium","vitamineA","vitamineB1","vitamineB2","vitamineB3","vitamineB5","vitamineB6",
            "vitamineB7","vitamineB9","vitamineB12","vitamineC","vitamineD","vitamineE","vitamineK"]
        const sum = allFood.reduce((prev, cur) => {
            FoodProps.forEach((prop) => {
                prev[prop] += (cur.food[prop] * cur.amount / 100)
            })
            return prev
        }, new Food())
        return sum
    }

    const stateMutate = useRef(true)

    let dateString = new Intl.DateTimeFormat('de-DE', {
        weekday: 'short',
        day: 'numeric',
        month: 'short'
    }).format(currentDate)
    // “UTC:yyyy-mm-dd’T’HH:MM:ss’Z’”


    useEffect(() => {
        const fetchDiary = async () => {
            try {
                setLoading(true)
                const response = await Axios.request({
                    url: '/api/v1/diary/' + new Date(currentDate).toISOString(),
                    method: "GET",
                    baseURL: process.env.REACT_APP_BASE_URL
                })
                let newDate, newDiaryEntry

                if (!response.data.diaryEntry) {
                    newDate = new Date(currentDate).toISOString()
                    newDiaryEntry = {
                        breakfast: [],
                        dinner: [],
                        lunch: [],
                        snacks: [],
                        water: []
                    }
                } else {
                    const { date, breakfast, dinner, lunch, snacks, water } = response.data.diaryEntry
                    newDate = date
                    newDiaryEntry = {
                        breakfast,
                        dinner,
                        lunch,
                        snacks,
                        water
                    }

                }
                setDiary(diaries => new Map(diaries).set(newDate, newDiaryEntry))
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        if (stateMutate.current) {
            stateMutate.current = false
            fetchDiary()
        }
        if (diary) {
            setFoodSum(sumAllFood())
        }

    }, [currentDate, diary])

    const prevDay = (event) => {

        event.preventDefault()
        stateMutate.current = true
        let newDate = currentDate - 60 * 1000 * 60 * 24
        setCurrentDate(newDate)
    }
    const nextDay = (event) => {
        event.preventDefault()
        stateMutate.current = true
        let newDate = currentDate + 60 * 1000 * 60 * 24
        setCurrentDate(newDate)
    }
    const getDiaryByDate = () => {
        return diary.get(new Date(currentDate).toISOString())
    }
    const redirectToEditPage = (event) => {
        props.history.push({
            pathname: "/food/edit",
            state: {
                amount: event.currentTarget.dataset.amount,
                foodId: event.currentTarget.dataset.foodid,
                entryId: event.currentTarget.dataset.entryid,
                mealtime: event.target.dataset.mealtime
            }
        })
    }
    return (
        <>
            <Header>
                <div className="dashboard-logo">K</div>
                
                <Button target="/settings">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20.911" height="20.912" viewBox="0 0 20.911 20.912">
                        <path id="settings" d="M19.765,8.185l-1.638-.208a8.234,8.234,0,0,0-.5-1.2l1.012-1.3a1.3,1.3,0,0,0-.106-1.724L17.164,2.381a1.3,1.3,0,0,0-1.73-.111l-1.3,1.012a8.2,8.2,0,0,0-1.2-.5L12.727,1.15A1.305,1.305,0,0,0,11.432,0H9.48A1.3,1.3,0,0,0,8.185,1.148L7.977,2.786a8.11,8.11,0,0,0-1.2.5L5.477,2.27a1.3,1.3,0,0,0-1.724.106L2.381,3.748a1.3,1.3,0,0,0-.111,1.73l1.012,1.3a8.138,8.138,0,0,0-.5,1.2L1.15,8.185A1.305,1.305,0,0,0,0,9.48v1.952a1.3,1.3,0,0,0,1.148,1.295l1.638.208a8.234,8.234,0,0,0,.5,1.2l-1.012,1.3a1.3,1.3,0,0,0,.106,1.724l1.372,1.372a1.3,1.3,0,0,0,1.73.11l1.3-1.012a8.045,8.045,0,0,0,1.2.5l.208,1.635A1.305,1.305,0,0,0,9.48,20.912h1.952a1.3,1.3,0,0,0,1.295-1.148l.208-1.638a8.234,8.234,0,0,0,1.2-.5l1.3,1.012a1.3,1.3,0,0,0,1.724-.106l1.372-1.372a1.3,1.3,0,0,0,.111-1.73l-1.012-1.3a8.044,8.044,0,0,0,.5-1.2l1.635-.208a1.305,1.305,0,0,0,1.15-1.295V9.48a1.3,1.3,0,0,0-1.147-1.295Zm-9.309,6.627a4.357,4.357,0,1,1,4.357-4.357,4.362,4.362,0,0,1-4.357,4.357Z" />
                    </svg>
                </Button>
            </Header>
            <Content>
                <LayoutContainer>
                    <LayoutContainerChild topRight>
                        <Container>
                        <ContainerChild>
                            <div className="date-selector">
                    <button onClick={prevDay}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9.843" height="15.444" viewBox="0 0 9.843 15.444">
                            <path id="left-arrow" d="M149.076,42.925l-5.6,5.6,5.6,5.6" transform="translate(-141.354 -40.804)" fill="none" stroke="#343540" stroke-linecap="round" stroke-width="3" />
                        </svg>
                    </button>
                    {dateString}
                    <button onClick={nextDay}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9.843" height="15.444" viewBox="0 0 9.843 15.444">
                            <path id="right-arrow" d="M143.475,42.925l5.6,5.6-5.6,5.6" transform="translate(-141.354 -40.804)" fill="none" stroke="#343540" stroke-linecap="round" stroke-width="3" />
                        </svg>
                    </button>

                </div>
                            </ContainerChild>
                            <ContainerChild>
                                <Container flexRow wrap>
                                    <Nutrient name="Kalorien" amount={foodSum.kcal} unit="kcal" />
                                    <Nutrient name="Carbs" amount={foodSum.carbohydrates} unit="g" />
                                    <Nutrient name="Fette" amount={foodSum.fats} unit="g" />
                                    <Nutrient name="Eiweiß" amount={foodSum.protein} unit="g" />
                                </Container>
                                <Container flexRow justifyCenter>
                                    <Button target="/dashboard/details" state={{food:foodSum}}>Alle Nährwerte anzeigen</Button>
                                </Container>


                            </ContainerChild>
                        </Container>
                    </LayoutContainerChild>
                    <LayoutContainerChild width="550px" leftBottom>
                        <Container>
                        
                            <ContainerChild >
                                <DiaryList
                                    loading={loading}
                                    mealtime={"breakfast"}
                                    title="Frühstück"
                                    content={getDiaryByDate() ? diary.get(new Date(currentDate).toISOString()).breakfast : []}

                                    onEdit={redirectToEditPage}
                                />
                            </ContainerChild>
                            <ContainerChild >
                                <DiaryList
                                    loading={loading}
                                    mealtime={"lunch"}
                                    title="Mittagessen"
                                    content={getDiaryByDate() ? diary.get(new Date(currentDate).toISOString()).lunch : []}

                                    onEdit={redirectToEditPage}
                                />
                            </ContainerChild>
                            <ContainerChild >
                                <DiaryList
                                    loading={loading}
                                    mealtime={"dinner"}
                                    title="Abendessen"
                                    content={getDiaryByDate() ? diary.get(new Date(currentDate).toISOString()).dinner : []}

                                    onEdit={redirectToEditPage}
                                />
                            </ContainerChild>
                            <ContainerChild >
                                <DiaryList
                                    loading={loading}
                                    mealtime={"snacks"}
                                    title="Snacks"
                                    content={getDiaryByDate() ? diary.get(new Date(currentDate).toISOString()).snacks : []}

                                    onEdit={redirectToEditPage}
                                />
                            </ContainerChild>
                        </Container>
                    </LayoutContainerChild>
                </LayoutContainer>
            </Content>

        </>
    )
}
export default Dashboard
/*
getDiaryByDate() ?
                    <List name="Abendessen" content={diary.get(new Date(currentDate).toISOString()).dinner} />
                    : "Loading..."
*/