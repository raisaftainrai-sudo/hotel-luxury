"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Dumbbell,
  HeartPulse,
  Flower2,
  ArrowRight,
} from "lucide-react";


const fitness = [

  {
    title: "Luxury Fitness Center",
    image: "/fitimg.jpg",
    icon: Dumbbell,
    desc:
      "Modern equipment and personal trainers to maintain your healthy lifestyle.",
  },


  {
    title: "Yoga & Meditation",
    image: "/yougaimg.jpg",
    icon: Flower2,
    desc:
      "Find balance with peaceful yoga sessions and guided meditation.",
  },


  {
    title: "Wellness Programs",
    image: "/fitnessimg.jpg",
    icon: HeartPulse,
    desc:
      "Personalized wellness plans designed for complete body transformation.",
  },

];



export default function FitnessCenter(){


return (

<section className="relative py-24 bg-black overflow-hidden">


{/* Background Glow */}

<div
className="
absolute
top-0
left-1/2
-translate-x-1/2
w-[500px]
h-[500px]
bg-orange-500/20
blur-[120px]
rounded-full
"
/>




<div className="relative max-w-7xl mx-auto px-6">


{/* Heading */}

<motion.div

initial={{
opacity:0,
y:50
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


<p
className="
uppercase
tracking-[5px]
text-orange-400
font-semibold
"
>
Fitness & Wellness
</p>


<h2
className="
mt-5
text-4xl
md:text-5xl
font-serif
font-bold
text-white
"
>
Refresh Your Body & Mind
</h2>


<p
className="
mt-5
max-w-3xl
mx-auto
text-gray-300
"
>
Experience luxury fitness facilities combined
with wellness programs for a healthier lifestyle.
</p>


</motion.div>






{/* Cards */}

<div
className="
grid
md:grid-cols-3
gap-8
"
>


{
fitness.map((item,index)=>{


const Icon=item.icon;


return (

<motion.div

key={index}

initial={{
opacity:0,
y:80
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.6,
delay:index*.2
}}

viewport={{
once:true
}}

whileHover={{
y:-15,
scale:1.03
}}

className="
group
relative
bg-white
rounded-[35px]
overflow-hidden
shadow-2xl
"

>


{/* Image */}

<div
className="
relative
h-[320px]
overflow-hidden
"
>


<Image

src={item.image}

alt={item.title}

fill

className="
object-cover
group-hover:scale-125
transition
duration-700
"

/>



<div
className="
absolute
inset-0
bg-gradient-to-t
from-black/70
via-black/20
to-transparent
"
/>


</div>






{/* Icon */}

<motion.div

whileHover={{
rotate:360,
scale:1.15
}}

transition={{
duration:.5
}}

className="
absolute
top-56
left-8
w-16
h-16
rounded-2xl
bg-orange-500
flex
items-center
justify-center
shadow-xl
"

>


<Icon
size={30}
className="text-white"
/>


</motion.div>







<div className="p-8 pt-12">


<h3
className="
text-2xl
font-serif
font-bold
text-gray-900
"
>

{item.title}

</h3>



<p
className="
mt-4
text-gray-600
leading-7
"
>

{item.desc}

</p>




<button

className="
mt-7
flex
items-center
gap-3
text-orange-500
font-semibold
group-hover:gap-5
transition-all
"

>

Explore More

<ArrowRight size={18}/>


</button>



</div>



</motion.div>


)


})


}



</div>



</div>


</section>

);


}