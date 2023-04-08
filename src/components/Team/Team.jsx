import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import Member from '../Member/Member'

import DataProvider from '../DataProvider/DataProvider'

gsap.registerPlugin(ScrollTrigger)

const tlSenior = gsap.timeline()

const tlMiddle = gsap.timeline()

const Team = () => {

    const membersGap = 40

    const marqueeSenior = useRef(null)

    const marqueeMiddle = useRef(null)

    const [memberOuterDefParent, setMemberOuterDefParent] = useState(null)

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (marqueeSenior.current !== null) {
            tlSenior.to(marqueeSenior.current, {
                scrollTrigger: {
                    trigger: marqueeSenior.current,
                    start: 'top 110%',
                },
                ease: 'none',
                duration: 8,
                repeat: -1,
                x: `-${marqueeSenior.current.offsetWidth + membersGap}`
            })
        }
    })

    useEffect(() => {
        if (marqueeMiddle.current !== null) {
            tlMiddle.to(marqueeMiddle.current, {
                scrollTrigger: {
                    trigger: marqueeMiddle.current,
                    start: 'top 110%',
                },
                ease: 'none',
                duration: 8,
                repeat: -1,
                keyframes: {
                    "0%": { x: `${-marqueeMiddle.current.offsetWidth - membersGap}px`, ease: 'none', },
                    "100%": { x: `0`, ease: 'none', }
                }
            })
        }
    })

    const memberClickHandler = jsxMember => {
        tlSenior.restart().pause()
        tlMiddle.restart().pause()
        setMemberOuterDefParent(jsxMember)
    }

    const memberCloseHandler = () => {
        tlSenior.resume()
        tlMiddle.resume()
        setMemberOuterDefParent(null)
    }

    return (
        <section className="team">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-6">
                        <h2 className="title team-top__title">
                            Meet the team Want to join?
                        </h2>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex align-items-center justify-content-end">
                            <button className="button button--accent team-top__button">Join us</button>
                            <button className="button button--secondary team-top__button">See all openings</button>
                        </div>
                    </div>
                </div>
                <div className="team-members overflow-hidden position-relative">
                    <div className={`team-members__inner ${memberOuterDefParent ? 'd-none' : ''}`}>
                        <DataProvider cb={() => setIsLoading(false)} url="./DB/members.json" render={data => (
                            <>
                                <div ref={marqueeSenior} className="team-members__marquee" style={{ gap: `${membersGap}px` }}>
                                    <ul style={{ gap: `${membersGap}px` }}>
                                        {data.map((member, i, arr) => i < arr.length / 2 && <Member {...member} memberClickHandler={memberClickHandler} memberCloseHandler={memberCloseHandler} key={i} />)}
                                    </ul>
                                    <ul aria-hidden="true" style={{ gap: `${membersGap}px` }}>
                                        {data.map((member, i, arr) => i < arr.length / 2 && <Member {...member} memberClickHandler={memberClickHandler} memberCloseHandler={memberCloseHandler} key={i} />)}
                                    </ul>
                                </div>
                                <div ref={marqueeMiddle} className="team-members__marquee" style={{ gap: `${membersGap}px` }}>
                                    <ul style={{ gap: `${membersGap}px` }}>
                                        {data.map((member, i, arr) => i >= arr.length / 2 && <Member {...member} memberClickHandler={memberClickHandler} memberCloseHandler={memberCloseHandler} key={i} />)}
                                    </ul>
                                    <ul aria-hidden="true" style={{ gap: `${membersGap}px` }}>
                                        {data.map((member, i, arr) => i >= arr.length / 2 && <Member {...member} memberClickHandler={memberClickHandler} memberCloseHandler={memberCloseHandler} key={i} />)}
                                    </ul>
                                </div>
                            </>
                        )} />
                    </div>
                    {memberOuterDefParent}
                </div>
            </div>
        </section>
    )
}

export default Team