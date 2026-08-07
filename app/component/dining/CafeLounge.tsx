"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Coffee,
  Cake,
  Wifi,
  Clock3,
  ArrowRight
} from "lucide-react";


const menu = [
  {
    title: "Premium Coffee",
    image: "/cofee12img.jpg",
    price: "$12",
    icon: Coffee,
    description:
      "Freshly brewed artisan coffee made from premium roasted beans.",
  },
  {
    title: "Luxury Desserts",
    image: "/imgdesseert.png",
    price: "$18",
    icon: Cake,
    description:
      "Handcrafted cakes, pastries and signature sweet delights.",
  },
];


export default function CafeLounge() {

return (

<section className="py-20 bg-white">

<div className="max-w-7xl mx-auto px-6">


{/* Heading */}

<motion.div

className="text-center mb-14"

initial={{
opacity:0,
y:-50
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.8
}}

viewport={{
once:true
}}

>


<p className="uppercase tracking-[5px] text-orange-500 font-semibold">
Café & Lounge
</p>


<h2 className="mt-4 text-4xl md:text-5xl font-serif font-bold text-gray-900">

Relax In Our Luxury Café

</h2>


<p className="mt-5 max-w-3xl mx-auto text-gray-600 leading-7">

Enjoy handcrafted coffee, delicious desserts and a peaceful
atmosphere designed for relaxation and memorable conversations.

</p>


</motion.div>





{/* Layout */}


<div className="grid lg:grid-cols-2 gap-12 items-center">





{/* Main Image */}


<motion.div

className="relative"

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

viewport={{
once:true
}}

>



<div className="relative h-[650px] rounded-3xl overflow-hidden shadow-2xl group">


<Image

src="/imgcoffe.png"

alt="Luxury Café"

fill

priority

className="
object-cover 
transition 
duration-700 
group-hover:scale-110
"

/>



<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"/>



<div className="absolute bottom-10 left-8 text-white">


<p className="uppercase tracking-[5px] text-orange-300">

Premium Experience

</p>


<h3 className="text-4xl font-serif font-bold mt-3">

Luxury Café Lounge

</h3>


<p className="mt-3 text-gray-200">

Coffee, desserts and relaxing moments.

</p>


</div>



</div>





{/* Wifi Card */}


<motion.div

className="
absolute 
-bottom-8 
left-8 
bg-white 
rounded-3xl 
shadow-xl 
p-6
"

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:0.4
}}

whileHover={{
scale:1.08,
y:-10
}}

viewport={{
once:true
}}

>



<div className="flex items-center gap-4">


<div className="
w-14 
h-14 
rounded-full 
bg-orange-500 
flex 
items-center 
justify-center
animate-pulse
">


<Wifi
className="text-white"
size={28}
/>


</div>



<div>


<h4 className="text-xl font-bold">

Free Wi-Fi

</h4>


<p className="text-gray-500 text-sm">

Work & Relax Anytime

</p>


</div>



</div>


</motion.div>



</motion.div>







{/* Right Side */}


<div className="space-y-8">



{
menu.map((item,index)=>{


const Icon=item.icon;


return(


<motion.div

key={index}

className="
bg-[#faf7f2]
rounded-3xl
overflow-hidden
shadow-lg
"

initial={{
opacity:0,
x:80
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
duration:0.7,
delay:index*0.2
}}

whileHover={{
scale:1.03,
y:-10
}}

viewport={{
once:true
}}

>


<div className="grid md:grid-cols-2">



<div className="relative h-64 overflow-hidden">


<Image

src={item.image}

alt={item.title}

fill

className="
object-cover
transition
duration-700
hover:scale-110
"

/>


</div>





<div className="p-8 flex flex-col justify-center">


<div className="
w-14 
h-14 
rounded-full 
bg-orange-100 
flex 
items-center 
justify-center
">


<Icon

className="text-orange-500"

size={28}

/>


</div>




<h3 className="
mt-5 
text-2xl 
font-serif 
font-bold
">

{item.title}

</h3>




<p className="mt-4 text-gray-600">

{item.description}

</p>




<div className="mt-5 flex items-center justify-between">


<span className="
text-3xl 
font-bold 
text-orange-500
">

{item.price}

</span>




<motion.button

whileHover={{
x:6,
scale:1.08
}}

whileTap={{
scale:0.9
}}

className="
flex
items-center
gap-2
text-orange-500
font-semibold
"

>

Order Now

<ArrowRight size={18}/>


</motion.button>



</div>


</div>


</div>


</motion.div>


)


})

}





{/* Opening Hours */}


<motion.div

className="
bg-black
rounded-3xl
p-8
text-white
flex
flex-col
md:flex-row
justify-between
items-center
gap-6
"

initial={{
opacity:0,
y:60
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.8
}}

whileHover={{
scale:1.03
}}

viewport={{
once:true
}}

>



<div className="flex items-center gap-4">


<motion.div

animate={{
rotate:[0,15,-15,0]
}}

transition={{
duration:2,
repeat:Infinity
}}

>


<Clock3

className="text-orange-400"

size={30}

/>


</motion.div>



<div>

<h4 className="font-bold text-xl">

Opening Hours

</h4>


<p className="text-gray-300">

8:00 AM – 11:00 PM

</p>


</div>


</div>




<motion.button

whileHover={{
scale:1.1,
y:-5
}}

whileTap={{
scale:0.9
}}

className="
px-8
py-3
rounded-full
bg-orange-500
hover:bg-orange-600
transition
"

>

Reserve A Table

</motion.button>



</motion.div>




</div>



</div>


</div>


</section>


);

}