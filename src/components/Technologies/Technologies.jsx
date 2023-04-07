import AnimationLink from '../AnimationLink/AnimationLink'
import Shape from '../Shape/Shape';

const Technologies = ({ itemTitle, text, isRight = false, bgClass = [] }) => {
    return (
        <div className="technologies__content">
            <div className="technologies__content-item" style={{ marginLeft: !isRight && '550px' }}>
                {bgClass?.map((bg, i) => <Shape offset={300} className={bg} key={i} />)}
                <div className="technologies__content-item__info d-flex flex-column">
                    <h4 className="technologies__content-item__title title">{itemTitle}</h4>
                    <p className="technologies__content-item__text">{text}</p>
                    <AnimationLink text="learn more" marginLeft={25} />
                </div>
            </div>
        </div>
    )
}

export default Technologies
