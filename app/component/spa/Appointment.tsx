"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock, User, Mail, Phone, Sparkles } from "lucide-react";



export default function Appointment(){


return (

<section className="bg-black py-24 relative overflow-hidden">



{/* Glow */}

<div className="
absolute
top-0
left-1/2
-translate-x-1/2

w-[500px]
h-[500px]

bg-orange-500/20

blur-[150px]

rounded-full
"/>





<div className="
max-w-6xl
mx-auto
px-6
relative
z-10
">





<motion.div

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.7
}}

viewport={{
once:true
}}

className="text-center mb-14"

>


<p className="
text-orange-400
uppercase
tracking-[6px]
font-semibold
">

Appointment

</p>




<h2 className="
mt-5
text-4xl
md:text-6xl
font-serif
font-bold
text-white
">

Book Your Spa Session

</h2>




<p className="
mt-5
text-gray-400
max-w-2xl
mx-auto
">

Schedule your relaxing wellness experience
with our professional spa therapists.

</p>



</motion.div>









{/* Form Card */}


<motion.div


initial={{
opacity:0,
scale:.9
}}

whileInView={{
opacity:1,
scale:1
}}

transition={{
duration:.6
}}

viewport={{
once:true
}}



className="

bg-white/5

backdrop-blur-xl


border

border-orange-400/30


rounded-[40px]


p-8

md:p-12


shadow-[0_0_40px_rgba(255,165,0,0.15)]

"

>






<form className="grid grid-cols-1 md:grid-cols-2 gap-6">





{/* Name */}

<div className="relative">

<User 
className="
absolute
left-4
top-4
text-orange-400
"
size={20}
/>


<input

type="text"

placeholder="Full Name"

className="
w-full
bg-black/40

border
border-white/20

rounded-full

py-4

pl-12

pr-5

text-white

outline-none

focus:border-orange-400

"
/>

</div>







{/* Email */}

<div className="relative">


<Mail

className="
absolute
left-4
top-4
text-orange-400
"

size={20}

/>


<input

type="email"

placeholder="Email Address"

className="
w-full

bg-black/40

border

border-white/20

rounded-full

py-4

pl-12

pr-5

text-white

outline-none

focus:border-orange-400

"

/>


</div>







{/* Phone */}


<div className="relative">


<Phone

className="
absolute
left-4
top-4
text-orange-400
"

size={20}

/>



<input

type="tel"

placeholder="Phone Number"

className="
w-full

bg-black/40

border

border-white/20

rounded-full

py-4

pl-12

pr-5

text-white

outline-none

focus:border-orange-400

"

/>


</div>







{/* Date */}

<div className="relative">


<CalendarDays

className="
absolute
left-4
top-4
text-orange-400
"

size={20}

/>



<input

type="date"

className="
w-full

bg-black/40

border

border-white/20

rounded-full

py-4

pl-12

pr-5

text-white

outline-none

focus:border-orange-400

"

/>


</div>







{/* Service */}


<div className="relative">


<Sparkles

className="
absolute
left-4
top-4
text-orange-400
"

size={20}

/>


<select

className="
w-full

bg-black/40

border

border-white/20

rounded-full

py-4

pl-12

pr-5

text-white

outline-none

focus:border-orange-400

"

>


<option>
Select Spa Service
</option>

<option>
Body Massage
</option>

<option>
Facial Treatment
</option>

<option>
Luxury Package
</option>

<option>
Private Spa
</option>


</select>


</div>








{/* Time */}

<div className="relative">


<Clock

className="
absolute
left-4
top-4
text-orange-400
"

size={20}

/>


<select

className="
w-full

bg-black/40

border

border-white/20

rounded-full

py-4

pl-12

pr-5

text-white

outline-none

focus:border-orange-400

"

>


<option>
Select Time
</option>

<option>
10:00 AM
</option>

<option>
1:00 PM
</option>

<option>
4:00 PM
</option>

<option>
7:00 PM
</option>


</select>



</div>








{/* Message */}


<textarea

placeholder="Special Request"

rows={4}

className="
md:col-span-2

w-full

bg-black/40

border

border-white/20

rounded-3xl

p-5

text-white

outline-none

focus:border-orange-400

"

/>








{/* Button */}


<button

type="submit"

className="
md:col-span-2

bg-orange-500

hover:bg-orange-600

text-white

font-semibold

py-4

rounded-full

transition-all

duration-300

"

>

Confirm Appointment

</button>






</form>






</motion.div>





</div>


</section>

);

}