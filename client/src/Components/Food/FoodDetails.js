import React from 'react'
import Container from '../Container'
import LabelInput from '../Input/LabelInput'
import './FoodDetails.css'

const FoodDetails = ({ food, setFood, amount = 100, asInput }) => {
    console.log("Comp", food)

    const updateFood = (e) => {
        e.persist()
        if (e.target.dataset.key === "name") {
            setFood(prevFood => ({ ...prevFood, [e.target.dataset.key]: e.target.value || "" }))
            return;
        }
        setFood(prevFood => ({ ...prevFood, [e.target.dataset.key]: parseFloat(e.target.value) || 0 }))
    }
    return (
        <>
        
            <Container>
                <LabelInput 
                type="text"
                label="Name"
                inputmode="text"
                data-key="name"
                onChange={updateFood}
                value={food.name}
                disabled={!asInput}
            />
            </Container>

        <div className="table-container">
            <ul className="nutrition-list">
                <li className="nutrition-list-item">
                    <div className="nutrition-list-name">
                        <div className="nutrition-nutrient">Kalorien</div>
                        <div className="nutrition-nutrient-quantity">
                            <input
                                className="nutrition-nutrient-value"
                                type="text"
                                step="10"
                                inputmode="numeric"
                                data-key="kcal"
                                onChange={updateFood}
                                placeholder={food.kcal * amount / 100}
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
                                inputmode="decimal"
                                data-key="protein"
                                value={food.protein * amount / 100}
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
                                value={(parseFloat(food.sugar * amount / 100) + parseFloat(food.fiber * amount / 100)).toFixed(1)}
                                disabled
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
                                        inputmode="decimal"
                                        data-key="sugar"
                                        placeholder={food.sugar * amount / 100}
                                        onChange={updateFood}
                                        disabled={!asInput}
                                    />
                                    <td className="nutrition-nutrient-unit">g</td>
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
                                            inputmode="decimal"
                                            data-key="fiber"
                                            placeholder={food.fiber * amount / 100}
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
                                value={(parseFloat(food.saturatedFats * amount / 100) + parseFloat(food.transFats * amount / 100)
                                    + parseFloat(food.polyunsaturatedFats * amount / 100) + parseFloat(food.monounsaturatedFats * amount / 100)).toFixed(1)}
                                disabled
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
                                    inputmode="decimal"
                                    data-key="saturatedFats"
                                    placeholder={food.saturatedFats * amount / 100}
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
                                    inputmode="decimal"
                                    data-key="transFats"
                                    placeholder={food.transFats * amount / 100}
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
                                    inputmode="decimal"
                                    data-key="polyunsaturatedFats"
                                    placeholder={food.polyunsaturatedFats * amount / 100}
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
                                    inputmode="decimal"
                                    data-key="monounsaturatedFats"
                                    placeholder={food.monounsaturatedFats * amount / 100}
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
                                inputmode="numeric"
                                data-key="potassium"
                                onChange={updateFood}
                                placeholder={food.potassium * amount / 100}
                                disabled={!asInput}
                            />
                            <div className="nutrition-nutrient-unit">kcal</div>
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
                                inputmode="decimal"
                                data-key="phosphate"
                                value={food.phosphate * amount / 100}
                                onChange={updateFood}
                                disabled={!asInput}
                            />
                            <div className="nutrition-nutrient-unit">g</div>
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
                                inputmode="decimal"
                                data-key="calcium"
                                value={food.calcium * amount / 100}
                                onChange={updateFood}
                                disabled={!asInput}
                            />
                            <div className="nutrition-nutrient-unit">g</div>
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
                                inputmode="decimal"
                                data-key="sodium"
                                value={food.sodium * amount / 100}
                                onChange={updateFood}
                                disabled={!asInput}
                            />
                            <div className="nutrition-nutrient-unit">g</div>
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
                            inputmode="decimal"
                            data-key="vitamineA"
                            placeholder={food.vitamineA * amount / 100}
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
                            <div className="nutrition-nutrient-unit">g</div>
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
                                    inputmode="decimal"
                                    data-key="vitamineB1"
                                    placeholder={food.vitamineB1 * amount / 100}
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
                                    inputmode="decimal"
                                    data-key="vitamineB2"
                                    placeholder={food.vitamineB2 * amount / 100}
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
                                    inputmode="decimal"
                                    data-key="vitamineB3"
                                    placeholder={food.vitamineB3 * amount / 100}
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
                                    inputmode="decimal"
                                    data-key="vitamineB5"
                                    placeholder={food.vitamineB5 * amount / 100}
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
                                    inputmode="decimal"
                                    data-key="vitamineB5"
                                    placeholder={food.vitamineB5 * amount / 100}
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
                                    inputmode="decimal"
                                    data-key="vitamineB7"
                                    placeholder={food.vitamineB7 * amount / 100}
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
                                    inputmode="decimal"
                                    data-key="vitamineB9"
                                    placeholder={food.vitamineB9 * amount / 100}
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
                                    inputmode="decimal"
                                    data-key="vitamineB12"
                                    placeholder={food.vitamineB12 * amount / 100}
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
                            inputmode="decimal"
                            data-key="vitamineC"
                            placeholder={food.vitamineC * amount / 100}
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
                            inputmode="decimal"
                            data-key="vitamineD"
                            placeholder={food.vitamineD * amount / 100}
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
                            inputmode="decimal"
                            data-key="vitamineE"
                            placeholder={food.vitamineE * amount / 100}
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
                            inputmode="decimal"
                            data-key="vitamineK"
                            placeholder={food.vitamineK * amount / 100}
                            onChange={updateFood}
                            disabled={!asInput}
                        />
                        <div className="nutrition-nutrient-unit">mg</div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        </>
    )
}

export default FoodDetails