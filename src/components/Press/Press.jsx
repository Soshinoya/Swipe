import React, { useEffect, useRef, useState } from "react"

import DataProvider from './../DataProvider/DataProvider'
import PressSingle from "../PressSingle/PressSingle"

const Press = () => {

    const pressArticles = useRef(null)

    const [pressArticlesLeftPos, setPressArticlesLeftPos] = useState('0px')

    const [isMouseDown, setIsMouseDown] = useState(false)

    const [mouseStartPos, setMouseStartPos] = useState(0)
    const [mouseMovePos, setMouseMovePos] = useState(0)

    useEffect(() => {
        if (!pressArticles.current) {
            return
        }
        if (isMouseDown) {
            pressArticles.current.style.left = (pressArticlesLeftPos.match(/[-+]?\d+(\.\d+)?/g) - (mouseStartPos - mouseMovePos)) + 'px'
        } else {
            setPressArticlesLeftPos(pressArticles.current.style.left)
        }
    }, [mouseStartPos, mouseMovePos, isMouseDown])

    document.onmouseleave = () => setIsMouseDown(false)

    return (
        <section className="press">
            <div className="container">
                <div className="press-top d-flex align-items-baseline justify-content-between">
                    <h2 className="title press-top__title">
                        In the press
                    </h2>
                    <button className="button button--accent press-top__button">
                        View more
                    </button>
                </div>
                <ul ref={pressArticles} className="press-articles"
                    onMouseMove={({ clientX }) => setMouseMovePos(clientX)}
                    onMouseUp={() => setIsMouseDown(false)}
                    onMouseDown={({ clientX }) => {
                        setMouseStartPos(clientX)
                        setIsMouseDown(true)
                    }}
                >
                    <DataProvider url="./DB/press.json" render={data => data.length > 0 && data.map((articleIntro, i, a) => (
                        <>
                            <PressSingle {...articleIntro} />
                            {a[i + 1] && <div className="press-articles--separator"></div>}
                        </>
                    ))} />
                </ul>
            </div>
        </section>
    )
}

export default Press