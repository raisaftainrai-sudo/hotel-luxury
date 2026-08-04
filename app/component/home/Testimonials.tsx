"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";


const testimonials = [
  {
    name: "James Anderson",
    role: "Business Traveler",
    review:
      "Amazing experience! The rooms were beautiful, service was excellent and the staff was extremely professional."
  },
  {
    name: "Sophia Williams",
    role: "Luxury Guest",
    review:
      "One of the best hotels I have ever visited. The atmosphere, dining and spa services were unforgettable."
  },
  {
    name: "Michael Brown",
    role: "Family Guest",
    review:
      "Perfect place for a relaxing vacation. Everything was comfortable, clean and beautifully designed."
  }
];


export default function Testimonials(){

return(

<section className="
bg-[#0B0B0B]
py-24
">


<div className="
max-w-7xl
mx-auto
px-6
">


{/* Heading */}

<div className="
text-center
mb-14
">


<p className="
text-orange-500
uppercase
tracking-[6px]
mb-4
">
Guest Reviews
</p>


<h2 className="
text-4xl
md:text-5xl
font-serif
font-bold
text-white
">

What Our

<span className="
text-orange-500
">
{" "}Guests Say
</span>

</h2>


<p className="
text-gray-400
mt-5
max-w-2xl
mx-auto
">
Read the experiences of our guests and discover
why LUXORA Hotel is loved worldwide.
</p>


</div>





{/* Cards */}

<div className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
">


{
testimonials.map((item,index)=>(


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
duration:0.6,
delay:index*0.2
}}

className="
bg-[#151515]
p-8
rounded-3xl
border
border-orange-500/20
hover:border-orange-500
transition
"


>


{/* Stars */}

<div className="
flex
gap-1
mb-6
">

{
[1,2,3,4,5].map((star)=>(

<Star

key={star}

size={20}

fill="currentColor"

className="
text-orange-500
"

/>

))
}

</div>





{/* Review */}

<p className="
text-gray-300
leading-relaxed
mb-8
">

"{item.review}"

</p>





{/* User */}

<div>

<h3 className="
text-xl
font-semibold
text-white
">

{item.name}

</h3>


<p className="
text-orange-500
mt-1
">

{item.role}

</p>


</div>



</motion.div>


))
}



</div>



</div>


</section>

)

}