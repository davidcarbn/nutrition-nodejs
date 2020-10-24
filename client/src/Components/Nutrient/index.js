import React from 'react'
import './Nutrient.css'

const Nutrient = ({name,unit,amount}) => (
    <div className="nutrient">
        <div className="nutrient-circle">
            <div>
                <div className="nutrient-amount">{amount}</div>
                <div className="nutrient-unit">{unit}</div>
            </div>
            
        </div>
        <p className="nutrient-name">{name}</p>
    </div>
)
export default Nutrient
