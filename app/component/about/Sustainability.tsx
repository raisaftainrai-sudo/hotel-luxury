"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Leaf,
  Droplets,
  Sparkles,
  Recycle
} from "lucide-react";


const features = [

{
icon:Leaf,
title:"Eco Conscious Luxury",
desc:"We combine luxury with responsible practices to create a better experience."
},

{
icon:Droplets,
title:"Smart Resource Use",
desc:"Advanced systems help us manage resources efficiently."
},

{
icon:Sparkles,
title:"Sustainable Comfort",
desc:"Enjoy premium hospitality while caring for the environment."
},

{
icon:Recycle,
title:"Responsible Future",
desc:"We focus on reducing waste through thoughtful solutions."
}

];



export default function Sustainability(){

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



<div className="
grid
lg:grid-cols-2
gap-12
items-center
">





{/* Image */}

<motion.div

initial={{
opacity:0,
x:-50
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:.8
}}

viewport={{
once:true
}}

className="
relative
h-[520px]

rounded-[40px]

overflow-hidden

border

border-orange-400/30

"


>


<Image

src="/img45554.png"

alt="Luxury Sustainability"

fill

className="
object-cover
"

/>



<div className="
absolute
inset-0

bg-gradient-to-t

from-black

via-black/30

to-transparent

"/>




<div className="
absolute

bottom-8

left-8

right-8

bg-white/10

backdrop-blur-xl

border

border-white/20

rounded-3xl

p-6

">


<h3 className="
text-3xl

font-serif

font-bold

text-white

">

Luxury With Responsibility

</h3>


<p className="
mt-3

text-gray-300

">

Creating beautiful experiences
while respecting our planet.

</p>


</div>



</motion.div>









{/* Content */}

<motion.div

initial={{
opacity:0,
x:50
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:.8
}}

viewport={{
once:true
}}

>


<p className="
text-orange-400

uppercase

tracking-[6px]

font-semibold

">

Sustainability

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

Luxury Today,
A Better Tomorrow

</h2>






<p className="
mt-6

text-gray-300

text-lg

leading-8

">

At LUXORA, sustainability is part of
our luxury experience. We believe in
creating unforgettable stays while
following responsible practices that
protect the future.

</p>







<div className="
grid

grid-cols-1

md:grid-cols-2

gap-5

mt-10

">


{

features.map((item,index)=>{


const Icon=item.icon;


return(

<motion.div

key={index}

whileHover={{
y:-8
}}

className="
bg-white/5

border

border-orange-400/20

hover:border-orange-400

rounded-3xl

p-6

transition-all

duration-300

"


>


<div className="
w-12
h-12

rounded-full

bg-orange-500/20

flex

items-center

justify-center

text-orange-400

">


<Icon size={24}/>


</div>



<h3 className="
mt-4

text-white

font-serif

font-bold

text-lg

">

{item.title}

</h3>



<p className="
mt-2

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



</motion.div>




</div>



</div>


</section>

)

}