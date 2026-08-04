"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BedDouble,
  Users,
  Star
} from "lucide-react";


const stats = [
  {
    icon: BedDouble,
    value:"120+",
    title:"Rooms"
  },
  {
    icon: Users,
    value:"50K+",
    title:"Guests"
  },
  {
    icon: Star,
    value:"5.0",
    title:"Rating"
  }
];


export default function HotelIntroduction(){

return(

<section className="
relative
overflow-hidden
bg-black
py-24
">


{/* Background Glow */}

<motion.div
animate={{
scale:[1,1.2,1],
opacity:[0.3,0.6,0.3]
}}
transition={{
duration:5,
repeat:Infinity
}}
className="
absolute
top-20
left-0
h-96
w-96
bg-orange-500/20
blur-[130px]
rounded-full
"
/>



<div className="
max-w-7xl
mx-auto
px-6
relative
z-10
">


<div className="
grid
grid-cols-1
lg:grid-cols-2
gap-14
items-center
">



{/* Content */}


<motion.div

initial={{
opacity:0,
x:-70
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:.9,
ease:"easeOut"
}}

viewport={{
once:true
}}

>


<motion.p

initial={{
opacity:0,
y:20
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:.2
}}

className="
text-orange-400
uppercase
tracking-[6px]
font-semibold
">

Welcome To LUXORA

</motion.p>




<motion.h2

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:.3
}}

className="
mt-5
text-4xl
md:text-6xl
font-serif
font-bold
text-white
leading-tight
">

Luxury Hotel
<br/>

<span className="text-orange-400">
Experience
</span>

</motion.h2>





<motion.p

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:.4
}}

className="
mt-6
text-gray-300
text-lg
leading-8
">


LUXORA is a premium destination
where timeless elegance meets
modern comfort. We create
unforgettable stays with luxurious
rooms, fine dining and personalized
hospitality.


</motion.p>





<p className="
mt-5
text-gray-400
leading-7
">


Every detail is carefully designed
to provide our guests with a relaxing,
exclusive and memorable experience
from arrival to departure.


</p>





{/* Stats */}


<div className="
grid
grid-cols-3
gap-4
mt-10
">


{
stats.map((item,index)=>{

const Icon=item.icon;


return(

<motion.div

key={index}

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*.2
}}

whileHover={{
y:-12,
scale:1.05
}}

className="
group
bg-white/5
border
border-orange-400/20
rounded-2xl
p-5
text-center
backdrop-blur-xl
hover:bg-orange-500/10
transition
"

>


<Icon

size={32}

className="
mx-auto
text-orange-400
group-hover:scale-125
transition
"

/>



<h3 className="
text-white
text-2xl
font-bold
mt-3
">

{item.value}

</h3>


<p className="
text-gray-400
text-sm
">

{item.title}

</p>


</motion.div>


)

})

}



</div>


</motion.div>









{/* Image */}


<motion.div

initial={{
opacity:0,
x:70
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:.9
}}

viewport={{
once:true
}}

whileHover={{
scale:1.02
}}

className="
relative
h-[550px]
rounded-[45px]
overflow-hidden
border
border-orange-400/30
group
"


>


<Image

src="/img789.png"

alt="Luxury Hotel"

fill

className="
object-cover
group-hover:scale-110
transition
duration-700
"

/>



<div className="
absolute
inset-0
bg-gradient-to-t
from-black
via-black/20
to-transparent
"/>






<motion.div

initial={{
y:50,
opacity:0
}}

whileInView={{
y:0,
opacity:1
}}

transition={{
delay:.5
}}

className="
absolute
bottom-8
left-8
right-8
bg-white/10
backdrop-blur-xl
border
border-white/20
rounded-3xl
p-6
text-white
"


>


<h3 className="
text-3xl
font-serif
font-bold
">

LUXORA

</h3>


<p className="
mt-2
text-gray-300
">

Where luxury meets unforgettable moments.

</p>


</motion.div>





</motion.div>



</div>


</div>


</section>

)

}