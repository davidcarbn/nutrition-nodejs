import Axios from 'axios'
import React, { useState } from 'react'
import Header from '../../../../Header'
import BackButton from '../../../../Header/BackButton'


const AddCustomFood = (props) => {
    const [name, setName] = useState("")
    const [kcal, setKcal] = useState(0)
    const [protein, setProtein] = useState(0)
    const [sugar, setSugar] = useState(0)
    const [fiber, setFiber] = useState(0)
    const [saturatedFats, setSaturatedFats] = useState(0)
    const [transFats, setTransFats] = useState(0)
    const [polyunsaturatedFats, setPolyunsaturatedFats] = useState(0)
    const [monounsaturatedFats, setMonounsaturatedFats] = useState(0)

    const handleSubmit = async () => {
        try {
            const payload = {
                name,
                kcal,
                protein,
                sugar,
                fiber,
                saturatedFats,
                transFats,
                polyunsaturatedFats,
                monounsaturatedFats
            }
            const res = await Axios.request({
                method: "POST",
                data: payload,
                baseURL: process.env.REACT_APP_BASE_URL,
                url: "/api/v1/food"
            })
            props.history.push('/settings/customFood')
        } catch (error) {

        }


    }
    return (
        <>
            <Header>
                <BackButton target="/Settings/customFood" />
                <button onClick={handleSubmit}>Speichern</button>
            </Header>
            <div>
                <div>Name</div>
                <input type="text" onChange={e => setName(e.target.value)}/>
            </div>
            <div className="table-container">
                <ul className="nutrition-list">
                    <li className="nutrition-list-item">
                        <div className="nutrition-list-name">
                            <div>Kalorien</div>
                            <input onChange={e => setKcal(e.target.value)} />
                        </div>
                    </li>
                    <li className="nutrition-list-item">
                        <div className="nutrition-list-name">
                            <div>Eiweiß</div>
                            <input onChange={e => setProtein(e.target.value)} />
                        </div>
                    </li>
                    <li className="nutrition-list-item">
                        <div className="nutrition-list-name">
                            <div>Kohlenhydrate</div>
                            <div>{
                                (parseFloat(sugar) + parseFloat(fiber)).toFixed(2)
                            }</div>
                        </div>
                        <ul className="nutrition-sub-list">
                            <li className="nutrition-list-item">
                                <div className="nutrition-sub-list-name">
                                    <div>Zucker</div>
                                    <input onChange={e => setSugar(e.target.value)} />
                                </div>
                            </li>
                            <li>
                                <div className="nutrition-sub-list-name">
                                    <div>Ballaststoffe</div>
                                    <input onChange={e => setFiber(e.target.value)} />
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="nutrition-list-item">
                        <div className="nutrition-list-name">
                            <div>Fette</div>
                            <div>{
                                (parseFloat(saturatedFats) + parseFloat(transFats) +
                                    parseFloat(polyunsaturatedFats) + parseFloat(monounsaturatedFats)).toFixed(2)
                            }g</div>
                        </div>
                        <ul className="nutrition-sub-list">
                            <li className="nutrition-list-item">
                                <div className="nutrition-sub-list-name">
                                    <div>Gesättigt</div>
                                    <input onChange={e => setSaturatedFats(e.target.value)} />
                                </div>
                            </li>
                            <li>
                                <div className="nutrition-sub-list-name">
                                    <div>Trans</div>
                                    <input onChange={e => setTransFats(e.target.value)} />
                                </div>
                            </li>
                            <li>
                                <div className="nutrition-sub-list-name">
                                    <div>Mehrfach ungesättigt</div>
                                    <input onChange={e => setPolyunsaturatedFats(e.target.value)} />
                                </div>
                            </li>
                            <li>
                                <div className="nutrition-sub-list-name">
                                    <div>Einfach ungesättigt</div>
                                    <input onChange={e => setMonounsaturatedFats(e.target.value)} />
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className="nutrition-list">
                    <li className="nutrition-list-item">
                        <div className="nutrition-list-name">
                            <div>Vitamin A</div>
                            <div>100</div>
                        </div>
                    </li>
                    <li className="nutrition-list-item">
                        <div className="nutrition-list-name">
                            <div>Vitamin B</div>
                            <div>Gesamt</div>
                        </div>
                        <ul className="nutrition-sub-list">
                            <li className="nutrition-list-item">
                                <div className="nutrition-sub-list-name">
                                    <div>Vitamin B1</div>
                                    <div>10g</div>
                                </div>
                            </li>
                            <li>
                                <div className="nutrition-sub-list-name">
                                    <div>Vitamin B2</div>
                                    <div>10g</div>
                                </div>
                            </li>
                            <li>
                                <div className="nutrition-sub-list-name">
                                    <div>Vitamin B3</div>
                                    <div>10g</div>
                                </div>
                            </li>
                            <li>
                                <div className="nutrition-sub-list-name">
                                    <div>Vitamin B5</div>
                                    <div>10g</div>
                                </div>
                            </li>
                            <li>
                                <div className="nutrition-sub-list-name">
                                    <div>Vitamin B6</div>
                                    <div>10g</div>
                                </div>
                            </li>
                            <li>
                                <div className="nutrition-sub-list-name">
                                    <div>Vitamin B7</div>
                                    <div>10g</div>
                                </div>
                            </li>
                            <li>
                                <div className="nutrition-sub-list-name">
                                    <div>Vitamin B9</div>
                                    <div>10g</div>
                                </div>
                            </li>
                            <li>
                                <div className="nutrition-sub-list-name">
                                    <div>Vitamin B12</div>
                                    <div>10g</div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="nutrition-list-item">
                        <div className="nutrition-list-name">
                            <div>Vitamin C</div>
                            <div>100</div>
                        </div>
                    </li>
                    <li className="nutrition-list-item">
                        <div className="nutrition-list-name">
                            <div>Vitamin D</div>
                            <div>100</div>
                        </div>
                    </li>
                    <li className="nutrition-list-item">
                        <div className="nutrition-list-name">
                            <div>Vitamin E</div>
                            <div>100</div>
                        </div>
                    </li>
                    <li className="nutrition-list-item">
                        <div className="nutrition-list-name">
                            <div>Vitamin K</div>
                            <div>100</div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default AddCustomFood