"use client";

import Image from "next/image";
import { motion } from "framer-motion";


const interiors = [

{
image:"/iuxuryimg.png",
title:"Luxury Lobby",
desc:"Elegant lobby design with premium furniture and modern architecture."
},

{
image:"/yalimg.png",
title:"Royal Bedroom",
desc:"Beautiful bedroom interiors created for maximum comfort."
},

{
image:"/fineeeimg.png",
title:"Fine Dining Area",
desc:"A stylish restaurant space with luxury atmosphere."
},

{
image:"/modern1img.png",
title:"Modern Lounge",
desc:"Relaxing lounge area with sophisticated interior design."
},

{
image:"/bathroomimg.png",
title:"Luxury Bathroom",
desc:"Premium bathroom design with modern facilities."
},

{
image:"/pectionimg.png",
title:"Hotel Reception",
desc:"Grand reception area welcoming every guest."
}

];



export default function InteriorGallery(){


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

Interior Gallery

</p>


<h2 className="
mt-5
text-4xl
md:text-6xl
font-serif
font-bold
text-white
">

Elegant Hotel Interiors

</h2>


<p className="
mt-5
max-w-2xl
mx-auto
text-gray-400
">

Discover beautifully designed spaces
crafted with luxury and comfort.

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

interiors.map((item,index)=>(


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
duration:.5,
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


hover:shadow-[0_0_45px_rgba(255,165,0,0.4)]


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

{item.title}

</h3>


<p className="
text-gray-400
mt-3
leading-6
">

{item.desc}

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