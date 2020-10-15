import React from 'react'
import './FoodInput.css'

const FoodInput = ({food,setFood,noInput = false}) => {
    console.log("Comp",food)
    
    const updateFood = (e) => {
        e.persist()
        setFood(prevFood => ({...prevFood,[e.target.dataset.key]: parseFloat(e.target.value)}))
    }
    return (
        <div className="table-container">
                <ul className="nutrition-list">
                    <li className="nutrition-list-item">
                        <div className="nutrition-list-name">
                            <div>Kalorien</div>
                            <input
                                type="number"
                                step="10"
                                inputmode="numeric"
                                data-key="kcal"
                                onChange={updateFood}
                                value={food.kcal}
                                disabled={!noInput}
                            />
                        </div>
                    </li>
                    <li className="nutrition-list-item">
                        <div className="nutrition-list-name">
                            <div>Eiweiß</div>
                            <input
                                type="number"
                                inputmode="decimal"
                                data-key="protein"
                                value={food.protein}
                                onChange={updateFood}
                            />
                        </div>
                    </li>
                    <li className="nutrition-list-item">
                        <div className="nutrition-list-name">
                            <div>Kohlenhydrate</div>
                            <div>{(parseFloat(food.sugar) + parseFloat(food.fiber)).toFixed(1)}g</div>
                        </div>
                        <ul className="nutrition-sub-list">
                            <li className="nutrition-list-item">
                                <div className="nutrition-sub-list-name">
                                    <div>Zucker</div>
                                    <input
                                        type="number"
                                        inputmode="decimal"
                                        data-key="sugar"
                                        placeholder={food.sugar}
                                        onChange={updateFood}
                                    />
                                </div>
                            </li>
                            <li>
                                <div className="nutrition-sub-list-name">
                                    <div>Ballaststoffe</div>
                                    <input
                                        type="number"
                                        inputmode="decimal"
                                        data-key="fiber"
                                        placeholder={food.fiber}
                                        onChange={updateFood}/>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="nutrition-list-item">
                        <div className="nutrition-list-name">
                            <div>Fette</div>
                            <div>{(parseFloat(food.saturatedFats)+parseFloat(food.transFats)
                            + parseFloat(food.polyunsaturatedFats) + parseFloat(food.monounsaturatedFats)).toFixed(1)}
                                g</div>
                        </div>
                        <ul className="nutrition-sub-list">
                            <li className="nutrition-list-item">
                                <div className="nutrition-sub-list-name">
                                    <div>Gesättigt</div>
                                    <input 
                                        type="number"
                                        inputmode="decimal"
                                        data-key="saturatedFats"
                                        placeholder={food.saturatedFats}
                                        onChange={updateFood}
                                    />
                                </div>
                            </li>
                            <li>
                                <div className="nutrition-sub-list-name">
                                    <div>Trans</div>
                                    <input 
                                        type="number"
                                        inputmode="decimal"
                                        data-key="transFats"
                                        placeholder={food.transFats}
                                        onChange={updateFood}
                                    />
                                </div>
                            </li>
                            <li>
                                <div className="nutrition-sub-list-name">
                                    <div>Mehrfach ungesättigt</div>
                                    <input 
                                        type="number"
                                        inputmode="decimal"
                                        data-key="polyunsaturatedFats"
                                        placeholder={food.polyunsaturatedFats}
                                        onChange={updateFood}
                                    />
                                </div>
                            </li>
                            <li>
                                <div className="nutrition-sub-list-name">
                                    <div>Einfach ungesättigt</div>
                                    <input 
                                        type="number"
                                        inputmode="decimal"
                                        data-key="monounsaturatedFats"
                                        placeholder={food.monounsaturatedFats}
                                        onChange={updateFood}
                                    />
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

export default FoodInput