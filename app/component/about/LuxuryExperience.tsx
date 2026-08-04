"use client";

import { motion } from "framer-motion";
import {
  BedDouble,
  Utensils,
  Sparkles,
  UserRound
} from "lucide-react";


const experiences=[

{
icon:BedDouble,
title:"Premium Rooms",
desc:"Elegant rooms designed with comfort, luxury and modern facilities."
},

{
icon:Utensils,
title:"Fine Dining",
desc:"Experience world-class cuisine prepared by expert chefs."
},

{
icon:Sparkles,
title:"Spa & Wellness",
desc:"Relax your body and mind with our premium spa treatments."
},

{
icon:UserRound,
title:"Personalized Service",
desc:"Dedicated hospitality designed according to your needs."
}

];



export default function LuxuryExperience(){

return(

<section className="
bg-black
py-24
">


<div className="
max-w-7xl
mx-auto
px-6
">





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

className="
text-center
mb-14
"

>


<p className="
text-orange-400
uppercase
tracking-[5px]
font-semibold
">

Our Experience

</p>



<h2 className="
mt-5
text-4xl
md:text-6xl
text-white
font-serif
font-bold
">

Luxury Experience

</h2>



<p className="
mt-5
max-w-2xl
mx-auto
text-gray-400
">

Every moment at LUXORA is designed
to provide comfort, elegance and
unforgettable memories.

</p>



</motion.div>







{/* Cards */}

<div className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-4
gap-6
">


{

experiences.map((item,index)=>{


const Icon=item.icon;


return(

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
group

bg-white/5

backdrop-blur-xl

border

border-orange-400/20

hover:border-orange-400

rounded-[35px]

p-8

text-center

transition-all

duration-500

hover:shadow-[0_0_35px_rgba(255,165,0,0.35)]

"

>


<div className="
mx-auto

w-16
h-16

rounded-full

bg-orange-500/20

flex

items-center

justify-center

text-orange-400

group-hover:bg-orange-500

group-hover:text-white

transition

">


<Icon size={30}/>


</div>





<h3 className="
mt-6

text-white

text-xl

font-serif

font-bold

">

{item.title}

</h3>





<p className="
mt-4

text-gray-400

text-sm

leading-6

">

{item.desc}

</p>





</motion.div>


)

})


}


</div>



</div>


</section>

)

}