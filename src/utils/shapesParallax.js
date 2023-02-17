import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const shapesParallax = (target, offset = 1500, customOptions) => {
    gsap.to(target, {
        scrollTrigger: {
            trigger: target,
            toggleActions: 'play pause resume reset',
            scrub: 1,
            ...customOptions
        },
        keyframes: {
            "0%": { y: 0 },
            "100%": { y: `-${offset}px` }
        },
    })
}

export default shapesParallax;
