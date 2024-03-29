import AdvantagesVideo from "../components/AdvantagesVideo/AdvantagesVideo"
import Comments from "../components/Comments/Comments"
import Companies from "../components/Companies/Companies"
import Contact from "../components/Contact/Contact"
import Faq from "../components/Faq/Faq"
import Features from "../components/Features/Features"
import Offer from "../components/Offer/Offer"
import Press from "../components/Press/Press"
import Price from "../components/Price/Price"
import SocialMediaSlider from "../components/SocialMediaSlider/SocialMediaSlider"
import Statistic from "../components/Statistic/Statistic"
import Team from "../components/Team/Team"
import TechnologiesWrapper from "../components/TechnologiesWrapper/TechnologiesWrapper"

const Home = () => {
    return (
        <>
            <Offer />
            <Companies />
            <Statistic />
            <Features />
            <AdvantagesVideo />
            <TechnologiesWrapper />
            <Price />
            <Team />
            <Faq />
            <Comments />
            <Press />
            <Contact />
            <SocialMediaSlider />
        </>
    )
}

export default Home