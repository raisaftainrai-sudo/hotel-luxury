"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";


const reviews = [

{
name:"James Anderson",
role:"Luxury Guest",
image:"/IMGGUESS.jpg",
review:
"Amazing hotel experience. Beautiful rooms, excellent service and a peaceful environment.",
rating:5
},


{
name:"Sophia Miller",
role:"Business Traveler",
image:"/IMGGUEST.jpg",
review:
"The rooms were elegant and comfortable. Staff service was outstanding.",
rating:5
},


{
name:"Daniel Wilson",
role:"Holiday Guest",
image:"/guests/guest3.jpg",
review:
"Perfect place for relaxation. The dining and hospitality were excellent.",
rating:5
},


];



export default function HotelTestimonials(){


return (

<section className="relative bg-black py-24 overflow-hidden">


{/* Background Glow */}

<div className="
absolute
top-20
left-1/2
-translate-x-1/2
w-[500px]
h-[500px]
bg-orange-500/20
blur-[150px]
rounded-full
"/>




<div className="
max-w-7xl
mx-auto
px-6
relative
z-10
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

className="text-center mb-16"

>


<p className="
text-orange-400
uppercase
tracking-[6px]
font-semibold
">

Testimonials

</p>




<h2 className="
mt-5
text-4xl
md:text-6xl
font-serif
font-bold
text-white
">

Guest Experiences

</h2>




<p className="
mt-5
max-w-2xl
mx-auto
text-gray-400
">

Discover what our guests say about
their luxury stay experience.

</p>


</motion.div>









{/* Cards */}


<div className="
grid
grid-cols-1
md:grid-cols-3
gap-8
">


{

reviews.map((item,index)=>(


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

relative

rounded-[35px]

p-8

bg-white/5

backdrop-blur-xl

border

border-orange-400/30

hover:border-orange-400

shadow-[0_0_30px_rgba(255,165,0,0.15)]

hover:shadow-[0_0_45px_rgba(255,165,0,0.4)]

transition-all

duration-500

"

>







{/* Quote Icon */}

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


<Quote size={28}/>


</div>








{/* Review */}


<p className="
mt-6
text-gray-300
leading-7
">

"{item.review}"

</p>









{/* Stars */}


<div className="
flex
gap-1
mt-6
">


{

Array.from({
length:item.rating
}).map((_,i)=>(


<Star

key={i}

size={18}

className="
fill-orange-400
text-orange-400
"

/>


))


}


</div>









{/* User */}


<div className="
mt-8
pt-5
border-t
border-white/10
flex
items-center
gap-4
">





{/* Guest Image */}


<div className="
relative
w-14
h-14
rounded-full
overflow-hidden
border-2
border-orange-400
shadow-[0_0_20px_rgba(255,165,0,.5)]
">


<Image

src={item.image}

alt={item.name}

fill

className="
object-cover
"

/>


</div>








<div>


<h3 className="
text-white
font-serif
font-bold
text-lg
">

{item.name}

</h3>



<p className="
text-orange-300
text-sm
">

{item.role}

</p>


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