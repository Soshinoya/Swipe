import React from "react"

const Input = ({ className = '', ...attrs }) => {
    return <input className={`input ${className}`} autoComplete="false" {...attrs} />
}

export default Input