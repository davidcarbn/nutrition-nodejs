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
        monounsaturatedFats =  0 
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
    )
}

export default FoodDetails