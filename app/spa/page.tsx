import SpaHero from "../component/spa/SpaHero"
import WellnessIntro from "../component/spa/WellnessIntro"
import SpaTreatments from "../component/spa/SpaTreatments"
import MassagePackages from "../component/spa/MassagePackages"
import BeautyServices from "../component/spa/BeautyServices"
import FitnessCenter from "../component/spa/FitnessCenter"
import SpaGallery from "../component/spa/SpaGallery"
import SpaGalleryCTA from "../component/spa/SpaGarrelyCTA"
import Appointment from "../component/spa/Appointment"
export default function(){
return(
    <>
    <SpaHero />
    <WellnessIntro />
    <SpaTreatments />
    <MassagePackages />
    <BeautyServices />
    <FitnessCenter />
    <SpaGallery />
    <SpaGalleryCTA />
    <Appointment />
    </>
)

}