"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BedDouble, Users, Wifi, ArrowRight } from "lucide-react";


const rooms = [

{
image:"/images (70).jpg",
title:"Royal Deluxe Room",
price:"$250 / Night",
guests:"2 Guests",
description:
"A luxurious room with elegant interiors and premium comfort.",
features:[
"King Size Bed",
"Free WiFi",
"Luxury Bathroom"
]
},


{
image:"/images (72).jpg",
title:"Luxury Suite",
price:"$400 / Night",
guests:"4 Guests",
description:
"Spacious suite designed for a relaxing and unforgettable stay.",
features:[
"Private Lounge",
"Ocean View",
"Premium Services"
]
},


{
image:"/images (75).jpg",
title:"Executive Room",
price:"$300 / Night",
guests:"3 Guests",
description:
"Modern room with stylish design and complete facilities.",
features:[
"Smart TV",
"Fast Internet",
"Room Service"
]
},


];



export default function Rooms(){


return (

<section className="bg-black py-24">


<div className="max-w-7xl mx-auto px-6">





{/* Heading */}

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

className="text-center mb-16"

>


<p className="
text-orange-400
uppercase
tracking-[6px]
font-semibold
">

Our Rooms

</p>



<h2 className="
mt-5
text-4xl
md:text-6xl
text-white
font-serif
font-bold
">

Luxury Stay Experience

</h2>



<p className="
mt-5
text-gray-400
max-w-2xl
mx-auto
">

Choose from our beautifully designed rooms
created for comfort and elegance.

</p>


</motion.div>








{/* Room Cards */}


<div className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
gap-8
">



{

rooms.map((room,index)=>(


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
delay:index*0.15
}}


viewport={{
once:true
}}



whileHover={{
y:-15
}}



className="

relative

overflow-hidden

rounded-[35px]


bg-white/5


border

border-orange-400/30


backdrop-blur-xl


shadow-[0_0_30px_rgba(255,165,0,0.15)]


hover:border-orange-400


hover:shadow-[0_0_45px_rgba(255,165,0,0.4)]


transition-all

duration-500

"

>







{/* Image */}

<div className="
relative
h-[280px]
overflow-hidden
">


<Image

src={room.image}

alt={room.title}

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
to-transparent
"/>


</div>








{/* Content */}

<div className="
p-6
text-white
">





<h3 className="
text-2xl
font-serif
font-bold
">

{room.title}

</h3>





<p className="
text-orange-400
text-xl
font-semibold
mt-3
">

{room.price}

</p>







<div className="
flex
items-center
gap-2
text-gray-300
mt-4
">

<Users size={18}/>

{room.guests}

</div>







<p className="
text-gray-400
mt-4
leading-6
">

{room.description}

</p>








{/* Features */}


<div className="
mt-5
space-y-3
">


{

room.features.map((feature,i)=>(


<div

key={i}

className="
flex
items-center
gap-3
text-gray-300
"

>

{

i===0 ?

<BedDouble size={18} className="text-orange-400"/>

:

<Wifi size={18} className="text-orange-400"/>

}


{feature}


</div>


))

}



</div>







<button className="
mt-7

w-full

py-3

rounded-full


bg-orange-500


hover:bg-orange-600


flex

items-center

justify-center

gap-2


font-semibold


transition

">


Book Room

<ArrowRight size={18}/>


</button>







</div>





</motion.div>


))

}


</div>



</div>


</section>

);

}