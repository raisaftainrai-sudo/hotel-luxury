"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";


const faqs = [

{
question:"How can I make a room reservation?",
answer:"You can book your room through our website booking form or contact our reservation team directly."
},

{
question:"What are the check-in and check-out timings?",
answer:"Check-in starts from 2:00 PM and check-out is available until 12:00 PM."
},

{
question:"Do you provide airport pickup service?",
answer:"Yes, we provide comfortable airport transfer services for our guests."
},

{
question:"Can I cancel my reservation?",
answer:"Yes, cancellation policies depend on your selected room package."
},

{
question:"Do you have restaurant and spa facilities?",
answer:"Yes, our hotel offers luxury dining and premium spa services."
}

];



export default function ContactFAQ(){


const [open,setOpen] = useState<number | null>(null);


return (

<section className="
bg-black
py-24
">


<div className="
max-w-5xl
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
tracking-[5px]
font-semibold
">

FAQ

</p>



<h2 className="
mt-5
text-4xl
md:text-6xl
font-serif
font-bold
text-white
">

Frequently Asked Questions

</h2>



</motion.div>







{/* FAQ Items */}


<div className="
space-y-5
">


{

faqs.map((item,index)=>(


<motion.div

key={index}

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
delay:index*0.1
}}

viewport={{
once:true
}}

className="
rounded-3xl

border

border-orange-400/30

bg-white/5

backdrop-blur-xl

overflow-hidden

"

>


<button

onClick={()=>setOpen(
open === index ? null : index
)}

className="
w-full
flex
items-center
justify-between

p-6

text-left

"

>


<h3 className="
text-white
text-lg
md:text-xl
font-semibold
">

{item.question}

</h3>



<div className="
text-orange-400
">

{

open === index

?

<Minus size={24}/>

:

<Plus size={24}/>

}


</div>


</button>







{

open === index && (

<motion.div

initial={{
height:0,
opacity:0
}}

animate={{
height:"auto",
opacity:1
}}

transition={{
duration:.3
}}

className="
px-6
pb-6
text-gray-400
leading-7
"

>

{item.answer}

</motion.div>

)

}


</motion.div>


))

}


</div>



</div>


</section>

);

}