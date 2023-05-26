import React, { useEffect, useRef, useState } from 'react'

import Shape from '../Shape/Shape'

import Input from '../Input/Input'
import Textarea from '../Textarea/Textarea'

const Contact = () => {

    const title = useRef(null)

    const container = useRef(null)

    const [containerRect, setContainerRect] = useState(null)

    useEffect(() => {
        setContainerRect(container.current.getBoundingClientRect())
        window.addEventListener('resize', () => setContainerRect(container.current.getBoundingClientRect()))
    }, [])

    return (
        <section className="contact position-relative">
            <div ref={container} className="container">
                <div className="contact-top position-relative">
                    <h2 ref={title} className="contact-top__title title">
                        Contact us
                    </h2>
                    <div className="contact__line containerOf__line containerOf__line--absolute" style={{
                        right: `-${Math.ceil(containerRect?.left + 11)}px`,
                        width: `calc(100% + ${Math.ceil((containerRect?.left + 11) - (title.current && title.current.offsetWidth + 80))}px)`
                    }}></div>
                </div>
                <div className="row">
                    <div className="col-md-6 d-flex flex-column justify-content-end">
                        <div className="contact-content__inner">
                            <p className="contact-content__text position-relative">
                                The most popular questions are listed in the FAQs section. We are happy to help you with any of your questions, wishes and objections.
                            </p>
                            <p className="contact-content__text--hint">
                                Support service will contact you within 48 hours.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <form className="contact-form">
                            <div className="contact-form__fields">
                                <div className="contact-form__item">
                                    <label className="contact-form__label" htmlFor="name">How can we call you?</label>
                                    <Input className="contact-form__input" type="text" name="name" placeholder="Enter your name" />
                                </div>
                                <div className="contact-form__item">
                                    <label className="contact-form__label" htmlFor="email">How can we contact you?</label>
                                    <Input className="contact-form__input" type="email" name="email" placeholder="Enter your email" />
                                </div>
                                <div className="contact-form__item">
                                    <label className="contact-form__label" htmlFor="message">How can we help you?</label>
                                    <Textarea className="contact-form__textarea" height={100} name="message" placeholder="Enter your message" />
                                </div>
                            </div>
                            <button className="contact-form__btn button button--submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Shape offset={100} className="contact__bg-yellowsegment" />
            <Shape offset={500} className="contact__bg-purplering" />
        </section>
    )
}

export default Contact