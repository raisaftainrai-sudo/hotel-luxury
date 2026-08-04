"use client";

import Image from "next/image";


export default function BookingHero(){

return(

<section
className="
relative
h-[70vh]
flex
items-center
justify-center
overflow-hidden
"
>


{/* Background Image */}

<Image

src="/images/booking-hero.jpg"

alt="Luxury Hotel"

fill

className="
object-cover
"

/>



{/* Overlay */}

<div
className="
absolute
inset-0
bg-black/60
bg-gradient-to-r
from-black
via-black/70
to-orange-900/40
"
/>



{/* Content */}

<div
className="
relative
text-center
px-6
"
>


<h1
className="
text-5xl
md:text-7xl
font-serif
font-bold
text-white
"
>

Book Your Luxury Stay

</h1>



<p
className="
mt-6
max-w-2xl
mx-auto
text-gray-200
text-lg
"
>

Reserve your room at LUXORA
and experience premium comfort,
luxury and unforgettable hospitality.

</p>



<button
className="
mt-8
px-8
py-3
rounded-full
bg-orange-500
text-white
hover:bg-orange-600
transition
"
>

Book Now

</button>


</div>


</section>

)

}