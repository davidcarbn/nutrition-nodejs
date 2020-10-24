import React from 'react'
import './LayoutContainerChild.css'
const LayoutContainerChild = ({ children, width, topRight, leftBottom }) => (
    <div className={`layout-container-child ${topRight ? "top-right" : ""} ${leftBottom ? "bottom-left" : ""}`} style={width? {flexBasis:width,flexGrow:0}:{}}>
        {children}
    </div>
)
export default LayoutContainerChild


