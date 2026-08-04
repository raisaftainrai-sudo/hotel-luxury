"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Users, CalendarDays } from "lucide-react";


const stats = [
  {
    icon: CalendarDays,
    number:"15+",
    title:"Years"
  },
  {
    icon: Users,
    number:"50K+",
    title:"Guests"
  },
  {
    icon: Award,
    number:"25+",
    title:"Awards"
  }
];


export default function OurStory(){

return(

<section className="
relative
overflow-hidden
bg-black
py-24
">


{/* Glow */}

<motion.div

animate={{
scale:[1,1.3,1],
opacity:[0.2,0.5,0.2]
}}

transition={{
duration:6,
repeat:Infinity
}}

className="
absolute
top-20
right-0
h-96
w-96
rounded-full
bg-orange-500/20
blur-[140px]
"

/>



<div className="
max-w-7xl
mx-auto
px-6
relative
z-10
">


<div className="
grid
grid-cols-1
lg:grid-cols-2
gap-12
items-center
">



{/* Image */}


<motion.div

initial={{
opacity:0,
x:-70
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:.9
}}

viewport={{
once:true
}}

whileHover={{
scale:1.03
}}

className="
relative
h-[550px]
rounded-[40px]
overflow-hidden
border
border-orange-400/30
group
"


>


<Image

src="/img56.png"

alt="Our Story"

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
via-transparent
to-transparent
"/>


</motion.div>







{/* Content */}


<motion.div

initial={{
opacity:0,
x:70
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:.9
}}

viewport={{
once:true
}}

>



<motion.p

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:.2
}}

viewport={{
once:true
}}

className="
text-orange-400
uppercase
tracking-[6px]
font-semibold
">

Our Story

</motion.p>





{/* Heading Show when section open */}

<motion.h2

initial={{
opacity:0,
y:60
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.8,
delay:.3
}}

viewport={{
once:true
}}

className="
mt-5
text-4xl
md:text-6xl
font-serif
font-bold
text-white
leading-tight
">


A Journey Of

<br/>

<span className="
text-orange-400
">

Luxury & Hospitality

</span>


</motion.h2>





<motion.p

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:.4
}}

className="
mt-6
text-gray-300
text-lg
leading-8
">


Founded with a passion for creating
exceptional experiences, LUXORA began
with a simple dream — to build a place
where luxury, comfort and warm
hospitality come together.


</motion.p>





<p className="
mt-5
text-gray-400
leading-8
">


Over the years, LUXORA has grown into
a premium destination known for elegant
rooms, unforgettable dining experiences,
wellness services and personalized care.
Every corner of our hotel reflects our
commitment to excellence and guest
satisfaction.


</p>







{/* Stats */}


<div className="
grid
grid-cols-3
gap-4
mt-10
">


{
stats.map((item,index)=>{

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
delay:index*.2
}}

whileHover={{
y:-12,
scale:1.05
}}

viewport={{
once:true
}}

className="
group
bg-white/5
border
border-orange-400/20
rounded-2xl
p-5
text-center
backdrop-blur-xl
hover:bg-orange-500/10
transition
"

>


<Icon

size={32}

className="
mx-auto
text-orange-400
group-hover:scale-125
transition
"

/>



<h3 className="
text-white
text-2xl
font-bold
mt-3
">

{item.number}

</h3>


<p className="
text-gray-400
text-sm
">

{item.title}

</p>


</motion.div>

)

})

}


</div>




</motion.div>


</div>


</div>


</section>

)

}