"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BedDouble, Users } from "lucide-react";


const rooms = [

{
image:"/images/room-gallery-1.jpg",
title:"Deluxe King Room",
guests:"2 Guests",
desc:"Elegant room with luxury bedding and modern facilities."
},

{
image:"/images/room-gallery-2.jpg",
title:"Royal Suite",
guests:"4 Guests",
desc:"Spacious suite with premium interiors and relaxing atmosphere."
},

{
image:"/images/room-gallery-3.jpg",
title:"Executive Room",
guests:"3 Guests",
desc:"Perfect combination of comfort and modern design."
},

{
image:"/images/room-gallery-4.jpg",
title:"Presidential Suite",
guests:"6 Guests",
desc:"Ultimate luxury experience with exclusive services."
},

{
image:"/images/room-gallery-5.jpg",
title:"Ocean View Room",
guests:"2 Guests",
desc:"Enjoy beautiful views with peaceful surroundings."
},

{
image:"/images/room-gallery-6.jpg",
title:"Premium Bedroom",
guests:"4 Guests",
desc:"Luxury bedroom designed for unforgettable stays."
}

];



export default function RoomsGallery(){


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

Rooms Gallery

</p>


<h2 className="
mt-5
text-4xl
md:text-6xl
font-serif
font-bold
text-white
">

Luxury Rooms Collection

</h2>


<p className="
mt-5
max-w-2xl
mx-auto
text-gray-400
">

Explore our beautifully designed rooms
created for comfort and luxury.

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
y:50
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
y:-12,
scale:1.03
}}


className="

overflow-hidden

rounded-[35px]

bg-white/5

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
h-[320px]
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

duration-1000
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

</div>







{/* Content */}

<div className="
p-6
">


<h3 className="
text-white
text-2xl
font-serif
font-bold
">

{room.title}

</h3>



<div className="
flex
items-center
gap-3
mt-4
text-gray-300
">

<BedDouble
size={18}
className="text-orange-400"
/>

Luxury Room

</div>



<div className="
flex
items-center
gap-3
mt-3
text-gray-300
">

<Users
size={18}
className="text-orange-400"
/>

{room.guests}

</div>



<p className="
text-gray-400
mt-4
leading-6
">

{room.desc}

</p>




<button className="
mt-6

w-full

py-3

rounded-full

bg-orange-500

hover:bg-orange-600

text-white

font-semibold

transition

">

View Room

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