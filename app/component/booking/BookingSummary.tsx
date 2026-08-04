"use client";

import {
  CalendarDays,
  Users,
  BedDouble,
  Sparkles,
  CreditCard,
} from "lucide-react";


export default function BookingSummary(){


return(

<section className="py-20 bg-white">


<div className="
max-w-5xl
mx-auto
px-6
">


{/* Heading */}

<div className="text-center mb-12">


<p className="
text-orange-500
uppercase
tracking-[4px]
font-medium
">
Booking Summary
</p>


<h2 className="
text-4xl
md:text-5xl
font-serif
font-bold
text-gray-900
mt-3
">

Review Your Stay

</h2>


</div>






{/* Summary Card */}


<div className="
bg-[#faf7f2]
rounded-3xl
shadow-xl
p-8
">


{/* Room */}

<div className="
flex
items-center
gap-4
border-b
pb-6
">


<div className="
w-14
h-14
rounded-full
bg-orange-500
flex
items-center
justify-center
text-white
">


<BedDouble size={28}/>


</div>



<div>

<h3 className="
text-xl
font-bold
text-gray-900
">

Presidential Suite

</h3>


<p className="
text-gray-600
">

Luxury Room Selection

</p>


</div>


</div>







{/* Details */}


<div className="
grid
md:grid-cols-3
gap-6
py-8
">



<div className="
flex
items-center
gap-3
">

<CalendarDays
className="text-orange-500"
/>


<div>

<p className="
text-sm
text-gray-500
">
Check In
</p>


<p className="
font-semibold
">
25 Aug 2026
</p>


</div>


</div>







<div className="
flex
items-center
gap-3
">

<CalendarDays
className="text-orange-500"
/>


<div>

<p className="
text-sm
text-gray-500
">
Check Out
</p>


<p className="
font-semibold
">
30 Aug 2026
</p>


</div>


</div>







<div className="
flex
items-center
gap-3
">

<Users
className="text-orange-500"
/>


<div>

<p className="
text-sm
text-gray-500
">
Guests
</p>


<p className="
font-semibold
">
2 Adults
</p>


</div>


</div>



</div>








{/* Services */}


<div className="
border-t
pt-6
">


<h3 className="
text-xl
font-serif
font-bold
mb-5
flex
items-center
gap-2
">

<Sparkles
className="text-orange-500"
/>

Extra Services

</h3>




<div className="
space-y-3
">


<div className="
flex
justify-between
text-gray-700
">

<span>
Luxury Spa Treatment
</span>

<span>
$120
</span>

</div>



<div className="
flex
justify-between
text-gray-700
">

<span>
Fine Dining Experience
</span>

<span>
$80
</span>

</div>



<div className="
flex
justify-between
text-gray-700
">

<span>
Airport Pickup
</span>

<span>
$50
</span>

</div>


</div>


</div>








{/* Total */}


<div className="
mt-8
bg-black
text-white
rounded-2xl
p-6
flex
items-center
justify-between
">


<div>


<p className="
text-gray-300
">
Total Amount
</p>


<h3 className="
text-3xl
font-bold
">
$1050
</h3>


</div>





<button

className="
flex
items-center
gap-2
px-7
py-3
rounded-full
bg-orange-500
hover:bg-orange-600
transition
"

>


<CreditCard size={20}/>

Proceed Payment


</button>


</div>




</div>



</div>


</section>


)

}