"use client";

import Image from "next/image";
import { motion } from "framer-motion";


const images = [

{
image:"/images/luxury-gallery-1.jpg",
title:"Luxury Lobby",
size:"md:row-span-2"
},

{
image:"/images/luxury-gallery-2.jpg",
title:"Royal Suite"
},

{
image:"/images/luxury-gallery-3.jpg",
title:"Swimming Pool"
},

{
image:"/images/luxury-gallery-4.jpg",
title:"Fine Dining"
},

{
image:"/images/luxury-gallery-5.jpg",
title:"Premium Bedroom",
size:"md:col-span-2"
},

{
image:"/images/luxury-gallery-6.jpg",
title:"Hotel View"
}

];



export default function LuxuryGallery(){


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

Gallery

</p>


<h2 className="
mt-5
text-4xl
md:text-6xl
font-serif
font-bold
text-white
">

Luxury Hotel Gallery

</h2>


<p className="
mt-5
max-w-2xl
mx-auto
text-gray-400
">

Explore our elegant spaces,
beautiful interiors and luxury atmosphere.

</p>


</motion.div>





{/* Gallery */}

<div className="

grid

grid-cols-1

md:grid-cols-2

lg:grid-cols-3

auto-rows-[280px]

gap-6

">


{

images.map((item,index)=>(


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
y:-10,
scale:1.03
}}



className={`

relative

overflow-hidden

rounded-[35px]

group


border

border-orange-400/30


hover:border-orange-400


shadow-[0_0_30px_rgba(255,165,0,0.15)]


hover:shadow-[0_0_45px_rgba(255,165,0,0.45)]


transition-all


duration-500


${item.size || ""}

`}


>


<Image

src={item.image}

alt={item.title}

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





<div className="
absolute
bottom-6
left-6
">

<h3 className="
text-white
text-2xl
font-serif
font-bold
">

{item.title}

</h3>


<p className="
text-orange-300
text-sm
mt-2
">

Premium Experience

</p>


</div>




</motion.div>


))


}


</div>


</div>


</section>

);

}