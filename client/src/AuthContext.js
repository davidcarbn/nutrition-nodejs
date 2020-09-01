import { createContext } from 'react';

const authContext = createContext({
    authenticated: false,
    user: {},
    accessToken: "",
    initialLogin: () => {},
    handleAuthentication: () => {},
    logout: () => {}
})
export const AuthProvider = authContext.Provider 
export const AuthConsumer = authContext.Consumer 
