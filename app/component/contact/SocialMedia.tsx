"use client";

import { motion } from "framer-motion";

import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";

import { ArrowUpRight } from "lucide-react";



const socials = [

  {
    icon: FaInstagram,
    title: "Instagram",
    text: "Follow our luxury moments",
  },

  {
    icon: FaFacebook,
    title: "Facebook",
    text: "Join our hotel community",
  },

  {
    icon: FaTwitter,
    title: "Twitter",
    text: "Get latest updates",
  },

  {
    icon: FaYoutube,
    title: "Youtube",
    text: "Watch hotel experiences",
  },

];




export default function SocialMedia(){


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


<p className="
text-orange-400
uppercase
tracking-[6px]
font-semibold
">

Follow Us

</p>



<h2 className="
mt-5
text-4xl
md:text-6xl
font-serif
font-bold
text-white
">

Stay Connected

</h2>



<p className="
mt-5
max-w-2xl
mx-auto
text-gray-400
">

Follow our social media channels
for luxury experiences and updates.

</p>


</motion.div>








{/* Social Cards */}


<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-6
">


{

socials.map((item,index)=>{


const Icon = item.icon;


return (

<motion.div


key={index}


initial={{
opacity:0,
y:40
}}


whileInView={{
opacity:1,
y:0
}}


transition={{
duration:.5,
delay:index * 0.1
}}


viewport={{
once:true
}}


whileHover={{
y:-10,
scale:1.03
}}



className="

bg-white/5

border

border-orange-400/30

hover:border-orange-400

rounded-[30px]

p-7

backdrop-blur-xl

transition-all

duration-500

hover:shadow-[0_0_35px_rgba(255,165,0,0.35)]

"


>





<div className="
flex
items-center
justify-between
">





{/* Icon */}

<div className="
w-14
h-14

rounded-full

bg-orange-500/20

flex

items-center

justify-center

text-orange-400

text-2xl

">


<Icon />


</div>








{/* Arrow */}

<div className="
w-10
h-10

rounded-full

bg-orange-500

flex

items-center

justify-center

text-white

">


<ArrowUpRight size={20}/>


</div>



</div>







<h3 className="
mt-6
text-white
text-2xl
font-serif
font-bold
">

{item.title}

</h3>





<p className="
mt-3
text-gray-400
leading-6
">

{item.text}

</p>







<button className="
mt-5

text-orange-400

font-semibold

hover:text-orange-300

transition

">


Follow Now


</button>





</motion.div>


)


})


}



</div>



</div>


</section>


);

}