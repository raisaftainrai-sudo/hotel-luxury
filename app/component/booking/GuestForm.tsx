"use client";

import {
  User,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";


export default function GuestForm() {


return (

<section className="py-20 bg-white">


<div className="
max-w-4xl
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
Guest Details
</p>


<h2 className="
text-4xl
font-serif
font-bold
text-gray-900
mt-3
">
Complete Your Information
</h2>


<p className="
text-gray-600
mt-4
">
Please provide your details to continue your booking.
</p>


</div>





{/* Form */}

<div className="
bg-[#faf7f2]
rounded-3xl
p-8
shadow-lg
">


<div className="
grid
md:grid-cols-2
gap-6
">



{/* Name */}

<div>

<label className="
text-sm
font-medium
text-gray-700
">
Full Name
</label>


<div className="
mt-2
relative
">


<User
className="
absolute
left-4
top-3.5
text-orange-500
"
size={20}
/>


<input

type="text"

placeholder="Enter your name"

className="
w-full
pl-12
py-3
rounded-xl
border
border-gray-200
outline-none
focus:border-orange-500
"
/>


</div>

</div>





{/* Email */}

<div>

<label className="
text-sm
font-medium
text-gray-700
">
Email Address
</label>


<div className="
mt-2
relative
">


<Mail
className="
absolute
left-4
top-3.5
text-orange-500
"
size={20}
/>


<input

type="email"

placeholder="Enter your email"

className="
w-full
pl-12
py-3
rounded-xl
border
border-gray-200
outline-none
focus:border-orange-500
"

/>


</div>


</div>






{/* Phone */}

<div>


<label className="
text-sm
font-medium
text-gray-700
">
Phone Number
</label>


<div className="
mt-2
relative
">


<Phone
className="
absolute
left-4
top-3.5
text-orange-500
"
size={20}
/>


<input

type="tel"

placeholder="Enter phone number"

className="
w-full
pl-12
py-3
rounded-xl
border
border-gray-200
outline-none
focus:border-orange-500
"

/>


</div>


</div>





{/* Guests */}

<div>


<label className="
text-sm
font-medium
text-gray-700
">
Number of Guests
</label>


<select

className="
mt-2
w-full
py-3
px-4
rounded-xl
border
border-gray-200
outline-none
focus:border-orange-500
"

>


<option>
1 Guest
</option>


<option>
2 Guests
</option>


<option>
3 Guests
</option>


<option>
4+ Guests
</option>


</select>


</div>



</div>





{/* Message */}

<div className="mt-6">


<label className="
text-sm
font-medium
text-gray-700
">
Special Request
</label>



<div className="
mt-2
relative
">


<MessageSquare

className="
absolute
left-4
top-4
text-orange-500
"

size={20}

/>



<textarea

rows={4}

placeholder="Any special requirements..."

className="
w-full
pl-12
pt-4
rounded-xl
border
border-gray-200
outline-none
focus:border-orange-500
resize-none
"

/>



</div>


</div>





{/* Button */}

<button

className="
mt-8
w-full
py-4
rounded-full
bg-black
text-white
font-semibold
hover:bg-orange-500
transition
duration-300
"

>

Continue Booking

</button>




</div>


</div>


</section>

)

}