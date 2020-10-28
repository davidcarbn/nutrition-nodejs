import React from 'react'
import Container from '../Containers/Container'
import ContainerChild from '../Containers/Container/ContainerChild'
import LabelInput from '../Input/LabelInput'
import './FoodDetails.css'

const FoodDetails = ({ food, setFood, amount = 100, asInput,showName = true }) => {
    console.log("Comp", food)

    const updateFood = (e) => {
        e.persist()
        let value = e.target.value.replace(',','.')
        
        if (e.target.dataset.key === "name") {
            setFood(prevFood => ({ ...prevFood, [e.target.dataset.key]: value || "" }))
            return;
        }
        
        setFood(prevFood => ({ ...prevFood, [e.target.dataset.key]: value }))
    }
    return (
        <>

            {showName ? (
                    <LabelInput
                    type="text"
                    label="Name"
                    inputMode="text"
                    data-key="name"
                    onChange={updateFood}
                    value={food.name}
                    disabled={!asInput}
                /> 
            ) : ""}
            

            
                <ul className="nutrition-list">
                    <li className="nutrition-list-item">
                        <div className="nutrition-list-name">
                            <div className="nutrition-nutrient">Kalorien</div>
                            <div className="nutrition-nutrient-quantity">
                                <input
                                    className="nutrition-nutrient-value"
                                    type="text"
                                    step="10"
                                    inputMode="numeric"
                                    data-key="kcal"
                                    onChange={updateFood}
                                    value={asInput ? food.kcal : food.kcal * amount / 100}
                                    placeholder="0"
                                    disabled={!asInput}
                                />
                                <div className="nutrition-nutrient-unit">kcal</div>
                            </div>
                        </div>
                    </li>
                    <li className="nutrition-list-item">
                        <div className="nutrition-list-name">
                            <div className="nutrition-nutrient">Eiweiß</div>
                            <div className="nutrition-nutrient-quantity">
                                <input
                                    className="nutrition-nutrient-value"
                                    type="text"
                                    inputMode="decimal"
                                    data-key="protein"
                                    value={asInput? food.protein : food.protein * amount / 100}
                                    placeholder="0"
                                    onChange={updateFood}
                                    disabled={!asInput}
                                />
                                <div className="nutrition-nutrient-unit">g</div>
                            </div>
                        </div>
                    </li>
                    <li className="nutrition-list-item">
                        <div className="nutrition-list-name">
                            <div className="nutrition-nutrient">Kohlenhydrate</div>
                            <div className="nutrition-nutrient-quantity">
                                <input
                                    className="nutrition-nutrient-value"
                                    type="text"
                                    inputMode="decimal"
                                    data-key="carbohydrates"
                                    value={asInput ? food.carbohydrates : food.carbohydrates * amount / 100}
                                    placeholder="0"
                                    onChange={updateFood}
                                    disabled={!asInput}
                                />
                                <div className="nutrition-nutrient-unit">g</div>
                            </div>
                        </div>
                        <ul className="nutrition-sub-list">
                            <li className="nutrition-list-item">
                                <div className="nutrition-sub-list-name">
                                    <div className="nutrition-nutrient">Zucker</div>
                                    <div className="nutrition-nutrient-quantity">
                                        <input
                                            className="nutrition-nutrient-value"
                                            type="text"
                                            inputMode="decimal"
                                            data-key="sugar"
                                            value={asInput ? food.sugar :food.sugar * amount / 100}
                                            placeholder="0"
                                            onChange={updateFood}
                                            disabled={!asInput}
                                        />
                                        <div className="nutrition-nutrient-unit">g</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="nutrition-sub-list-name">
                                    <div className="nutrition-nutrient">Ballaststoffe</div>
                                    <div className="nutrition-nutrient-quantity">
                                        <input
                                            className="nutrition-nutrient-value"
                                            type="text"
                                            inputMode="decimal"
                                            data-key="fiber"
                                            value={asInput ? food.fiber :food.fiber * amount / 100}
                                            placeholder="0"
                                            onChange={updateFood}
                                            disabled={!asInput}
                                        />
                                        <div className="nutrition-nutrient-unit"> g </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="nutrition-list-item">
                        <div className="nutrition-list-name">
                            <div className="nutrition-nutrient">Fette</div>
                            <div className="nutrition-nutrient-quantity">
                            <input
                                        className="nutrition-nutrient-value"
                                        type="text"
                                        inputMode="decimal"
                                        data-key="fats"
                                        value={asInput ? food.fats :food.fats * amount / 100}
                                        placeholder="0"
                                    onChange={updateFood}
                                        disabled={!asInput}
                                    />
                                <div className="nutrition-nutrient-unit">g</div>
                            </div>
                        </div>
                        <ul className="nutrition-sub-list">
                            <li className="nutrition-list-item">
                                <div className="nutrition-sub-list-name">
                                    <div className="nutrition-nutrient">Gesättigt</div>
                                    <div className="nutrition-nutrient-quantity">
                                        <input
                                            className="nutrition-nutrient-value"
                                            type="text"
                                            inputMode="decimal"
                                            data-key="saturatedFats"
                                            value={asInput ? food.saturatedFats :food.saturatedFats * amount / 100}
                                            placeholder="0"
                                    onChange={updateFood}
                                            disabled={!asInput}
                                        />
                                        <div className="nutrition-nutrient-unit">g</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="nutrition-sub-list-name">
                                    <div className="nutrition-nutrient">Trans</div>
                                    <div className="nutrition-nutrient-quantity">
                                        <input
                                            className="nutrition-nutrient-value"
                                            type="text"
                                            inputMode="decimal"
                                            data-key="transFats"
                                            value={asInput ? food.transFats :food.transFats * amount / 100}
                                            placeholder="0"
                                    onChange={updateFood}
                                            disabled={!asInput}
                                        />
                                        <div className="nutrition-nutrient-unit">g</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="nutrition-sub-list-name">
                                    <div className="nutrition-nutrient">Mehrfach ungesättigt</div>
                                    <div className="nutrition-nutrient-quantity">
                                        <input
                                            className="nutrition-nutrient-value"
                                            type="text"
                                            inputMode="decimal"
                                            data-key="polyunsaturatedFats"
                                            value={asInput ? food.polyunsaturatedFats :food.polyunsaturatedFats * amount / 100}
                                            placeholder="0"
                                    onChange={updateFood}
                                            disabled={!asInput}
                                        />
                                        <div className="nutrition-nutrient-unit">g</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="nutrition-sub-list-name">
                                    <div className="nutrition-nutrient">Einfach ungesättigt</div>
                                    <div className="nutrition-nutrient-quantity">
                                        <input
                                            className="nutrition-nutrient-value"
                                            type="text"
                                            inputMode="decimal"
                                            data-key="monounsaturatedFats"
                                            value={asInput ? food.monounsaturatedFats :food.monounsaturatedFats * amount / 100}
                                            placeholder="0"
                                    onChange={updateFood}
                                            disabled={!asInput}
                                        />
                                        <div className="nutrition-nutrient-unit">g</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul className="nutrition-list">
                    <li className="nutrition-list-item">
                        <div className="nutrition-list-name">
                            <div className="nutrition-nutrient">Kalium</div>
                            <div className="nutrition-nutrient-quantity">
                                <input
                                    className="nutrition-nutrient-value"
                                    type="text"
                                    inputMode="numeric"
                                    data-key="potassium"
                                    onChange={updateFood}
                                    value={asInput ? food.potassium :food.potassium * amount / 100}
                                    placeholder="0"
                                    disabled={!asInput}
                                />
                                <div className="nutrition-nutrient-unit">mg</div>
                            </div>
                        </div>
                    </li>
                    <li className="nutrition-list-item">
                        <div className="nutrition-list-name">
                            <div className="nutrition-nutrient">Phosphat</div>
                            <div className="nutrition-nutrient-quantity">
                                <input
                                    className="nutrition-nutrient-value"
                                    type="text"
                                    inputMode="decimal"
                                    data-key="phosphate"
                                    value={asInput ? food.phosphate :food.phosphate * amount / 100}
                                    placeholder="0"
                                    onChange={updateFood}
                                    disabled={!asInput}
                                />
                                <div className="nutrition-nutrient-unit">mg</div>
                            </div>
                        </div>
                    </li>
                    <li className="nutrition-list-item">
                        <div className="nutrition-list-name">
                            <div className="nutrition-nutrient">Kalzium</div>
                            <div className="nutrition-nutrient-quantity">
                                <input
                                    className="nutrition-nutrient-value"
                                    type="text"
                                    inputMode="decimal"
                                    data-key="calcium"
                                    value={asInput ? food.calcium :food.calcium * amount / 100}
                                    placeholder="0"
                                    onChange={updateFood}
                                    disabled={!asInput}
                                />
                                <div className="nutrition-nutrient-unit">mg</div>
                            </div>
                        </div>
                    </li>
                    <li className="nutrition-list-item">
                        <div className="nutrition-list-name">
                            <div className="nutrition-nutrient">Natrium</div>
                            <div className="nutrition-nutrient-quantity">
                                <input
                                    className="nutrition-nutrient-value"
                                    type="text"
                                    inputMode="decimal"
                                    data-key="sodium"
                                    value={asInput ? food.sodium :food.sodium * amount / 100}
                                    placeholder="0"
                                    onChange={updateFood}
                                    disabled={!asInput}
                                />
                                <div className="nutrition-nutrient-unit">mg</div>
                            </div>
                        </div>
                    </li>

                </ul>
                <ul className="nutrition-list">
                    <li className="nutrition-list-item">
                        <div className="nutrition-list-name">
                            <div className="nutrition-nutrient">Vitamin A</div>
                            <div className="nutrition-nutrient-quantity">
                                <input
                                    className="nutrition-nutrient-value"
                                    type="text"
                                    inputMode="decimal"
                                    data-key="vitamineA"
                                    value={asInput ? food.vitamineA :food.vitamineA * amount / 100}
                                    placeholder="0"
                                    onChange={updateFood}
                                    disabled={!asInput}
                                />
                                <div className="nutrition-nutrient-unit">mg</div>
                            </div>
                        </div>
                    </li>
                    <li className="nutrition-list-item">
                        <div className="nutrition-list-name">
                            <div className="nutrition-nutrient">Vitamin B</div>
                            <div className="nutrition-nutrient-quantity">
                                <input
                                    className="nutrition-nutrient-value"
                                    value={(parseFloat(food.vitamineB1 * amount / 100) + parseFloat(food.vitamineB2 * amount / 100)
                                        + parseFloat(food.vitamineB3 * amount / 100) + parseFloat(food.vitamineB5 * amount / 100)
                                        + parseFloat(food.vitamineB7 * amount / 100) + parseFloat(food.vitamineB9 * amount / 100)
                                        + parseFloat(food.vitamineB12 * amount / 100)).toFixed(1)}
                                    disabled
                                />
                                <div className="nutrition-nutrient-unit">mg</div>
                            </div>
                        </div>
                        <ul className="nutrition-sub-list">
                            <li className="nutrition-list-item">
                                <div className="nutrition-sub-list-name">
                                    <div className="nutrition-nutrient">Vitamin B1</div>
                                    <div className="nutrition-nutrient-quantity">
                                        <input
                                            className="nutrition-nutrient-value"
                                            type="text"
                                            inputMode="decimal"
                                            data-key="vitamineB1"
                                            value={asInput ? food.vitamineB1 :food.vitamineB1 * amount / 100}
                                            placeholder="0"
                                    onChange={updateFood}
                                            disabled={!asInput}
                                        />
                                        <div className="nutrition-nutrient-unit">mg</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="nutrition-sub-list-name">
                                    <div className="nutrition-nutrient">Vitamin B2</div>
                                    <div className="nutrition-nutrient-quantity">
                                        <input
                                            className="nutrition-nutrient-value"
                                            type="text"
                                            inputMode="decimal"
                                            data-key="vitamineB2"
                                            value={asInput ? food.vitamineB2 :food.vitamineB2 * amount / 100}
                                            placeholder="0"
                                    onChange={updateFood}
                                            disabled={!asInput}
                                        />
                                        <div className="nutrition-nutrient-unit">mg</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="nutrition-sub-list-name">
                                    <div className="nutrition-nutrient">Vitamin B3</div>
                                    <div className="nutrition-nutrient-quantity">
                                        <input
                                            className="nutrition-nutrient-value"
                                            type="text"
                                            inputMode="decimal"
                                            data-key="vitamineB3"
                                            value={asInput ? food.vitamineB3 :food.vitamineB3 * amount / 100}
                                            placeholder="0"
                                    onChange={updateFood}
                                            disabled={!asInput}
                                        />
                                        <div className="nutrition-nutrient-unit">mg</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="nutrition-sub-list-name">
                                    <div className="nutrition-nutrient">Vitamin B5</div>
                                    <div className="nutrition-nutrient-quantity">
                                        <input
                                            className="nutrition-nutrient-value"
                                            type="text"
                                            inputMode="decimal"
                                            data-key="vitamineB5"
                                            value={asInput ? food.vitamineB5 :food.vitamineB5 * amount / 100}
                                            placeholder="0"
                                    onChange={updateFood}
                                            disabled={!asInput}
                                        />
                                        <div className="nutrition-nutrient-unit">mg</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="nutrition-sub-list-name">
                                    <div className="nutrition-nutrient">Vitamin B6</div>
                                    <div className="nutrition-nutrient-quantity">
                                        <input
                                            className="nutrition-nutrient-value"
                                            type="text"
                                            inputMode="decimal"
                                            data-key="vitamineB6"
                                            value={asInput ? food.vitamineB6 :food.vitamineB6 * amount / 100}
                                            placeholder="0"
                                    onChange={updateFood}
                                            disabled={!asInput}
                                        />
                                        <div className="nutrition-nutrient-unit">mg</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="nutrition-sub-list-name">
                                    <div className="nutrition-nutrient">Vitamin B7</div>
                                    <div className="nutrition-nutrient-quantity">
                                        <input
                                            className="nutrition-nutrient-value"
                                            type="text"
                                            inputMode="decimal"
                                            data-key="vitamineB7"
                                            value={asInput ? food.vitamineB7 :food.vitamineB7 * amount / 100}
                                            placeholder="0"
                                    onChange={updateFood}
                                            disabled={!asInput}
                                        />
                                        <div className="nutrition-nutrient-unit">mg</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="nutrition-sub-list-name">
                                    <div className="nutrition-nutrient">Vitamin B9</div>
                                    <div className="nutrition-nutrient-quantity">
                                        <input
                                            className="nutrition-nutrient-value"
                                            type="text"
                                            inputMode="decimal"
                                            data-key="vitamineB9"
                                            value={asInput ? food.vitamineB9 :food.vitamineB9 * amount / 100}
                                            placeholder="0"
                                    onChange={updateFood}
                                            disabled={!asInput}
                                        />
                                        <div className="nutrition-nutrient-unit">mg</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="nutrition-sub-list-name">
                                    <div className="nutrition-nutrient">Vitamin B12</div>
                                    <div className="nutrition-nutrient-quantity">
                                        <input
                                            className="nutrition-nutrient-value"
                                            type="text"
                                            inputMode="decimal"
                                            data-key="vitamineB12"
                                            value={asInput ? food.vitamineB12 :food.vitamineB12 * amount / 100}
                                            placeholder="0"
                                    onChange={updateFood}
                                            disabled={!asInput}
                                        />
                                        <div className="nutrition-nutrient-unit">mg</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className="nutrition-list-item">
                        <div className="nutrition-list-name">
                            <div className="nutrition-nutrient">Vitamin C</div>
                            <div className="nutrition-nutrient-quantity">
                                <input
                                    className="nutrition-nutrient-value"
                                    type="text"
                                    inputMode="decimal"
                                    data-key="vitamineC"
                                    value={asInput ? food.vitamineC :food.vitamineC * amount / 100}
                                    placeholder="0"
                                    onChange={updateFood}
                                    disabled={!asInput}
                                />
                                <div className="nutrition-nutrient-unit">mg</div>
                            </div>
                        </div>
                    </li>
                    <li className="nutrition-list-item">
                        <div className="nutrition-list-name">
                            <div className="nutrition-nutrient">Vitamin D</div>
                            <div className="nutrition-nutrient-quantity">
                                <input
                                    className="nutrition-nutrient-value"
                                    type="text"
                                    inputMode="decimal"
                                    data-key="vitamineD"
                                    value={asInput ? food.vitamineD :food.vitamineD * amount / 100}
                                    placeholder="0"
                                    onChange={updateFood}
                                    disabled={!asInput}
                                />
                                <div className="nutrition-nutrient-unit">mg</div>
                            </div>
                        </div>
                    </li>
                    <li className="nutrition-list-item">
                        <div className="nutrition-list-name">
                            <div className="nutrition-nutrient">Vitamin E</div>
                            <div className="nutrition-nutrient-quantity">
                                <input
                                    className="nutrition-nutrient-value"
                                    type="text"
                                    inputMode="decimal"
                                    data-key="vitamineE"
                                    value={asInput ? food.vitamineE :food.vitamineE * amount / 100}
                                    placeholder="0"
                                    onChange={updateFood}
                                    disabled={!asInput}
                                />
                                <div className="nutrition-nutrient-unit">mg</div>
                            </div>
                        </div>
                    </li>
                    <li className="nutrition-list-item">
                        <div className="nutrition-list-name">
                            <div className="nutrition-nutrient">Vitamin K</div>
                            <div className="nutrition-nutrient-quantity">
                                <input
                                    className="nutrition-nutrient-value"
                                    type="text"
                                    inputMode="decimal"
                                    data-key="vitamineK"
                                    value={asInput ? food.vitamineK :food.vitamineK * amount / 100}
                                    placeholder="0"
                                    onChange={updateFood}
                                    disabled={!asInput}
                                />
                                <div className="nutrition-nutrient-unit">mg</div>
                            </div>
                        </div>
                    </li>
                </ul>
            
        </>
    )
}

export default FoodDetails