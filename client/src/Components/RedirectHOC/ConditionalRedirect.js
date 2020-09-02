import React from 'react'
import {useHistory} from 'react-router-dom'
export const ConditionalRedirect = ({
    WrappedComponent,
    redirectCond,
    location
}) => {
    return props => {
        const history = useHistory()
        if (redirectCond()) {
            history.push(location)
        }
        return <WrappedComponent {...props} />
    }
    
}