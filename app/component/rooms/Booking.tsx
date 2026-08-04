"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Users,
  BedDouble,
  Mail,
  Phone,
  User,
  Sparkles,
  ShieldCheck,
  Star
} from "lucide-react";


export default function Booking(){

return(

<section className="relative overflow-hidden bg-black py-28">


{/* Background Glow */}

<div className="
absolute
top-20
left-10
w-[350px]
h-[350px]
bg-orange-500/20
blur-[120px]
rounded-full
animate-pulse
"/>


<div className="
absolute
bottom-0
right-10
w-[400px]
h-[400px]
bg-yellow-500/10
blur-[150px]
rounded-full
"/>





<div className="
max-w-7xl
mx-auto
px-6
relative
z-10
">



<div className="
grid
lg:grid-cols-2
gap-12
items-center
">





{/* LEFT CONTENT */}


<motion.div

initial={{opacity:0,x:-50}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:.8
}}

viewport={{
once:true
}}

>


<div className="
flex
items-center
gap-2
text-orange-400
uppercase
tracking-[5px]
font-semibold
">

<Sparkles size={18}/>

Luxury Booking

</div>



<h2 className="
mt-6
text-5xl
md:text-7xl
font-serif
font-bold
text-white
leading-tight
">

Reserve Your
<br/>

<span className="
text-orange-400
">

Dream Stay

</span>

</h2>



<p className="
mt-6
text-gray-400
text-lg
leading-relaxed
max-w-lg
">

Experience world-class comfort,
luxury rooms and unforgettable
hospitality designed specially for you.

</p>





<div className="
mt-10
space-y-5
">



<div className="
flex
gap-4
items-center
text-white
">

<div className="
p-3
rounded-full
bg-orange-500/20
text-orange-400
">

<ShieldCheck/>

</div>

Secure Reservation System

</div>





<div className="
flex
gap-4
items-center
text-white
">

<div className="
p-3
rounded-full
bg-orange-500/20
text-orange-400
">

<Star/>

</div>

5 Star Luxury Experience

</div>




<div className="
flex
gap-4
items-center
text-white
">

<div className="
p-3
rounded-full
bg-orange-500/20
text-orange-400
">

<BedDouble/>

</div>

Premium Rooms & Suites

</div>


</div>



</motion.div>









{/* FORM */}


<motion.div


initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.8
}}

viewport={{
once:true
}}


className="
bg-white/5
border
border-orange-400/30
backdrop-blur-2xl
rounded-[45px]
p-8
md:p-12
shadow-[0_0_60px_rgba(255,165,0,0.15)]
"

>


<form className="
grid
grid-cols-1
md:grid-cols-2
gap-5
">



{[
["Full Name",User],
["Email Address",Mail],
["Phone Number",Phone]
].map(([text,Icon]:any,index)=>(

<div
key={index}
className="
relative
"
>

<Icon

className="
absolute
left-4
top-4
text-orange-400
"

size={20}

/>


<input

placeholder={text}

className="
w-full
bg-black/50
border
border-white/20
rounded-full
py-4
pl-12
text-white
outline-none
focus:border-orange-400
transition
"

/>


</div>

))}






<div className="
relative
">

<BedDouble

className="
absolute
left-4
top-4
text-orange-400
"

/>


<select
className="
w-full
bg-black/50
border
border-white/20
rounded-full
py-4
pl-12
text-white
outline-none
"
>

<option>Select Room</option>
<option>Deluxe Room</option>
<option>Luxury Suite</option>
<option>Royal Villa</option>

</select>

</div>






<div className="relative">

<CalendarDays
className="
absolute
left-4
top-4
text-orange-400
"
/>


<input
type="date"
className="
w-full
bg-black/50
border
border-white/20
rounded-full
py-4
pl-12
text-white
"
/>


</div>







<div className="relative">

<Users
className="
absolute
left-4
top-4
text-orange-400
"
/>


<select

className="
w-full
bg-black/50
border
border-white/20
rounded-full
py-4
pl-12
text-white
"

>

<option>Guests</option>
<option>1 Guest</option>
<option>2 Guests</option>
<option>Family</option>

</select>


</div>







<button

className="
md:col-span-2
mt-4
bg-gradient-to-r
from-orange-400
to-yellow-500
text-black
font-bold
py-4
rounded-full
hover:scale-105
transition-all
duration-300
shadow-[0_0_30px_rgba(255,165,0,.5)]
"

>

Confirm Luxury Booking

</button>



</form>



</motion.div>





</div>


</div>


</section>


)

}