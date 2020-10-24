import React from 'react'
import './LayoutContainer.css'
const LayoutContainer = ({children,wrap = false,style}) => {
    return (
        <div className="layout-container" style={style}>{children}</div>
    )
}
export default LayoutContainer       

