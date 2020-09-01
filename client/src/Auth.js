import React from 'react'
import { AuthProvider } from "./AuthContext"

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false,
            user: {
                roles: ["guest"]
            },
            accessToken: ""
        }
    }

    async initialLogin(email, password) {
        // call api
        try {
            const response = await fetch('localhost:3000/api/v1/auth', {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            console.log(response)
        const data = response.json()
        this.setState({
            authenticated: true
        })
        } catch (error) {
            console.log(error)
        }

    }
    logout() {
        // call api
    }

    render() {
        const authProviderValue = {
            ...this.state,
            initialLogin: this.initialLogin,
            logout: this.logout
        }
        return (
            <AuthProvider value={authProviderValue}>
                {this.props.children}
            </AuthProvider>
        )
    }
}
export default Auth