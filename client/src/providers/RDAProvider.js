import React, { createContext, useContext, useState } from 'react'
import Food from '../objects/Food'


const RDAContext = createContext({
    rda: {},
    setRda: () => {}
})

export const RDAProvider = ({children}) => {
    const [rda,setRda] = useState(new Food())
    return (
        <RDAContext.Provider value={{rda,setRda}}>
            {children}
        </RDAContext.Provider>
    )
}
export const useRDA = () => {return useContext(RDAContext)}