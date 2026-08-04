import Rooms from "../component/rooms/Rooms"
import Dining from "../component/rooms/Dining"
import Booking from "../component/rooms/Booking"
import HotelTestimonials from "../component/rooms/HotelTestimonials"
import RoomGallery from "../component/rooms/RoomGallery"
import RoomAmenities from "../component/rooms/RoomsAmenities"
import DeluxeRooms from "../component/rooms/DeluxeRooms"
import RoomDetails from "../component/rooms/RoomDetails"
export default function(){
    return(
        <>
        <Rooms />
<Dining />
        <Booking />
        <HotelTestimonials />
        <RoomGallery />
        <RoomAmenities />
        <DeluxeRooms />
        <RoomDetails />
        </>
    )
}