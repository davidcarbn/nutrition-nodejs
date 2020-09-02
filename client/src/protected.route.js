import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthConsumer, useAuth } from './providers/AuthContext'
export const ProtectedRoute = ({ Component, ...rest }) => {
    const { isAuthenticated } = useAuth()
    return (
        <Route
            {...rest}
            render={props => {
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }}
        />

    )
}