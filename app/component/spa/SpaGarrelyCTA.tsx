"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";


export default function SpaGalleryCTA() {

return (

<section className="relative py-24 bg-black overflow-hidden">


{/* Glow */}

<div className="
absolute
top-0
left-1/2
-translate-x-1/2

w-[500px]
h-[500px]

bg-orange-500/20

blur-[140px]

rounded-full
"/>



<div className="
max-w-6xl
mx-auto
px-6
relative
z-10
">



<motion.div

initial={{
opacity:0,
y:60
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.8
}}

viewport={{
once:true
}}

className="

rounded-[40px]

border

border-orange-400/30


bg-white/5


backdrop-blur-xl


p-10

md:p-16


text-center


shadow-[0_0_50px_rgba(255,165,0,0.15)]

"

>





<div className="
flex
justify-center
mb-6
">

<div className="
w-16
h-16

rounded-full

bg-orange-500/20

flex
items-center
justify-center

text-orange-400
">

<Sparkles size={30}/>

</div>


</div>






<h2 className="

text-white

text-4xl

md:text-6xl

font-serif

font-bold

">

Experience Ultimate

<br/>

Spa Luxury

</h2>





<p className="

text-gray-400

max-w-2xl

mx-auto

mt-6

text-lg

">

Relax your body, refresh your mind,
and enjoy our premium wellness treatments
designed for complete comfort.

</p>







<motion.button

whileHover={{
scale:1.08
}}

whileTap={{
scale:.95
}}

className="

mt-10

px-8

py-4

rounded-full


bg-orange-500


hover:bg-orange-600


text-white


font-semibold


flex

items-center

gap-3

mx-auto

transition

"

>

Book Your Spa Session

<ArrowRight size={20}/>

</motion.button>






</motion.div>



</div>


</section>

);

}