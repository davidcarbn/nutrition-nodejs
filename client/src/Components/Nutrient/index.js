import React from 'react'
import './Nutrient.css'

const Nutrient = ({ name, unit, amount, rda }) => {
    const percentage = amount / rda || 0
    const circumference = (2.2 * 2 * Math.PI)
    const strokeDashoffset = circumference - percentage * circumference
    console.log("per", percentage)
    return (
        <div className="nutrient">
            <svg height="6em" width="6em">
                <circle cx="3em" cy="3em" fill="transparent" stroke="lightgrey" stroke-width="0.4em" r="2.2em" />
                <circle className="nutrient-circle" cx="3em" cy="3em" fill="transparent" stroke="#1a73e8" stroke-width="0.4em" r="2.2em"
                    strokeDasharray={circumference + 'em ' + circumference + 'em'} style={{ strokeDashoffset: strokeDashoffset + 'em' }} />
            </svg>
            <div className="nutrient-info">
                <div>
                    <div className="nutrient-amount">
                        {parseInt(amount)}
                    </div>
                    <div className="nutrient-unit">
                        {unit}
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