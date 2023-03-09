import { useRef } from 'react'
import gsap from 'gsap'

const AnimationLink = ({ text, marginLeft }) => {

    const animationLinkText = useRef(null)

    const animationLinkBox = useRef(null)

    const tl = gsap.timeline()

    const animationLinkMouseEnterHandler = () => {
        tl.to(animationLinkBox.current, { duration: .2, height: `${animationLinkText.current.offsetHeight + marginLeft / 2}`, borderRadius: '10' })
        tl.to(animationLinkBox.current, { duration: .2, width: `${animationLinkText.current.offsetWidth + marginLeft * 2}` })
        tl.to(animationLinkText.current, { duration: .2, color: '#FFF' })
    }

    const animationLinkMouseLeaveHandler = () => {
        tl.to(animationLinkText.current, { duration: .2, color: '#1A1930' })
        tl.to(animationLinkBox.current, { duration: .2, width: '15' })
        tl.to(animationLinkBox.current, { duration: .2, height: '15', borderRadius: 0 })
    }

    return (
        <a className="animation-link position-relative d-flex align-items-center" href='#' onMouseEnter={animationLinkMouseEnterHandler} onMouseLeave={animationLinkMouseLeaveHandler}>
            <div ref={animationLinkBox} className="animation-link__box position-absolute"></div>
            <p ref={animationLinkText} style={{ marginLeft: `${marginLeft}px` }}>{text}</p>
        </a>
    )
}

export default AnimationLink
