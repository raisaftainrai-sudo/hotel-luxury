"use client";

import { motion } from "framer-motion";
import {
  BedDouble,
  Bath,
  Wifi,
  Tv,
  Coffee,
  Snowflake,
  Lock,
  Sparkles,
} from "lucide-react";


const roomAmenities = [
  {
    icon: BedDouble,
    title: "Luxury Bed",
    desc: "Premium king size beds with ultra-soft bedding for a peaceful sleep.",
  },

  {
    icon: Bath,
    title: "Luxury Bathroom",
    desc: "Modern marble bathrooms with premium toiletries and spa facilities.",
  },

  {
    icon: Wifi,
    title: "High Speed WiFi",
    desc: "Stay connected with fast and reliable internet access.",
  },

  {
    icon: Tv,
    title: "Smart Entertainment",
    desc: "Enjoy movies and shows with advanced smart television.",
  },

  {
    icon: Coffee,
    title: "Premium Mini Bar",
    desc: "Refreshing beverages and snacks available inside your room.",
  },

  {
    icon: Snowflake,
    title: "Climate Control",
    desc: "Advanced cooling system for complete room comfort.",
  },

  {
    icon: Lock,
    title: "Digital Safe",
    desc: "Keep your valuable belongings protected and secure.",
  },

  {
    icon: Sparkles,
    title: "24/7 Room Service",
    desc: "Experience personalized service anytime during your stay.",
  },
];



export default function RoomAmenities() {

return (

<section className="relative bg-[#050505] py-28 overflow-hidden">


{/* Background Glow */}

<div className="
absolute
top-20
left-1/2
-translate-x-1/2
w-[500px]
h-[500px]
bg-orange-500/10
blur-[140px]
rounded-full
"/>



<div className="max-w-7xl mx-auto px-6 relative z-10">


{/* Heading */}

<motion.div

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

transition={{duration:.8}}

viewport={{once:true}}

className="text-center mb-20"

>


<div className="
inline-flex
items-center
gap-2
px-5
py-2
rounded-full
bg-orange-500/10
border
border-orange-400/30
text-orange-400
text-sm
tracking-widest
uppercase
">

<Sparkles size={16}/>

Luxury Experience

</div>



<h2 className="
mt-6
text-4xl
md:text-6xl
font-serif
font-bold
text-white
">

World Class Room Amenities

</h2>


<p className="
mt-6
max-w-3xl
mx-auto
text-gray-400
text-lg
">

Every detail is designed to provide
comfort, elegance and a memorable luxury stay.

</p>


</motion.div>






{/* Cards */}

<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-8
">


{
roomAmenities.map((item,index)=>{


const Icon=item.icon;


return (


<motion.div


key={index}


initial={{
opacity:0,
y:60
}}


whileInView={{
opacity:1,
y:0
}}


transition={{
duration:.6,
delay:index*.1
}}


viewport={{
once:true
}}


whileHover={{
y:-15
}}



className="

group

relative

rounded-[35px]

p-8

bg-white/[0.04]

backdrop-blur-xl

border

border-white/10

hover:border-orange-400/50

transition-all

duration-500

hover:shadow-[0_0_45px_rgba(255,165,0,0.25)]

"

>


{/* Icon */}

<div className="

w-20
h-20

rounded-3xl

bg-gradient-to-br

from-orange-500/30

to-yellow-400/10

flex

items-center

justify-center

text-orange-400

group-hover:scale-110

transition

duration-500

">

<Icon size={36}/>

</div>




<h3 className="
mt-7
text-xl
font-serif
font-bold
text-white
">

{item.title}

</h3>




<p className="
mt-4
text-gray-400
leading-7
text-sm
">

{item.desc}

</p>



<div className="
absolute
bottom-0
left-10
right-10
h-[2px]
bg-gradient-to-r
from-transparent
via-orange-400
to-transparent
opacity-0
group-hover:opacity-100
transition
"/>



</motion.div>


)

})

}


</div>



</div>


</section>

);

}