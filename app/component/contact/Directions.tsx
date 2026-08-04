"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Car,
  Plane,
  Train
} from "lucide-react";


const directions = [

{
icon:Plane,
title:"From Airport",
text:"20 minutes drive from the international airport."
},

{
icon:Car,
title:"By Car",
text:"Easy access with private parking facility."
},

{
icon:Train,
title:"Public Transport",
text:"Nearest station is only 10 minutes away."
}

];


export default function Direction(){


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
text-center
mb-14
"

>


<p className="
text-orange-400
uppercase
tracking-[6px]
font-semibold
">

Direction

</p>



<h2 className="
mt-5
text-4xl
md:text-6xl
text-white
font-serif
font-bold
">

How To Reach Us

</h2>



<p className="
mt-5
text-gray-400
max-w-2xl
mx-auto
">

Find the easiest way to reach our luxury hotel.

</p>


</motion.div>







<div className="
grid
grid-cols-1
lg:grid-cols-2
gap-10
items-center
">





{/* Map */}

<div className="
h-[420px]

rounded-[40px]

border

border-orange-400/30

bg-white/5

flex

items-center

justify-center

backdrop-blur-xl

">


<div className="
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

mx-auto

text-orange-400

">

<MapPin size={45}/>

</div>



<h3 className="
text-white
text-3xl
font-serif
font-bold
mt-6
">

Luxora Hotel

</h3>


<p className="
text-gray-400
mt-3
">

123 Luxury Avenue,
New York

</p>


<button className="
mt-6
px-8
py-3
rounded-full
bg-orange-500
hover:bg-orange-600
text-white
font-semibold
transition
">

Open Google Maps

</button>


</div>


</div>









{/* Direction Cards */}


<div className="
space-y-6
">


{

directions.map((item,index)=>{


const Icon=item.icon;


return(

<motion.div

key={index}

initial={{
opacity:0,
x:50
}}

whileInView={{
opacity:1,
x:0
}}

transition={{
delay:index*0.15
}}

viewport={{
once:true
}}

whileHover={{
x:10
}}

className="
flex
gap-5

bg-white/5

border

border-orange-400/30

rounded-3xl

p-6

hover:border-orange-400

transition

"


>


<div className="
w-14
h-14

rounded-full

bg-orange-500/20

flex

items-center

justify-center

text-orange-400

">


<Icon size={26}/>


</div>




<div>

<h3 className="
text-white
text-xl
font-semibold
">

{item.title}

</h3>


<p className="
text-gray-400
mt-2
">

{item.text}

</p>


</div>



</motion.div>


)


})

}



</div>




</div>


</div>


</section>

);

}