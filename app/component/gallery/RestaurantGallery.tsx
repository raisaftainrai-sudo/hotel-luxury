"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Utensils,
  Star
} from "lucide-react";


const restaurants = [

{
image:"/images/restaurant-1.jpg",
title:"Luxury Dining Hall",
desc:"Elegant dining space with premium interiors."
},

{
image:"/images/restaurant-2.jpg",
title:"Fine Dining Experience",
desc:"Enjoy delicious meals in a luxury atmosphere."
},

{
image:"/images/restaurant-3.jpg",
title:"Chef Special Dishes",
desc:"Beautifully presented signature cuisines."
},

{
image:"/images/restaurant-4.jpg",
title:"Private Dinner",
desc:"Exclusive private dining for special moments."
},

{
image:"/images/restaurant-5.jpg",
title:"Outdoor Restaurant",
desc:"Amazing outdoor dining with beautiful views."
},

{
image:"/images/restaurant-6.jpg",
title:"Coffee Lounge",
desc:"Relaxing lounge area with premium beverages."
}

];



export default function RestaurantGallery(){


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

Restaurant Gallery

</p>



<h2 className="
mt-5
text-4xl
md:text-6xl
font-serif
font-bold
text-white
">

Taste & Luxury

</h2>



<p className="
mt-5
max-w-2xl
mx-auto
text-gray-400
">

Discover our beautiful dining spaces
and unforgettable culinary experiences.

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

restaurants.map((item,index)=>(


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
delay:index*0.15
}}


viewport={{
once:true
}}


whileHover={{
y:-12,
scale:1.03
}}



className="

overflow-hidden

rounded-[35px]

bg-white/5

border

border-orange-400/30


hover:border-orange-400


shadow-[0_0_30px_rgba(255,165,0,0.15)]


hover:shadow-[0_0_45px_rgba(255,165,0,0.45)]


transition-all

duration-500

"

>


{/* Image */}

<div className="
relative
h-[320px]
overflow-hidden
">


<Image

src={item.image}

alt={item.title}

fill

className="
object-cover
group-hover:scale-110
transition
duration-1000
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
">


<Utensils size={18}/>

Premium Dining

</div>




<h3 className="
mt-4
text-2xl
font-serif
font-bold
">

{item.title}

</h3>



<p className="
text-gray-400
mt-3
leading-6
">

{item.desc}

</p>





<div className="
flex
items-center
gap-1
mt-5
text-orange-300
">

<Star size={18}
fill="currentColor"
/>

<Star size={18}
fill="currentColor"
/>

<Star size={18}
fill="currentColor"
/>

<Star size={18}
fill="currentColor"
/>

<Star size={18}
fill="currentColor"
/>

</div>



</div>


</motion.div>


))

}


</div>




</div>


</section>

);

}