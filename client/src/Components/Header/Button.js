import React from 'react'
import { useHistory } from 'react-router-dom'

/* You can set eather target + state or pass down a custom handleSubmit function*/
const Button = ({ target, state, handleSubmit, children,...rest }) => {
    const history = useHistory()
    const handleClick = (e) => {
        if (!handleSubmit) {
            return history.push({
                pathname: target,
                state: state
            })
        }
        handleSubmit(e)
    }
    return (
        <button onClick={e => handleClick(e)} className="btn-header" {...rest}>
            {children}
        </button>
    )
}
export default Button