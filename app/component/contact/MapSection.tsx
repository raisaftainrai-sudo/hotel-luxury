"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";


export default function MapSection(){


return (

<section className="
bg-black
py-24
">


<div className="
max-w-7xl
mx-auto
px-6
">





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
gap-10
items-center
"

>





{/* Map Box */}

<div className="

relative

h-[450px]

rounded-[40px]

overflow-hidden


border

border-orange-400/30


bg-white/5


shadow-[0_0_40px_rgba(255,165,0,0.15)]

"

>


<div className="
absolute
inset-0

bg-gradient-to-br

from-orange-500/20

via-black

to-black

"/>





<div className="
relative
z-10

h-full

flex

items-center

justify-center

flex-col

text-center

">


<div className="
w-20
h-20

rounded-full

bg-orange-500/20

flex

items-center

justify-center

text-orange-400

">

<MapPin size={40}/>

</div>




<h3 className="
text-white
text-3xl
font-serif
font-bold
mt-6
">

Luxury Hotel Location

</h3>


<p className="
text-gray-400
mt-3
">

123 Luxury Avenue,
New York City

</p>


</div>



</div>








{/* Information */}


<div>


<p className="
text-orange-400

uppercase

tracking-[5px]

font-semibold

">

Find Us

</p>




<h2 className="
mt-5

text-4xl

md:text-6xl

font-serif

font-bold

text-white

leading-tight

">

Visit Our
Luxury Destination

</h2>




<p className="
mt-6

text-gray-400

leading-8

">

Experience world-class hospitality
at our premium hotel location.
Our team is available to guide
you anytime.

</p>








<div className="
mt-8

space-y-5

">


<div className="
flex
items-center
gap-4

bg-white/5

border

border-white/10

rounded-2xl

p-5

">


<MapPin
className="text-orange-400"
/>


<div>

<h4 className="
text-white
font-semibold
">

Address

</h4>


<p className="
text-gray-400
">

123 Luxury Avenue,
New York

</p>


</div>


</div>







<div className="
flex
items-center
gap-4

bg-white/5

border

border-white/10

rounded-2xl

p-5

">


<Navigation
className="text-orange-400"
/>


<div>

<h4 className="
text-white
font-semibold
">

Directions

</h4>


<p className="
text-gray-400
">

Easy access from city center

</p>


</div>


</div>


</div>





<button className="
mt-8

px-8

py-4

rounded-full

bg-orange-500

hover:bg-orange-600

text-white

font-semibold

transition

">


Get Direction

</button>




</div>




</motion.div>




</div>


</section>

);

}