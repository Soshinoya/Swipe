import AdvantagesVideo from "../components/AdvantagesVideo/AdvantagesVideo"
import Companies from "../components/Companies/Companies"
import Faq from "../components/Faq/Faq"
import Features from "../components/Features/Features"
import Offer from "../components/Offer/Offer"
import Price from "../components/Price/Price"
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
        </>
    )
}

export default Home