import AccordionItem from "../AccordionItem/AccordionItem"
import Shape from "../Shape/Shape"

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
            <Shape offset={200} className="faq__bg faq__bg--red" />
        </section>
    )
}

export default Faq