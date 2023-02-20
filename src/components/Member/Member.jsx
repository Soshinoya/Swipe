const Member = ({ image, nameAndSurname, position, desc, memberClickHandler, memberCloseHandler }) => {

    const jsxElem = isOpen => (
        <div className={`member ${isOpen ? 'member-open' : ''}`}>
            <div className="member-top">
                <div className="member__img" onClick={intermediateHandler}>
                    <img src={image} alt={nameAndSurname} />
                </div>
                <div className={`member-info ${isOpen ? 'd-flex flex-column align-items-baseline' : ''}`}>
                    <h6 className="title member__fullname">{nameAndSurname}</h6>
                    <p className="member__position">{position}</p>
                    <p className={`member-desc ${isOpen ? '' : 'd-none'}`}>{desc}</p>
                    <div className="member-info__close" onClick={memberCloseHandler}></div>
                </div>
            </div>
        </div>
    )

    function intermediateHandler() {
        memberClickHandler(jsxElem(true))
    }

    return jsxElem()
}

export default Member
