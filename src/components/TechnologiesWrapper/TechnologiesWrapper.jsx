import { useEffect, useState, useRef } from 'react'
import Technologies from '../Technologies/Technologies'

const TechnologiesWrapper = () => {

    const technologies = [
        {
            mainTitle: 'No need to know any technologies',
            info: {
                bgClass: ['technologies__content-item__bg--balls'],
                isRight: false,
                itemTitle: 'Easy to understand',
                text: `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla interdum aliquet. Nulla viverra quam sit amet lacus accumsan, ac interdum nibh eleifend. Aliquam at elit at diam congue aliquam at eu felis. Vestibulum sed massa bibendum, porta ex consectetur, commodo tellus.<br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla interdum aliquet. Nulla viverra quam sit amet lacus accumsan, ac   interdum nibh eleifend. Aliquam at elit at diam congue aliquam at eu felis.
                `
            }
        },
        {
            mainTitle: 'Reuse the sections',
            info: {
                bgClass: ['technologies__content-item__bg--triangle-pink', 'technologies__content-item__bg--triangle-green'],
                isRight: true,
                itemTitle: 'Easy to change',
                text: `
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla interdum aliquet. Nulla viverra quam sit amet lacus accumsan, ac interdum nibh eleifend. Aliquam at elit at diam congue aliquam at eu felis. Vestibulum sed massa bibendum, porta ex consectetur, commodo tellus.<br /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla interdum aliquet. Nulla viverra quam sit amet lacus accumsan, ac   interdum nibh eleifend. Aliquam at elit at diam congue aliquam at eu felis.
                `
            }
        }
    ]

    const title = useRef(null)

    const container = useRef(null)

    const [containerRect, setContainerRect] = useState()

    useEffect(() => {
        if (container === null) return
        setContainerRect(container.current.getBoundingClientRect())
        window.addEventListener('resize', () => setContainerRect(container.current.getBoundingClientRect()))
    }, [])

    return (
        <section className="technologies position-relative">
            <div ref={container} className="container">
                {technologies.map(({ mainTitle, info }, i) => (
                    <div className="technologies-item" key={i}>
                        <div className="technologies-top position-relative">
                            <h3 ref={title} className="technologies__title title" style={{ marginLeft: info?.isRight && 'auto' }}>
                                {mainTitle}
                            </h3>
                            <div className="technologies__line containerOf__line containerOf__line--absolute" style={{
                                [info?.isRight ? 'left' : 'right']: `-${Math.ceil(containerRect?.left + 12)}px`,
                                width: `calc(100% + ${Math.ceil((containerRect?.left + 11) - (title.current && title.current.offsetWidth + 80))}px)`
                            }}></div>
                        </div>
                        <Technologies {...info} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TechnologiesWrapper
