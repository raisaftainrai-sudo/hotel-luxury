"use client";

import Image from "next/image";
import { motion } from "framer-motion";



const roomsGallery = [

{
image:"/images (65).jpg",
title:"Royal Deluxe Room",
size:"md:row-span-2"
},

{
image:"/imgsuit.jpg",
title:"Luxury Suite"
},

{
image:"/imgbrredow.jpg",
title:"Executive Bedroom"
},

{
image:"/imgbath.jpg",
title:"Modern Bathroom"
},

{
image:"/imgdara.jpg",
title:"Premium Living Area",
size:"md:col-span-2"
},

{
image:"/imgsuitee.jpg",
title:"Royal Villa Room"
},

];




export default function RoomGallery(){


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

Room Gallery

</p>




<h2 className="
mt-5

text-4xl

md:text-6xl

font-serif

font-bold

text-white

">

Explore Our Luxury Rooms

</h2>




<p className="
mt-5

max-w-2xl

mx-auto

text-gray-400

">

Discover elegant interiors,
comfortable spaces and premium room designs.

</p>



</motion.div>








{/* Gallery */}


<div className="

grid

grid-cols-1

md:grid-cols-2

lg:grid-cols-3


auto-rows-[300px]


gap-6

">



{

roomsGallery.map((room,index)=>(


<motion.div


key={index}



initial={{
opacity:0,
scale:.9
}}


whileInView={{
opacity:1,
scale:1
}}


viewport={{
once:true
}}


transition={{
duration:.5,
delay:index*0.1
}}



whileHover={{
y:-12,
scale:1.03
}}



className={`

relative

overflow-hidden

rounded-[35px]


group


border

border-orange-400/30


bg-white/5


backdrop-blur-xl



hover:border-orange-400



shadow-[0_0_30px_rgba(255,165,0,0.15)]


hover:shadow-[0_0_45px_rgba(255,165,0,0.45)]



transition-all

duration-500


${room.size || ""}

`}

>






{/* Image */}


<Image

src={room.image}

alt={room.title}

fill

className="

object-cover

group-hover:scale-110

transition-transform

duration-1000

"

/>







{/* Overlay */}


<div className="

absolute

inset-0


bg-gradient-to-t

from-black

via-black/30

to-transparent

"

/>








{/* Room Name */}


<div className="

absolute

bottom-6

left-6

"

>


<h3 className="

text-white

text-2xl

font-serif

font-bold

">

{room.title}

</h3>


<p className="

text-orange-300

mt-2

text-sm

">

Luxury Accommodation

</p>


</div>








{/* Inner Border */}


<div

className="

absolute

inset-0


rounded-[35px]


border

border-white/10


pointer-events-none

"

/>






</motion.div>


))


}



</div>





</div>


</section>

);

}