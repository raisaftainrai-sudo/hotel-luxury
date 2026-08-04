"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { useState } from "react";


const gallery = [

  {
    image: "/images/spa-gallery-1.jpg",
    title: "Luxury Spa Lounge",
    desc: "Elegant interiors designed for complete relaxation and comfort.",
  },

  {
    image: "/images/spa-gallery-2.jpg",
    title: "Relaxation Room",
    desc: "A peaceful space for calm and refreshing wellness moments.",
  },

  {
    image: "/images/spa-gallery-3.jpg",
    title: "Massage Experience",
    desc: "Premium massage treatments by professional therapists.",
  },

  {
    image: "/images/spa-gallery-4.jpg",
    title: "Beauty Treatment",
    desc: "Luxury beauty services with advanced techniques.",
  },

  {
    image: "/images/spa-gallery-5.jpg",
    title: "Wellness Corner",
    desc: "A beautiful wellness area for mind and body balance.",
  },

  {
    image: "/images/spa-gallery-6.jpg",
    title: "Private Spa Suite",
    desc: "Exclusive private suites for a luxury spa journey.",
  },

];



export default function SpaGallery(){


const [activeCard,setActiveCard] = useState<number | null>(null);



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

Our Gallery

</p>



<h2 className="
mt-5
text-4xl
md:text-6xl
font-serif
font-bold
text-white
">

Luxury Spa Moments

</h2>



<p className="
mt-5
max-w-2xl
mx-auto
text-gray-400
">

Discover our elegant interiors,
peaceful spaces and premium wellness experience.

</p>


</motion.div>







{/* Gallery Cards */}


<div

className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3

gap-8

"

>


{

gallery.map((item,index)=>(


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



viewport={{
once:true
}}



transition={{
duration:.6,
delay:index*0.1
}}



whileHover={{
y:-12,
scale:1.03
}}



className="

relative

h-[380px]

overflow-hidden

rounded-[35px]

group


border

border-orange-400/30


bg-white/5


backdrop-blur-xl


shadow-[0_0_25px_rgba(255,165,0,0.15)]


hover:border-orange-400


hover:shadow-[0_0_45px_rgba(255,165,0,0.45)]


transition-all

duration-500

"

>


{/* Image */}


<Image

src={item.image}

alt={item.title}

fill

className="

object-cover

group-hover:scale-110

transition-transform

duration-1000

"

/>







{/* Overlay */}


<div

className="

absolute

inset-0


bg-gradient-to-t

from-black

via-black/40

to-transparent

"

/>








{/* Content */}


<div

className="

absolute

bottom-5

left-5

right-5


bg-white/10


backdrop-blur-xl


border

border-white/20


rounded-3xl


p-5


text-white

"

>


<div

className="
flex
items-center
justify-between
"

>


<h3

className="
text-xl
font-serif
font-bold
"

>

{item.title}

</h3>





<div

className="

w-10

h-10

rounded-full

bg-orange-500

flex

items-center

justify-center

"

>

<ArrowUpRight size={20}/>

</div>


</div>







<div

className="

flex

items-center

gap-2

mt-3

text-orange-300

text-sm

"

>

<Sparkles size={15}/>

Premium Experience

</div>







<button

onClick={()=>


setActiveCard(

activeCard === index

?

null

:

index

)

}

className="

mt-5

px-6

py-2

rounded-full

bg-orange-500

hover:bg-orange-600

text-white

text-sm

font-semibold

transition

"

>


{

activeCard === index

?

"Hide Details"

:

"View Details"

}


</button>







{

activeCard === index && (


<motion.p


initial={{
opacity:0,
height:0
}}


animate={{
opacity:1,
height:"auto"
}}


transition={{
duration:.4
}}


className="

mt-4

text-gray-200

text-sm

leading-6

"

>

{item.desc}

</motion.p>


)

}





</div>







{/* Border Overlay */}


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