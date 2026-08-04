"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BedDouble,
  Users,
  Wifi,
  Bath,
  ArrowRight
} from "lucide-react";



const deluxeRooms = [

{
image:"/imgdeluxe.jpg",
title:"Deluxe King Room",
price:"$250 / Night",
guests:"2 Guests",
desc:
"Spacious deluxe room with elegant interiors and premium comfort.",
features:[
"King Size Bed",
"Free WiFi",
"Luxury Bathroom"
]
},


{
image:"/imgdouble.jpg",
title:"Deluxe Twin Room",
price:"$280 / Night",
guests:"3 Guests",
desc:
"Perfect room choice with modern facilities and relaxing atmosphere.",
features:[
"Two Beds",
"Smart TV",
"Room Service"
]
},


{
image:"/imgsuitee.jpg",
title:"Deluxe Premium Suite",
price:"$350 / Night",
guests:"4 Guests",
desc:
"Luxury suite with beautiful design and exclusive guest experience.",
features:[
"Private Lounge",
"Premium Bath",
"Fast Internet"
]
}

];




export default function DeluxeRooms(){


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

Deluxe Rooms

</p>



<h2 className="
mt-5
text-4xl
md:text-6xl
font-serif
font-bold
text-white
">

Luxury Deluxe Stay

</h2>



<p className="
mt-5
max-w-2xl
mx-auto
text-gray-400
">

Experience elegant rooms designed with
comfort, style and premium facilities.

</p>


</motion.div>








{/* Cards */}

<div className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
gap-8
">


{

deluxeRooms.map((room,index)=>(


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
y:-15,
scale:1.03
}}



className="

overflow-hidden

rounded-[35px]


bg-white/5


backdrop-blur-xl


border

border-orange-400/30


hover:border-orange-400


shadow-[0_0_30px_rgba(255,165,0,0.15)]


hover:shadow-[0_0_45px_rgba(255,165,0,0.45)]


transition-all

duration-500

"

>





{/* Image */}

<div className="
relative
h-[300px]
overflow-hidden
">


<Image

src={room.image}

alt={room.title}

fill

className="
object-cover
hover:scale-110
transition-transform
duration-1000
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

{room.desc}

</p>








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

i===1 ?

<Wifi size={18} className="text-orange-400"/>

:

<Bath size={18} className="text-orange-400"/>

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


text-white


font-semibold


flex

items-center

justify-center

gap-2


transition

">

Book Deluxe Room

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