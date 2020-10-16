import React from 'react'
import { Link, useHistory } from 'react-router-dom'

/* You can set eather target + state or pass down a custom handleSubmit function*/
const Button = ({ target, state, handleSubmit, children }) => {
    const history = useHistory()
    const handleClick = (e) => {
        if (!handleSubmit) {
            return history.push({
                pathname: target,
                state: state
            })
        }
        handleSubmit()
    }
    return (
        <button onClick={handleClick} className="btn-header">
            {children}
        </button>
    )
}
export default Button