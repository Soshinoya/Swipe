import React, { useRef, useState } from "react"

import useInput from '../../hooks/useInput/useInput'

import textareaAutoHeight from "./textareaAutoHeight"

const Textarea = ({ className = '', height, ...attrs }) => {
    const [input, setInput] = useState(useRef(null))

    const { value, onChange } = useInput('')

    textareaAutoHeight(input, height)

    return (
        <textarea
            ref={e => setInput(e)}
            value={value}
            onChange={onChange}
            className={`textarea ${className}`}
            style={{ height }}
            rows="1"
            {...attrs}
        >
        </textarea>
    )
}

export default Textarea