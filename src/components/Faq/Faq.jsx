import { useEffect, useRef } from "react"

import shapesParallax from "../../utils/shapesParallax"

import AccordionItem from "../AccordionItem/AccordionItem"

const accordionData = [
    {
        title: 'Make the FAQs easy to find',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo accusantium officiis minus, eos repellat reprehenderit? Tenetur fugiat quo quam dolore nobis cumque autem culpa, eveniet sapiente molestiae dolorem quaerat sequi?'
    },
    {
        title: 'Keep answers short',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo accusantium officiis minus, eos repellat reprehenderit? Tenetur fugiat quo quam dolore nobis cumque autem culpa, eveniet sapiente molestiae dolorem quaerat sequi?'
    },
    {
        title: 'Write the FAQ sheet in an actual question-and-answer format',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo accusantium officiis minus, eos repellat reprehenderit? Tenetur fugiat quo quam dolore nobis cumque autem culpa, eveniet sapiente molestiae dolorem quaerat sequi?'
    },
    {
        title: 'Write questions from the point of view of your customer',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo accusantium officiis minus, eos repellat reprehenderit? Tenetur fugiat quo quam dolore nobis cumque autem culpa, eveniet sapiente molestiae dolorem quaerat sequi?'
    }
]

const Faq = () => {

    const faqParallaxBgRed = useRef(null)

    useEffect(() => {
        if (faqParallaxBgRed !== null) shapesParallax(faqParallaxBgRed.current, 200)
    }, [])

    return (
        <section className="faq position-relative">
            <div className="container">
                <div className="faq__inner">
                    <h2 className="faq__title">Frequently asked questions</h2>
                    <ul className="faq-items d-flex flex-column">
                        {accordionData.map((acc, i) => <AccordionItem {...acc} key={i} />)}
                    </ul>
                </div>
            </div>
            <div ref={faqParallaxBgRed} className="parallax-bg faq__bg faq__bg--red d-none d-lg-block"></div>
        </section>
    )
}

export default Faq