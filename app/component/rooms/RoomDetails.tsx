"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BedDouble,
  Users,
  Wifi,
  Bath,
  Coffee,
  ArrowRight
} from "lucide-react";



const details = [

"King Size Luxury Bed",
"Private Modern Bathroom",
"High Speed WiFi",
"Complimentary Breakfast",
"24/7 Room Service"

];



export default function RoomDetails(){


return (

<section className="bg-black py-24">


<div className="max-w-7xl mx-auto px-6">





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
grid
grid-cols-1
lg:grid-cols-2
gap-12
items-center
"

>





{/* Image */}


<div className="relative h-[500px]">


<Image

src="/images (73).jpg"

alt="Luxury Room"

fill

className="
object-cover
rounded-[40px]
"

/>


<div className="

absolute
inset-0

rounded-[40px]

bg-gradient-to-t

from-black

via-transparent

to-transparent

"/>



</div>









{/* Content */}


<div className="

bg-white/5

border

border-orange-400/30


backdrop-blur-xl


rounded-[40px]


p-8

md:p-10


shadow-[0_0_40px_rgba(255,165,0,0.15)]

"

>



<p className="

text-orange-400

uppercase

tracking-[5px]

font-semibold

">

Premium Room

</p>






<h2 className="

text-white

text-4xl

md:text-5xl

font-serif

font-bold

mt-5

">

Royal Deluxe Suite

</h2>






<p className="

text-gray-400

mt-5

leading-7

">

Experience ultimate comfort with elegant interiors,
modern facilities and luxury services designed
for an unforgettable stay.

</p>








{/* Info */}


<div className="

grid

grid-cols-2

gap-5

mt-8

">



<div className="

flex

items-center

gap-3

text-gray-300

">

<BedDouble className="text-orange-400"/>

Luxury Bed

</div>




<div className="

flex

items-center

gap-3

text-gray-300

">

<Users className="text-orange-400"/>

2 Guests

</div>




<div className="

flex

items-center

gap-3

text-gray-300

">

<Wifi className="text-orange-400"/>

Free WiFi

</div>




<div className="

flex

items-center

gap-3

text-gray-300

">

<Bath className="text-orange-400"/>

Private Bath

</div>


</div>







{/* Features */}

<ul className="mt-8 space-y-3">


{

details.map((item,index)=>(


<li

key={index}

className="

flex

items-center

gap-3

text-gray-300

"

>


<Coffee

size={18}

className="text-orange-400"

/>


{item}


</li>


))


}



</ul>








{/* Price */}


<div className="

mt-8

flex

items-center

justify-between

">


<h3 className="

text-white

text-3xl

font-bold

">

$350

<span className="
text-gray-400
text-base
">

/ Night

</span>

</h3>





<button className="

bg-orange-500

hover:bg-orange-600

px-7

py-3

rounded-full

text-white

font-semibold

flex

items-center

gap-2

transition

">

Book Now

<ArrowRight size={18}/>

</button>



</div>






</div>






</motion.div>





</div>


</section>

);

}