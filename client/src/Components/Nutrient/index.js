import React from 'react'
import './Nutrient.css'

const Nutrient = ({ name, unit, amount, rda }) => {
    const percentage = Math.min(amount / rda,1) || 0
    const circumference = (40 * 2 * Math.PI)
    const strokeDashoffset = circumference - percentage * circumference
    console.log("per", percentage)
    return (
        <div className="nutrient">
            <div class="nutrient-circle-wrapper">
                <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" fill="transparent" stroke="lightgrey" stroke-width="10" r="40" />
                    <circle className="nutrient-circle" cx="50" cy="50" fill="transparent" stroke="#1a73e8" stroke-width="10" r="40"
                        strokeDasharray={circumference + ' ' + circumference } style={{ strokeDashoffset: strokeDashoffset  }} />
                </svg>
            <div className="nutrient-info">
                <div>
                    <div className="nutrient-amount">
                        {Math.round(amount)}
                    </div>
                    <div className="nutrient-unit">
                        {unit}
                    </div>
                </div>
            </div>
            </div>
            <div className="nutrient-name">
                {name}
            </div>
        </div>
    )
}
export default Nutrient
/*<div className="nutrient">
        <div className="nutrient-circle">
            <div>
                <div className="nutrient-amount">{amount}</div>
                <div className="nutrient-unit">{unit}</div>
            </div>

        </div>
        <p className="nutrient-name">{name}</p>
    </div>*/