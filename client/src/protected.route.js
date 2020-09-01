import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthConsumer } from './AuthContext'
export const ProtectedRoute = ({ Component, ...rest }) => {
    return (
        <AuthConsumer>
            {({ authenticated }) => {
                return <Route
                    {...rest}
                    render={props => {
                        if (authenticated) {
                            return <Component {...props} />
                        } else {
                            return <Redirect to="/" />
                        }

                    }}
                />
            }}
        </AuthConsumer>

    )
}