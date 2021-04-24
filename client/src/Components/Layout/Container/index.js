import React from 'react'
import './Container.css'
/*
Modifiable flex container
*/
const Container = ({
    children,
    flexRow = false,
    flexCol = false,
    alignCenter = false,
    spaceBetween = false,
    justifyCenter = false,
    wrap = false,
    noSpacing = false,
    noPadding = false,
    noMargin = false
}) => {
    return (
        <div className={`container ${flexRow ? 'flex-row' : ''} ${flexCol ? 'flex-col' : ''} ${alignCenter ? 'align-center' : ''} ${spaceBetween ? 'space-between' : ''} ${justifyCenter ? 'justify-center' : ''} ${wrap ? 'wrap' : ''} ${noSpacing ? 'no-padding no-margin' : ''} ${noPadding ? 'no-padding' : ''} ${noMargin ? 'no-margin' : ''}`}>
            {children}
        </div>
    )
}
export default Container