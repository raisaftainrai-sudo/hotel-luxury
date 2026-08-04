"use client";

import Image from "next/image";
import { motion } from "framer-motion";


const events = [

{
image:"/images/event-1.jpg",
title:"Luxury Wedding Event",
desc:"Elegant wedding arrangements with premium decoration."
},

{
image:"/images/event-2.jpg",
title:"Corporate Conference",
desc:"Modern conference spaces for professional events."
},

{
image:"/images/event-3.jpg",
title:"Birthday Celebration",
desc:"Beautiful celebrations with customized themes."
},

{
image:"/images/event-4.jpg",
title:"Grand Ballroom",
desc:"Spacious halls designed for memorable occasions."
},

{
image:"/images/event-5.jpg",
title:"Private Dinner Event",
desc:"Exclusive dining experience with luxury setup."
},

{
image:"/images/event-6.jpg",
title:"Outdoor Event",
desc:"Amazing outdoor venues with beautiful views."
}

];



export default function EventGallery(){


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

Events Gallery

</p>


<h2 className="
mt-5
text-4xl
md:text-6xl
font-serif
font-bold
text-white
">

Unforgettable Events

</h2>


<p className="
mt-5
max-w-2xl
mx-auto
text-gray-400
">

Explore our luxury event spaces
and memorable celebrations.

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

events.map((event,index)=>(


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

rounded-[35px]

overflow-hidden


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
h-[300px]
overflow-hidden
">


<Image

src={event.image}

alt={event.title}

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

{event.title}

</h3>


<p className="
text-gray-400
mt-3
leading-6
">

{event.desc}

</p>


<button className="
mt-5
px-6
py-3

rounded-full

bg-orange-500

hover:bg-orange-600

text-white

font-semibold

transition
">

View Event

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