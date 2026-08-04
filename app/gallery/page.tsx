
import GalleryHero from "../component/gallery/GalleryHero"
import LuxuryGallery from "../component/gallery/LuxuryGallery"
import EventGallery from "../component/gallery/EventsGallery"
import InteriorGallery from "../component/gallery/InteriorGallery"
import RoomGallery from "../component/rooms/RoomGallery"
import RestaurantGallery from "../component/gallery/RestaurantGallery"
import GalleryCTA from "../component/gallery/GalleryCTA"
export default function () {
    return (
        <>
            <GalleryHero />
            <LuxuryGallery />
            <EventGallery />
            <InteriorGallery />
            <RoomGallery />
            <RestaurantGallery />
            <GalleryCTA />
        </>
    )
}