import React from 'react'
import { Route, Redirect } from 'react-router-dom'
export const ProtectedRoute = ({
    component: Component,
    redirectCond,
    redirectLocation='/',
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={props => 
                redirectCond() ? (
                    <Redirect to={redirectLocation} />   
                ) : (
                    <Component {...props} />
                )
            }
        />

    )
}