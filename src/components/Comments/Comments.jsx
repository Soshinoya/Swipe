import { useEffect, useState, useRef } from 'react'
import { Carousel } from 'react-bootstrap'

import Shape from '../Shape/Shape'
import DataSource from '../../service/DataSource'

const Comments = () => {

    const [comments, setComments] = useState([])

    const title = useRef(null)

    const container = useRef(null)

    const [containerRect, setContainerRect] = useState(null)

    useEffect(() => {
        setContainerRect(container.current.getBoundingClientRect())
        window.addEventListener('resize', () => setContainerRect(container.current.getBoundingClientRect()))
    }, [])

    useEffect(() => {
        DataSource.getComments().then(setComments)
    }, [])


    return (
        <section className="comments position-relative">
            <div ref={container} className="container">
                <div className="comments-top position-relative">
                    <h2 ref={title} className="comments-top__title title">
                        People talk about us
                    </h2>
                    <div className="comments__line containerOf__line containerOf__line--absolute" style={{
                        right: `-${Math.ceil(containerRect?.left + 11)}px`,
                        width: `calc(100% + ${Math.ceil((containerRect?.left + 11) - (title.current && title.current.offsetWidth + 80))}px)`
                    }}></div>
                </div>
                <div className="comments-slider">
                    <Carousel
                        indicators={false}
                        nextIcon={
                            <div className="comments-slider__btn comments-slider__btn--next glassmorphic-bg">
                                <i className="fas fa-angle-right"></i>
                            </div>
                        } prevIcon={
                            <div className="comments-slider__btn comments-slider__btn--prev glassmorphic-bg">
                                <i className="fas fa-angle-left"></i>
                            </div>
                        }>
                        {comments.length > 0 &&
                            comments.map(({ name, comment, photo, position, rate, social }, i) => {
                                return (
                                    <Carousel.Item key={i}>
                                        <div className="comments-item glassmorphic-bg">
                                            <div className="comments-item__info d-flex align-items-center">
                                                <div className="comments-item__img">
                                                    <img src={photo} alt={name} />
                                                </div>
                                                <div className="d-flex align-items-end justify-content-between flex-fill">
                                                    <div className="comments-item__peopleinfo">
                                                        <h4 className="title comments-item__peoplename">{name}</h4>
                                                        <p className="comments-item__peopleposition">{position}</p>
                                                    </div>
                                                    <div className="comments-item__stars">
                                                        {(() => {
                                                            let content = [];
                                                            for (let i = 1; i <= 5; i++) {
                                                                content.push(
                                                                    i <= rate
                                                                        ?
                                                                        <svg key={i} width="42" height="46" viewBox="0 0 42 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M41.6429 18.5661C41.8501 17.3995 41.0215 15.9995 39.9858 15.9995L28.1786 14.1329L22.7929 1.99953C22.5858 1.53286 22.3786 1.29953 21.9644 1.0662C20.9286 0.366197 19.6858 0.832864 19.0644 1.99953L13.8858 14.1329L2.07864 15.9995C1.45721 15.9995 1.04293 16.2329 0.835784 16.6995C0.00721263 17.6329 0.00721263 19.0328 0.835784 19.9661L9.32865 29.2994L7.25722 42.5994C7.25722 43.0661 7.25721 43.5328 7.46436 43.9994C8.08579 45.1661 9.32865 45.6328 10.3644 44.9328L20.9286 38.6328L31.4929 44.9328C31.7001 45.1661 32.1144 45.1661 32.5286 45.1661H32.9429C33.9786 44.9328 34.8072 43.7661 34.6001 42.3661L32.5286 29.0661L41.0215 19.7328C41.4358 19.4994 41.6429 19.0328 41.6429 18.5661V18.5661Z" fill="#EA5959" />
                                                                        </svg>
                                                                        :
                                                                        <svg key={i} width="42" height="46" viewBox="0 0 42 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M41.8592 17.5632C41.7287 17.1364 41.4905 16.7615 41.1757 16.484C40.8587 16.2065 40.4776 16.0384 40.0778 15.9999L28.2914 14.0632L23.0092 1.99985C22.8414 1.60535 22.5763 1.27264 22.2469 1.03985C21.9155 0.807074 21.5344 0.683594 21.1449 0.683594C20.7576 0.683594 20.3764 0.807074 20.045 1.03985C19.7156 1.27264 19.4505 1.60535 19.2806 1.99985L13.9985 14.0399L2.21207 15.9999C1.82885 16.0612 1.46843 16.2424 1.17221 16.5229C0.875999 16.8033 0.654359 17.1718 0.534216 17.5865C0.42443 17.9918 0.416144 18.423 0.507286 18.8342C0.598429 19.2453 0.78693 19.6205 1.05207 19.9199L9.60707 29.2532L7.53564 42.5065C7.46314 42.944 7.50043 43.3962 7.6475 43.8097C7.79457 44.2229 8.04314 44.5806 8.36422 44.8399C8.67907 45.0921 9.04779 45.241 9.431 45.2699C9.81629 45.2988 10.1995 45.2064 10.5392 45.0032L21.1449 38.7732L31.7092 45.0265C32.0013 45.2113 32.3286 45.3077 32.6621 45.3065C33.1012 45.3084 33.53 45.153 33.8842 44.8632C34.2074 44.604 34.4559 44.2463 34.603 43.833C34.748 43.4196 34.7874 42.9674 34.7128 42.5299L32.6414 29.2765L41.1964 19.9432C41.4967 19.6578 41.7184 19.2826 41.8344 18.8612C41.9524 18.4401 41.9607 17.9899 41.8592 17.5632V17.5632ZM29.1199 26.8965C28.8776 27.1611 28.6953 27.4887 28.5917 27.8509C28.4861 28.2128 28.4633 28.5982 28.5192 28.9732L30.0107 38.7499L22.2221 34.0832C21.9238 33.9035 21.5882 33.8095 21.2485 33.8095C20.9108 33.8095 20.5753 33.9035 20.2749 34.0832L12.4864 38.7499L13.9778 28.9732C14.0358 28.5982 14.013 28.2128 13.9074 27.8509C13.8017 27.4887 13.6215 27.1611 13.3771 26.8965L7.16278 19.8965L15.8835 18.4732C16.2191 18.4207 16.5381 18.2761 16.8136 18.0524C17.087 17.8286 17.3086 17.5325 17.4578 17.1899L21.1449 8.29985L25.0392 17.2132C25.1884 17.5558 25.41 17.852 25.6855 18.0757C25.9589 18.2994 26.2779 18.444 26.6135 18.4965L35.3342 19.9199L29.1199 26.8965Z" fill="#EA5959" />
                                                                        </svg>
                                                                );
                                                            }
                                                            return content;
                                                        })()}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-baseline justify-content-between">
                                                <ul className="comments-item__links d-flex align-items-center">
                                                    {social.map((elem, i) => <li key={i}>
                                                        <i className={elem}></i>
                                                    </li>)}
                                                </ul>
                                                <p className="comments-item__comment">{comment}</p>
                                            </div>
                                        </div>
                                    </Carousel.Item>
                                )
                            })}
                    </Carousel>
                </div>
            </div>
            <Shape offset={500} className="comments__bg-greentriangle" />
            <Shape offset={1000} className="comments__bg-pinktriangle" />
        </section>
    )
}

export default Comments
