import BookingHero from "../component/booking/BookingHero"
import RoomSelection from "../component/booking/RoomSelection"
import GuestForm from "../component/booking/GuestForm"
import ExtraServices from "../component/booking/ExtraServices"
import BookingSummary from "../component/booking/BookingSummary"
import Confirmation from "../component/booking/Confirmation"
import DatePicker from "../component/booking/DatePicker"
export default function(){
return(
    <>
    <BookingHero />
    <RoomSelection />
    <GuestForm />
    <ExtraServices />
    <BookingSummary />
    <Confirmation />
    <DatePicker />
    </>
)
}

