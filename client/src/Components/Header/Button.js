import React from 'react'
import { Link } from 'react-router-dom'
const Button = ({ target,children }) => {
    return (
        <Link to={target} className="btn-header">
        {children}
        </Link>
    )
}
export default Button