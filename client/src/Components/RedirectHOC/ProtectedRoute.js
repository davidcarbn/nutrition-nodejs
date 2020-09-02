import React from 'react'
import { Route, Redirect } from 'react-router-dom'
export const ProtectedRoute = ({
    component: Component,
    redirectCond,
    redirectLocation='/',
    ...rest
}) => {
    
    console.log(redirectLocation)
    console.log(redirectCond())
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