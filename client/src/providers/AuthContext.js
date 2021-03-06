import React, { createContext , useContext, useState} from 'react';

const AuthContext = createContext({
    isAuthenticated: false,
    user: {},
    setIsAuthenticated: () => {},
    setUser: () => {},
})
export const AuthProvider = ({children}) => {
    const [isAuthenticated,setIsAuthenticated] = useState()
    const [user,setUser] = useState({})
    return (
        <AuthContext.Provider value={{isAuthenticated,setIsAuthenticated,user,setUser}}>
            {children}
        </AuthContext.Provider>
    )
}
export const AuthConsumer = AuthContext.Consumer
export const useAuth = () => { return useContext(AuthContext) }