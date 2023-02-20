import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import Member from '../Member/Member'

import member1 from './../../images/members/1.png'
import member2 from './../../images/members/2.png'
import member3 from './../../images/members/3.png'
import member4 from './../../images/members/4.png'
import member5 from './../../images/members/5.png'
import member6 from './../../images/members/6.png'
import member7 from './../../images/members/7.png'
import member8 from './../../images/members/8.png'

gsap.registerPlugin(ScrollTrigger)

const tlSenior = gsap.timeline()

const tlMiddle = gsap.timeline()

const membersSenior = [
    { image: member1, nameAndSurname: 'Martin Fury', position: 'CEO & Co-Founder', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { image: member2, nameAndSurname: 'Timoty Crash', position: 'CTO & Co-Founder', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { image: member3, nameAndSurname: 'Miranda Loudy', position: 'Global HRD', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { image: member4, nameAndSurname: 'Jim Partners', position: 'Chief Product Officer', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
]

const membersMiddle = [
    { image: member5, nameAndSurname: 'Joe Lee', position: 'Lead Product Designer', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { image: member6, nameAndSurname: 'Alex Sosnovskyi', position: 'Technical Lead & Senior Software Engineer', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { image: member7, nameAndSurname: 'Andy Gupta', position: 'CMO & Marketing Operations', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { image: member8, nameAndSurname: 'Dan Wize-Nicon', position: 'UI/UX Designer', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
]

const Team = () => {

    const membersGap = 40

    const marqueeSenior = useRef(null)

    const marqueeMiddle = useRef(null)

    const [memberOuterDefParent, setMemberOuterDefParent] = useState(null)

    useEffect(() => {
        if (marqueeSenior.current !== null) {
            tlSenior.to(marqueeSenior.current, {
                scrollTrigger: {
                    trigger: marqueeSenior.current,
                },
                ease: 'none',
                duration: 8,
                repeat: -1,
                x: `-${marqueeSenior.current.offsetWidth + membersGap}`
            })
        }
    }, [])

    useEffect(() => {
        if (marqueeMiddle.current !== null) {
            tlMiddle.to(marqueeMiddle.current, {
                scrollTrigger: {
                    trigger: marqueeMiddle.current,
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
    }, [])

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
                        <div ref={marqueeSenior} className="team-members__marquee" style={{ gap: `${membersGap}px` }}>
                            <ul style={{ gap: `${membersGap}px` }}>
                                {membersSenior.map((member, i) => <Member {...member} memberClickHandler={memberClickHandler} memberCloseHandler={memberCloseHandler} key={i} />)}
                            </ul>
                            <ul aria-hidden="true" style={{ gap: `${membersGap}px` }}>
                                {membersSenior.map((member, i) => <Member {...member} memberClickHandler={memberClickHandler} memberCloseHandler={memberCloseHandler} key={i} />)}
                            </ul>
                        </div>
                        <div ref={marqueeMiddle} className="team-members__marquee" style={{ gap: `${membersGap}px` }}>
                            <ul style={{ gap: `${membersGap}px` }}>
                                {membersMiddle.map((member, i) => <Member {...member} memberClickHandler={memberClickHandler} memberCloseHandler={memberCloseHandler} key={i} />)}
                            </ul>
                            <ul aria-hidden="true" style={{ gap: `${membersGap}px` }}>
                                {membersMiddle.map((member, i) => <Member {...member} memberClickHandler={memberClickHandler} memberCloseHandler={memberCloseHandler} key={i} />)}
                            </ul>
                        </div>
                    </div>
                    {memberOuterDefParent}
                </div>
            </div>
        </section>
    )
}

export default Team