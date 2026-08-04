"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";


export default function GalleryCTA(){


return (

<section className="
relative
py-24
overflow-hidden
bg-black
">


{/* Background */}

<Image

src="/images/gallery-cta.jpg"

alt="Luxury Hotel"

fill

className="
object-cover
opacity-30
"

/>




<div className="
absolute
inset-0
bg-black/70
"/>





<div className="
relative
z-10

max-w-7xl

mx-auto

px-6

">


<motion.div


initial={{
opacity:0,
scale:.9
}}


whileInView={{
opacity:1,
scale:1
}}


transition={{
duration:.7
}}


viewport={{
once:true
}}



className="

max-w-4xl

mx-auto

text-center


bg-white/10


backdrop-blur-xl


border

border-orange-400/30


rounded-[40px]


p-10

md:p-16

"

>



<div className="
flex
justify-center
items-center
gap-3

text-orange-400

uppercase

tracking-[5px]

font-semibold

">


<Sparkles size={22}/>

Luxury Stay

</div>







<h2 className="

mt-6

text-white

text-4xl

md:text-6xl

font-serif

font-bold

">

Create Beautiful Memories With Us

</h2>







<p className="

mt-6

text-gray-300

max-w-2xl

mx-auto

leading-7

">


Book your luxury room today and enjoy
world-class hospitality, comfort and
unforgettable experiences.


</p>








<button className="

mt-8

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

">


Book Your Stay

<ArrowRight size={20}/>


</button>





</motion.div>



</div>


</section>

);

}