import { useEffect, useState, useRef } from 'react'
import VideoButton from '../VideoButton/VideoButton'

import videoImg from './../../images/video/advantagesVideo.jpg'

const AdvantagesVideo = () => {

    const title = useRef(null)

    const container = useRef(null)

    const [containerRect, setContainerRect] = useState()

    useEffect(() => {
        if (container === null) return
        setContainerRect(container.current.getBoundingClientRect())
        window.addEventListener('resize', () => setContainerRect(container.current.getBoundingClientRect()))
    }, [])

    return (
        <section className="advantages-video">
            <div ref={container} className="container">
                <div className="advantages-video__top position-relative">
                    <h3 ref={title} className="advantages-video__title title">
                        Watch video to discover advantages
                    </h3>
                    <div className="advantages-video__line containerOf__line containerOf__line--absolute" style={{
                        right: `-${Math.ceil(containerRect?.left + 12)}px`,
                        width: `calc(100% + ${Math.ceil((containerRect?.left + 11) - (title.current && title.current.offsetWidth + 80))}px)`
                    }}>
                    </div>
                </div>
                <div className="advantages-video__content position-relative">
                    <div className="advantages-video__img">
                        <img src={videoImg} alt="video" />
                    </div>
                    <VideoButton text="Product Overview" />
                </div>
            </div>
        </section>
    )
}

export default AdvantagesVideo