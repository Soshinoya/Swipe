import { useEffect, useRef } from "react"

import shapesParallax from "../../utils/shapesParallax"

const Shape = ({ offset = 0, customOptions = {}, className = '' }) => {

    const shapesParallaxRef = useRef(null)

        useEffect(() => shapesParallax(shapesParallaxRef.current, +offset, customOptions))

    return (
        <div
            ref={shapesParallaxRef}
            className={`parallax-bg d-none d-lg-block ${className}`}>
        </div>
    )
}

export default Shape