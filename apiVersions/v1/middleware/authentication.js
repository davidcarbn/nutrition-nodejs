import express from 'express'

const authentication = (req,res,next) => {
    try {
        const token = req.cookies.accessToken
        if (!token) {
            
        } 
    } catch (error) {
        
    }
    
}