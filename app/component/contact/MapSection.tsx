"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import {
  MapPin,
  Navigation,
  ArrowRight,
} from "lucide-react";


export default function LocationSection() {

return (

<section className="
bg-black
py-24
px-6
overflow-hidden
">


<div className="
max-w-7xl
mx-auto
grid
lg:grid-cols-2
gap-12
items-center
">


{/* MAP */}

<motion.div

initial={{
opacity:0,
x:-80
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:0.8
}}

className="
relative
h-[450px]
rounded-[35px]
overflow-hidden
border
border-orange-500/40
shadow-[0_0_40px_rgba(255,115,0,0.25)]
"

>


<iframe

src="https://www.google.com/maps?q=New+York&output=embed"

width="100%"

height="100%"

loading="lazy"

className="
grayscale
contrast-125
"

/>


</motion.div>





{/* CONTENT */}


<motion.div

initial={{
opacity:0,
x:80
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:0.8
}}

>



<p className="
text-orange-500
tracking-[8px]
text-sm
mb-5
">

FIND US

</p>





<h2 className="
text-white
text-5xl
md:text-6xl
font-serif
font-bold
leading-tight
mb-8
">

Visit Our Luxury
<br/>
Destination

</h2>





<p className="
text-gray-400
text-lg
leading-8
mb-10
">

Experience world-class hospitality at our premium
hotel location. Our team is available to guide you
anytime.

</p>







{/* ADDRESS CARD */}


<motion.div

whileHover={{
y:-8,
scale:1.03
}}

transition={{
duration:0.3
}}

className="
group
flex
gap-5
items-center
bg-[#111]
border
border-white/10
hover:border-orange-500/50
rounded-2xl
p-7
mb-5
transition-all
duration-300
hover:shadow-[0_0_35px_rgba(255,115,0,0.25)]
"

>



<div className="
bg-orange-500/10
p-3
rounded-full
group-hover:bg-orange-500/20
transition
">


<MapPin

size={30}

className="
text-orange-500
group-hover:scale-110
transition
"

/>


</div>





<div>


<h3 className="
text-white
text-xl
font-semibold
">

Address

</h3>



<p className="
text-gray-400
">

123 Luxury Avenue,
New York

</p>


</div>



</motion.div>









{/* DIRECTION CARD */}



<motion.div

whileHover={{
y:-8,
scale:1.03
}}

transition={{
duration:0.3
}}

className="
group
flex
gap-5
items-center
bg-[#111]
border
border-white/10
hover:border-orange-500/50
rounded-2xl
p-7
mb-8
transition-all
duration-300
hover:shadow-[0_0_35px_rgba(255,115,0,0.25)]
"

>



<div className="
bg-orange-500/10
p-3
rounded-full
group-hover:bg-orange-500/20
transition
">


<Navigation

size={30}

className="
text-orange-500
group-hover:rotate-12
group-hover:scale-110
transition
"

/>


</div>





<div>


<h3 className="
text-white
text-xl
font-semibold
">

Directions

</h3>




<p className="
text-gray-400
">

Easy access from city center

</p>



</div>



</motion.div>








{/* BUTTON */}



<Link

href="/direction"

className="
group
flex
items-center
gap-3
bg-orange-500
hover:bg-orange-600
text-white
px-8
py-4
rounded-full
font-semibold
transition
hover:shadow-[0_0_30px_rgba(255,115,0,0.5)]
"

>


Get Direction


<ArrowRight

size={20}

className="
group-hover:translate-x-2
transition
"

/>


</Link>






</motion.div>



</div>


</section>


);

}