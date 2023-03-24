import { useEffect, useState, useRef } from 'react'

import shapesParallax from './../../utils/shapesParallax'

import PriceItem from '../PriceItem/PriceItem'

const priceOffers = [
    {
        title: 'Basic',
        isCool: false,
        arrOfStr: [
            { text: 'Free 30-days trial period', isIncluded: true },
            { text: 'Professional design and guidelines for customization', isIncluded: true },
            { text: 'Unlimited amount of pages to change', isIncluded: true },
            { text: '24/7 technical support', isIncluded: false },
            { text: 'Advenced security components', isIncluded: false }
        ],
        price: 29
    },
    {
        title: 'Pro',
        isCool: true,
        arrOfStr: [
            { text: 'Free 30-days trial period', isIncluded: true },
            { text: 'Professional design and guidelines for customization', isIncluded: true },
            { text: 'Unlimited amount of pages to change', isIncluded: true },
            { text: '24/7 technical support', isIncluded: true },
            { text: 'Advenced security components', isIncluded: true }
        ],
        price: 39
    }
]

const Price = () => {
    const title = useRef(null)

    const container = useRef(null)

    const [containerRect, setContainerRect] = useState(null)

    useEffect(() => {
        setContainerRect(container.current.getBoundingClientRect())
        window.addEventListener('resize', () => setContainerRect(container.current.getBoundingClientRect()))
    }, [])

    const yellowSegment = useRef(null)

    const purpleRing = useRef(null)

    useEffect(() => {
        if (yellowSegment !== null) shapesParallax(yellowSegment.current, 500, { start: 'top 75%' })
        if (purpleRing !== null) shapesParallax(purpleRing.current, 500, { start: 'top 75%' })
    }, [])

    return (
        <section className="price position-relative">
            <div ref={container} className="container">
                <div className="price-top position-relative">
                    <h2 ref={title} className="price-top__title title">
                        Price plans
                    </h2>
                    <div className="price__line containerOf__line containerOf__line--absolute" style={{
                        right: `-${Math.ceil(containerRect?.left + 11)}px`,
                        width: `calc(100% + ${Math.ceil((containerRect?.left + 11) - (title.current && title.current.offsetWidth + 80))}px)`
                    }}></div>
                </div>
                <div className="price-offers">
                    {priceOffers.map((o, i) => <PriceItem {...o} key={i} />)}
                </div>
            </div>
            <div ref={yellowSegment} className="parallax-bg price__bg-yellowsegment price__bg d-none d-lg-block"></div>
            <div ref={purpleRing} className="parallax-bg price__bg-purplering price__bg d-none d-lg-block"></div>
        </section>
    )
}

export default Price
