"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import {
  MapPin,
  Car,
  Plane,
  Train
} from "lucide-react";


const directions = [

  {
    icon: Plane,
    title: "From Airport",
    text: "20 minutes drive from the international airport."
  },

  {
    icon: Car,
    title: "By Car",
    text: "Easy access with private parking facility."
  },

  {
    icon: Train,
    title: "Public Transport",
    text: "Nearest station is only 10 minutes away."
  }

];



export default function Direction(){


const [showMap,setShowMap] = useState(false);



return (

<section className="
bg-black
text-white
py-20
px-6
">


<div className="
max-w-6xl
mx-auto
">



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

className="
text-center
mb-14
"

>


<h2 className="
text-orange-400
uppercase
tracking-widest
mb-3
">

Direction

</h2>


<h1 className="
text-4xl
md:text-5xl
font-bold
mb-5
">

How To Reach Us

</h1>


<p className="
text-gray-400
max-w-xl
mx-auto
">

Find the easiest way to reach our luxury hotel.

</p>


</motion.div>






{/* Location Map Box */}


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
h-[400px]
rounded-[40px]
border
border-orange-400/30
bg-white/5
backdrop-blur-xl
overflow-hidden
flex
items-center
justify-center
mb-12
"

>


{

showMap ? (

<iframe

src="
https://www.google.com/maps?q=New%20York&output=embed
"

width="100%"

height="100%"

style={{
border:0
}}

loading="lazy"

allowFullScreen

></iframe>


)

:

(

<div className="
text-center
">


<div className="
w-24
h-24
rounded-full
bg-orange-500/20
flex
items-center
justify-center
mx-auto
mb-5
text-orange-400
">


<MapPin size={45}/>


</div>



<h2 className="
text-3xl
font-bold
">

Luxora Hotel

</h2>


<p className="
text-gray-400
mt-3
">

123 Luxury Avenue,
<br/>
New York

</p>




<button

onClick={()=>setShowMap(true)}

className="
mt-6
bg-orange-500
hover:bg-orange-600
px-8
py-3
rounded-full
font-semibold
transition
duration-300
"

>

Open Google Maps

</button>


</div>

)


}


</motion.div>







{/* Direction Cards */}


<div className="
grid
md:grid-cols-3
gap-6
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
duration:.5,
delay:index*0.15
}}


viewport={{
once:true
}}


whileHover={{
y:-10
}}


className="
bg-white/5
border
border-orange-400/30
rounded-3xl
p-6
transition
hover:border-orange-400
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
mb-5
">

<Icon size={28}/>

</div>



<h3 className="
text-xl
font-bold
mb-2
">

{item.title}

</h3>


<p className="
text-gray-400
">

{item.text}

</p>


</motion.div>


)


})

}


</div>



</div>


</section>


);


}