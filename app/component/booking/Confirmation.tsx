"use client";

import Image from "next/image";
import {
  CheckCircle,
  CalendarDays,
  BedDouble,
  Users,
  Mail,
} from "lucide-react";


export default function Confirmation(){


return(

<section className="py-20 bg-[#faf7f2]">


<div className="
max-w-5xl
mx-auto
px-6
">



{/* Hero Image */}

<div className="
relative
h-[350px]
rounded-3xl
overflow-hidden
mb-10
">


<Image

src="/images/hotel.jpg"

alt="Luxury Hotel"

fill

className="
object-cover
"

/>


<div className="
absolute
inset-0
bg-black/50
flex
items-center
justify-center
">


<div className="text-center text-white">


<CheckCircle
size={70}
className="
mx-auto
text-green-400
"
/>


<h1 className="
text-4xl
md:text-5xl
font-serif
font-bold
mt-5
">

Booking Confirmed

</h1>


<p className="
mt-3
text-gray-200
">

Thank you for choosing LUXORA Hotel

</p>


</div>


</div>


</div>








{/* Confirmation Card */}


<div className="
bg-white
rounded-3xl
shadow-xl
p-8
">



<div className="
text-center
border-b
pb-6
">


<p className="
text-gray-500
">
Booking ID
</p>


<h2 className="
text-3xl
font-bold
text-orange-500
mt-2
">

LXR-2026-45892

</h2>


</div>








{/* Details */}


<div className="
grid
md:grid-cols-2
gap-6
mt-8
">



<div className="
flex
items-center
gap-4
bg-[#faf7f2]
p-5
rounded-2xl
">


<BedDouble
className="text-orange-500"
size={28}
/>


<div>

<p className="
text-gray-500
text-sm
">
Room
</p>


<h3 className="
font-semibold
">
Presidential Suite
</h3>


</div>


</div>







<div className="
flex
items-center
gap-4
bg-[#faf7f2]
p-5
rounded-2xl
">


<Users
className="text-orange-500"
size={28}
/>


<div>

<p className="
text-gray-500
text-sm
">
Guests
</p>


<h3 className="
font-semibold
">
2 Adults
</h3>


</div>


</div>








<div className="
flex
items-center
gap-4
bg-[#faf7f2]
p-5
rounded-2xl
">


<CalendarDays
className="text-orange-500"
size={28}
/>


<div>

<p className="
text-gray-500
text-sm
">
Stay Dates
</p>


<h3 className="
font-semibold
">
25 Aug - 30 Aug 2026
</h3>


</div>


</div>








<div className="
flex
items-center
gap-4
bg-[#faf7f2]
p-5
rounded-2xl
">


<Mail
className="text-orange-500"
size={28}
/>


<div>

<p className="
text-gray-500
text-sm
">
Confirmation Email
</p>


<h3 className="
font-semibold
">
guest@email.com
</h3>


</div>


</div>



</div>







{/* Button */}


<button

className="
mt-10
w-full
py-4
rounded-full
bg-black
text-white
font-semibold
hover:bg-orange-500
transition
"

>

Download Confirmation

</button>




</div>



</div>


</section>

)

}