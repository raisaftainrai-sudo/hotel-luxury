"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";


export default function ContactHero(){

return (

<section className="
relative
min-h-[85vh]
flex
items-center
overflow-hidden
bg-black
">


{/* Background Image */}

<Image

src="/images/contact-hero.jpg"

alt="Contact Luxury Hotel"

fill

className="
object-cover
opacity-40
"

/>





{/* Overlay */}

<div className="
absolute
inset-0

bg-gradient-to-r

from-black

via-black/70

to-black/40

"/>







{/* Content */}

<div className="
relative
z-10

max-w-7xl

mx-auto

px-6

w-full

">


<motion.div


initial={{
opacity:0,
y:50
}}


animate={{
opacity:1,
y:0
}}


transition={{
duration:.8
}}


className="
max-w-3xl
"

>


<p className="
text-orange-400
uppercase
tracking-[6px]
font-semibold
">

Contact Luxury Hotel

</p>






<h1 className="
mt-6

text-5xl

md:text-7xl

font-serif

font-bold

text-white

leading-tight

">

We Are Here
To Welcome You

</h1>







<p className="
mt-6

text-gray-300

text-lg

leading-8

max-w-2xl

">

Have questions about reservations,
rooms or our luxury services?
Contact our team anytime.

</p>








<div className="
mt-8
flex
flex-wrap
gap-5
">


<button className="
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

transition
">


<Phone size={20}/>

Call Now


</button>





<button className="
px-8
py-4

rounded-full

border

border-white/30

text-white

hover:bg-white/10

flex
items-center
gap-3

transition
">


Explore Hotel

<ArrowRight size={20}/>


</button>


</div>






</motion.div>



</div>



</section>

);

}