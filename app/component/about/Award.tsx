"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Star,
  Award as AwardIcon,
  Medal
} from "lucide-react";


const awards = [

{
icon:Trophy,
title:"Luxury Hotel Award",
desc:"Recognized among premium luxury destinations."
},

{
icon:Star,
title:"5 Star Excellence",
desc:"Awarded for outstanding guest experiences."
},

{
icon:Medal,
title:"Hospitality Excellence",
desc:"Celebrated for world-class service quality."
},

{
icon:AwardIcon,
title:"Guest Choice Award",
desc:"Loved by thousands of happy guests."
}

];



const tags = [

"Luxury Hospitality",
"5 Star Experience",
"Premium Service",
"Fine Dining",
"Spa Excellence",
"World Class Rooms"

];




export default function Award(){

return(

<section className="
bg-black
py-24
overflow-hidden
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
"

>


<p className="
text-orange-400
uppercase
tracking-[6px]
font-semibold
">

Recognition

</p>



<h2 className="
mt-5
text-4xl
md:text-6xl
text-white
font-serif
font-bold
">

Awards & Recognition

</h2>



<p className="
mt-5
text-gray-400
max-w-2xl
mx-auto
">

Honored for our commitment to luxury,
exceptional hospitality and unforgettable
guest experiences.

</p>


</motion.div>








{/* Marquee Tags */}

<div className="
mt-12
relative
overflow-hidden
w-full
">


<motion.div

className="
flex
gap-5
w-max
"

animate={{
x:["0%","-50%"]
}}

transition={{
duration:20,
repeat:Infinity,
ease:"linear"
}}

whileHover={{
animationPlayState:"paused"
}}

>


{

[...tags,...tags].map((tag,index)=>(


<div

key={index}

className="
px-7
py-3

rounded-full

bg-orange-500/10

border

border-orange-400/30

text-orange-300

text-sm

font-semibold

backdrop-blur-xl

whitespace-nowrap

hover:bg-orange-500/20

transition-all

duration-300

"

>

# {tag}

</div>


))

}


</motion.div>


</div>









{/* Award Cards */}

<div className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-4

gap-6

mt-16
">


{

awards.map((item,index)=>{


const Icon=item.icon;


return(

<motion.div


key={index}


initial={{
opacity:0,
y:40
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

bg-white/5

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
w-16
h-16

mx-auto

rounded-full

bg-orange-500/20

flex

items-center

justify-center

text-orange-400

">


<Icon size={32}/>


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
mt-3

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