import React, { useContext, createContext, useState } from 'react'

const DateContext = createContext({
    currentDate: {},
    setCurrentDate: () => {}
})
export const DateProvider = ({children}) => {
    const [currentDate,setCurrentDate] = useState(new Date().setHours(0,0,0,0))
    return (
        <DateContext.Provider value={{currentDate,setCurrentDate}}>
            {children}
        </DateContext.Provider>
    )
}
export const DateConsumer = DateContext.Consumer
export const useDate = () => {return useContext(DateContext)}