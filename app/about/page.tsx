import AboutHero from "../component/about/AboutHero"
import HotelIntroduction from "../component/about/HotelIntroduction"
import OurStory from "../component/about/OurStory"
import LuxuryExperience from "../component/about/LuxuryExperience"
import MissionVision from "../component/about/MissionVision"
import Award from "../component/about/Award"
import Sustainability from "../component/about/Sustainability"
import FAQ from "../component/about/FAQ"
export default function AboutPage() {
    return (
        <>
            <AboutHero />
            <HotelIntroduction />
            <OurStory />
            <LuxuryExperience />
            <MissionVision />
            <Award />
            <Sustainability />
            <FAQ />
        </>
    )
}

