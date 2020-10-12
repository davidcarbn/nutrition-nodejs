import React from 'react'
import './FoodDetails.css'
const FoodDetails = ({ food, amount = 100 }) => {
    const {
        kcal =  0 ,
        protein =  0,
        sugar =  0 ,
        fiber =  0,
        saturatedFats =  0 ,
        transFats =  0 ,
        polyunsaturatedFats =  0 ,
        monounsaturatedFats =  0,
        potassium =  0,
        phosphate =  0,
        calcium =  0,
        sodium =  0,
        vitamineA =  0,
        vitamineB1 =  0,
        vitamineB2 =  0,
        vitamineB3 =  0,
        vitamineB5 =  0,
        vitamineB6 =  0,
        vitamineB7 =  0,
        vitamineB9 =  0,
        vitamineB12 =  0,
        vitamineC =  0,
        vitamineD =  0,
        vitamineE =  0,
        vitamineK =  0,
    } = food
    return (
        <div className="table-container">
            <ul className="nutrition-list">
                <li className="nutrition-list-item">
                    <div className="nutrition-list-name">
                        <div>Kalorien</div>
                        <div>{kcal / 100 * amount} kcal</div>
                    </div>
                </li>
                <li className="nutrition-list-item">
                    <div className="nutrition-list-name">
                        <div>Eiweiß</div>
                        <div>{(protein / 100 * amount).toFixed(2)}g</div>
                    </div>
                </li>
                <li className="nutrition-list-item">
                    <div className="nutrition-list-name">
                        <div>Kohlenhydrate</div>
                        <div>{
                            ((sugar / 100 * amount) + (fiber / 100 * amount)).toFixed(2)
                        }g</div>
                    </div>
                    <ul className="nutrition-sub-list">
                        <li className="nutrition-list-item">
                            <div className="nutrition-sub-list-name">
                                <div>Zucker</div>
                                <div>{(sugar / 100 * amount).toFixed(2)}g</div>
                            </div>
                        </li>
                        <li>
                            <div className="nutrition-sub-list-name">
                                <div>Ballaststoffe</div>
                                <div>{(fiber / 100 * amount).toFixed(2)}g</div>
                            </div>
                        </li>
                    </ul>
                </li>
                <li className="nutrition-list-item">
                    <div className="nutrition-list-name">
                        <div>Fette</div>
                        <div>{
                            ((saturatedFats / 100 * amount) +
                            (transFats / 100 * amount) +
                            (polyunsaturatedFats / 100 * amount) +
                            (monounsaturatedFats / 100 * amount)).toFixed(2)
                        }g</div>
                    </div>
                    <ul className="nutrition-sub-list">
                        <li className="nutrition-list-item">
                            <div className="nutrition-sub-list-name">
                                <div>Gesättigt</div>
                                <div>{(saturatedFats / 100 * amount).toFixed(2)}g</div>
                            </div>
                        </li>
                        <li>
                            <div className="nutrition-sub-list-name">
                                <div>Trans</div>
                                <div>{(transFats / 100 * amount).toFixed(2)}g</div>
                            </div>
                        </li>
                        <li>
                            <div className="nutrition-sub-list-name">
                                <div>Mehrfach ungesättigt</div>
                                <div>{(polyunsaturatedFats / 100 * amount).toFixed(2)}g</div>
                            </div>
                        </li>
                        <li>
                            <div className="nutrition-sub-list-name">
                                <div>Einfach ungesättigt</div>
                                <div>{(monounsaturatedFats / 100 * amount).toFixed(2)}g</div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
            <ul className="nutrition-list">
                <li className="nutrition-list-item">
                    <div className="nutrition-list-name">
                        <div>Kalium</div>
                        <div>{potassium / 100 * amount} mg</div>
                    </div>
                </li>
                <li className="nutrition-list-item">
                    <div className="nutrition-list-name">
                        <div>Phosphat</div>
                        <div>{(phosphate / 100 * amount)} mg</div>
                    </div>
                </li>
                <li className="nutrition-list-item">
                    <div className="nutrition-list-name">
                        <div>Kalzium</div>
                        <div>{calcium / 100 * amount} mg</div>
                    </div>
                </li>
                <li className="nutrition-list-item">
                    <div className="nutrition-list-name">
                        <div>Natrium</div>
                        <div>{(sodium / 100 * amount)} mg</div>
                    </div>
                </li>
            </ul>
            <ul className="nutrition-list">
                <li className="nutrition-list-item">
                    <div className="nutrition-list-name">
                        <div>Vitamin A</div>
                        <div>{(vitamineA / 100 * amount)} mg</div>
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
                                <div>{(vitamineB1 / 100 * amount)} mg</div>
                            </div>
                        </li>
                        <li>
                            <div className="nutrition-sub-list-name">
                                <div>Vitamin B2</div>
                                <div>{(vitamineB2 / 100 * amount)} mg</div>
                            </div>
                        </li>
                        <li>
                            <div className="nutrition-sub-list-name">
                                <div>Vitamin B3</div>
                                <div>{(vitamineB3 / 100 * amount)} mg</div>
                            </div>
                        </li>
                        <li>
                            <div className="nutrition-sub-list-name">
                                <div>Vitamin B5</div>
                                <div>{(vitamineB5 / 100 * amount)} mg</div>
                            </div>
                        </li>
                        <li>
                            <div className="nutrition-sub-list-name">
                                <div>Vitamin B6</div>
                                <div>{(vitamineB6 / 100 * amount)} mg</div>
                            </div>
                        </li>
                        <li>
                            <div className="nutrition-sub-list-name">
                                <div>Vitamin B7</div>
                                <div>{(vitamineB7 / 100 * amount)} mg</div>
                            </div>
                        </li>
                        <li>
                            <div className="nutrition-sub-list-name">
                                <div>Vitamin B9</div>
                                <div>{(vitamineB9 / 100 * amount)} mg</div>
                            </div>
                        </li>
                        <li>
                            <div className="nutrition-sub-list-name">
                                <div>Vitamin B12</div>
                                <div>{(vitamineB12 / 100 * amount)} mg</div>
                            </div>
                        </li>
                    </ul>
                </li>
                <li className="nutrition-list-item">
                    <div className="nutrition-list-name">
                        <div>Vitamin C</div>
                        <div>{(vitamineC / 100 * amount)} mg</div>
                    </div>
                </li>
                <li className="nutrition-list-item">
                    <div className="nutrition-list-name">
                        <div>Vitamin D</div>
                        <div>{(vitamineD / 100 * amount)} mg</div>
                    </div>
                </li>
                <li className="nutrition-list-item">
                    <div className="nutrition-list-name">
                        <div>Vitamin E</div>
                        <div>{(vitamineE / 100 * amount)} mg</div>
                    </div>
                </li>
                <li className="nutrition-list-item">
                    <div className="nutrition-list-name">
                        <div>Vitamin K</div>
                        <div>{(vitamineK / 100 * amount)} mg</div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default FoodDetails