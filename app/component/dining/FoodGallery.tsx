"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Search } from "lucide-react";


const gallery = [
  {
    image: "/garrieldimg.jpg",
    title: "Grilled Salmon",
  },
  {
    image: "/steamimg.jpg",
    title: "Luxury Steak",
  },
  {
    image: "/pasataimg.jpg",
    title: "Italian Pasta",
  },
  {
    image: "/saeimg.jpg",
    title: "Seafood Platter",
  },
  {
    image: "/freshimg.jpg",
    title: "Fresh Dessert",
  },
  {
    image: "/bugerimg.jpg",
    title: "Signature Burger",
  },
  {
    image: "/fasttimg.jpg",
    title: "Fruit Mocktail",
  },
  {
    image: "/breakfastimg.jpg",
    title: "Premium Breakfast",
  },
];


const tags = [
  {
    text:"✨ Chef Special",
    color:"text-orange-500"
  },
  {
    text:"🍽 Premium Dishes",
    color:"text-white"
  },
  {
    text:"⭐ Best Restaurant",
    color:"text-orange-500"
  },
  {
    text:"🔥 Fresh Ingredients",
    color:"text-white"
  },
  {
    text:"👨‍🍳 Expert Chefs",
    color:"text-orange-500"
  },
  {
    text:"🥂 Luxury Dining Experience",
    color:"text-white"
  }
]



export default function FoodGallery(){


return(

<section className="
py-20 
bg-[#faf7f2]
overflow-hidden
">


<div className="
max-w-7xl 
mx-auto 
px-6
">



{/* Heading */}

<motion.div

className="
text-center
mb-14
"

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


<p className="
uppercase
tracking-[5px]
text-orange-500
font-semibold
">

Food Gallery

</p>



<h2 className="
mt-4
text-4xl
md:text-5xl
font-serif
font-bold
text-gray-900
">

Our Signature Dishes

</h2>



<p className="
mt-5
text-gray-600
max-w-3xl
mx-auto
">

Every dish is carefully prepared using fresh ingredients,
artistic presentation and authentic international flavors.

</p>


</motion.div>







{/* ================= MARQUEE ================= */}


<motion.div

className="
overflow-hidden
bg-black
py-4
mb-12
rounded-2xl
shadow-xl
"

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:0.7
}}

viewport={{
once:true
}}

>


<div className="
flex
w-max
animate-marquee
">


{
[1,2].map((item)=>(


<div
key={item}
className="
flex
items-center
"
>


{
tags.map((tag,index)=>(


<span

key={index}

className={`
mx-8
font-bold
text-lg
${tag.color}
`}

>

{tag.text}

</span>


))

}



</div>


))
}



</div>


</motion.div>









{/* Gallery Cards */}


<div className="
grid
grid-cols-2
md:grid-cols-4
gap-6
">


{
gallery.map((item,index)=>(


<motion.div

key={index}

className="
group
relative
overflow-hidden
rounded-3xl
shadow-xl
h-72
"


initial={{
opacity:0,
scale:0.8
}}

whileInView={{
opacity:1,
scale:1
}}

transition={{
duration:0.6,
delay:index*0.1
}}

viewport={{
once:true
}}

whileHover={{
y:-12,
scale:1.05
}}

>


<Image

src={item.image}

alt={item.title}

fill

className="
object-cover
transition
duration-700
group-hover:scale-125
"

/>





<div className="
absolute
inset-0
bg-black/20
group-hover:bg-black/60
transition
duration-500
"/>






<motion.div

className="
absolute
inset-0
flex
items-center
justify-center
opacity-0
group-hover:opacity-100
transition
duration-500
"

>


<motion.div

className="
w-16
h-16
rounded-full
bg-white
flex
items-center
justify-center
"

whileHover={{
rotate:360,
scale:1.15
}}

transition={{
duration:0.6
}}

>


<Search

size={28}

className="
text-orange-500
"

/>


</motion.div>


</motion.div>







<div className="
absolute
bottom-0
left-0
w-full
bg-gradient-to-t
from-black
via-black/60
to-transparent
p-6
">


<h3 className="
text-white
text-xl
font-serif
font-bold
">

{item.title}

</h3>


</div>




</motion.div>


))

}


</div>









{/* CTA */}


<motion.div

className="
mt-20
rounded-3xl
bg-black
px-8
py-12
text-center
"

initial={{
opacity:0,
y:80
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

whileHover={{
scale:1.03
}}

>


<h3 className="
text-4xl
font-serif
font-bold
text-white
">

Crafted With Passion & Perfection

</h3>



<p className="
text-gray-300
mt-5
max-w-2xl
mx-auto
">

Experience unforgettable flavors prepared by our award-winning chefs
using the finest ingredients from around the world.

</p>




<motion.button

whileHover={{
scale:1.1,
y:-5
}}

whileTap={{
scale:0.9
}}

className="
mt-8
px-10
py-4
rounded-full
bg-orange-500
text-white
hover:bg-orange-600
transition
"

>

View Full Menu

</motion.button>



</motion.div>





</div>


</section>


)

}