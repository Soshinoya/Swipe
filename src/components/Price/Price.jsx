import { useEffect, useState, useRef } from 'react'

import PriceItem from '../PriceItem/PriceItem'
import Shape from '../Shape/Shape'

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
            <Shape offset={500} customOptions={{ start: 'top 75%' }} className="price__bg-yellowsegment price__bg" />
            <Shape offset={500} customOptions={{ start: 'top 75%' }} className="price__bg-purplering price__bg" />
        </section>
    )
}

export default Price
