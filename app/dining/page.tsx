import DiningHero from "../component/dining/DiningHero"
import RestaurantExperience from "../component/dining/RestaurantExperience"
import RestaurantIntro from "../component/dining/RestaurantIntro"
import DiningOffer from "../component/dining/DiningOffer"
import SignatureRestaurants from "../component/dining/SignatureRestaurants"
import ChefExperience from "../component/dining/ChefExperience"
import CafeLounge from "../component/dining/CafeLounge"
import FoodGallery from "../component/dining/FoodGallery" 
import ReservationCTA from "../component/dining/ReservationCTA"
export default function(){
    return(
        <>
    <DiningHero />  
    <RestaurantExperience />
    <RestaurantIntro />
    <DiningOffer />
    <SignatureRestaurants />
    <ChefExperience />
    < CafeLounge />
    <FoodGallery />
    <ReservationCTA />
        </>
    )
}