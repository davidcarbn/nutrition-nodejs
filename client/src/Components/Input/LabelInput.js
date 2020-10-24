import React from 'react'
import './LabelInput.css'
const LabelInput = ({
    label = "Label",
    id = "",
    type = "text",
    inputmode = "text",
    onChange = () => { },
    value = "",
    autoFocus = false,
    required = false,
    disabled = false,
    ...rest
}) => {
    return (
        <div className="input-field">
            <input id={id} type={type} inputMode={inputmode} onChange={onChange} value={value} autoFocus={autoFocus} required={required} disabled={disabled} {...rest} />
            <label htmlFor={id}>{label}</label>
        </div>
    )

}
export default LabelInput