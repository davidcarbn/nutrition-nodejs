import React from 'react'
import './Container.css'

const Container = ({
    children,
    flexRow = false,
    flexCol = false,
    alignCenter = false,
    spaceBetween = false,
    justifyCenter = false,
    wrap = false
}) => {
    return (
        <div className={`
            container
            ${flexRow ? 'flex-row' : ''}
            ${flexCol ? 'flex-col' : ''}
            ${alignCenter ? 'align-center' : ''}
            ${spaceBetween ? 'space-between' : ''}
            ${justifyCenter ? 'justify-center' : ''}
            ${wrap ? 'wrap' : ''}
        `}>
            {children}
        </div>
    )
}
export default Container