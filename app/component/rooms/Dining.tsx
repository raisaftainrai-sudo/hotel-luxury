"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Utensils, ArrowRight } from "lucide-react";


const dishes = [

{
image:"/img556.png",
title:"Fine Dining Restaurant",
category:"International Cuisine",
desc:"Experience world-class dishes prepared by our expert chefs."
},


{
image:"/img98765.png",
title:"Luxury Breakfast",
category:"Morning Delights",
desc:"Start your day with fresh and delicious breakfast selections."
},


{
image:"/img6657.png",
title:"Private Dinner",
category:"Exclusive Experience",
desc:"Enjoy a romantic private dining experience with premium service."
},


];



export default function Dining(){


return (

<section className="bg-black py-24">


<div className="max-w-7xl mx-auto px-6">



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

className="text-center mb-16"

>


<p className="
text-orange-400
uppercase
tracking-[6px]
font-semibold
">

Dining Experience

</p>




<h2 className="
mt-5
text-4xl
md:text-6xl
text-white
font-serif
font-bold
">

Taste Luxury

</h2>




<p className="
mt-5
text-gray-400
max-w-2xl
mx-auto
">

Delicious cuisine, elegant atmosphere and
unforgettable dining moments.

</p>


</motion.div>








{/* Cards */}

<div className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
gap-8
">



{

dishes.map((item,index)=>(


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
duration:.6,
delay:index*.15
}}


viewport={{
once:true
}}



whileHover={{
y:-12,
scale:1.02
}}



className="

rounded-[35px]

overflow-hidden

bg-white/5

border

border-orange-400/30


backdrop-blur-xl


hover:border-orange-400


shadow-[0_0_30px_rgba(255,165,0,0.15)]


hover:shadow-[0_0_45px_rgba(255,165,0,0.4)]


transition-all

duration-500

"

>






{/* Image */}

<div className="
relative
h-[300px]
overflow-hidden
">


<Image

src={item.image}

alt={item.title}

fill

className="
object-cover
hover:scale-110
transition
duration-700
"

/>


<div className="
absolute
inset-0
bg-gradient-to-t
from-black
via-black/20
to-transparent
"/>


</div>









{/* Content */}

<div className="
p-6
text-white
">



<div className="
flex
items-center
gap-2
text-orange-400
text-sm
font-semibold
">


<Utensils size={18}/>

{item.category}


</div>







<h3 className="
text-2xl
font-serif
font-bold
mt-4
">

{item.title}

</h3>






<p className="
text-gray-400
mt-4
leading-6
">

{item.desc}

</p>







<button className="

mt-6

flex

items-center

gap-2


bg-orange-500


hover:bg-orange-600


px-6

py-3


rounded-full


font-semibold


transition

">


Book Table

<ArrowRight size={18}/>


</button>




</div>






</motion.div>


))

}



</div>



</div>


</section>

);

}