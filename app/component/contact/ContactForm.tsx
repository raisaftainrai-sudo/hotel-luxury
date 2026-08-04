"use client";

import { motion } from "framer-motion";


export default function ContactForm(){


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
bg-white/5

border

border-orange-400/30

rounded-[40px]

p-8

md:p-12

backdrop-blur-xl

"


>


<h2 className="
text-white
text-4xl
md:text-5xl
font-serif
font-bold
text-center
">

Send Us A Message

</h2>


<p className="
text-gray-400
text-center
mt-4
">

We would love to hear from you.
Contact our luxury hotel team.

</p>






<form className="
mt-10

grid

grid-cols-1

md:grid-cols-2

gap-6

">


<input

type="text"

placeholder="Your Name"

className="
bg-black/50

border

border-white/20

rounded-full

px-6

py-4

text-white

outline-none

focus:border-orange-400

transition

"

/>




<input

type="email"

placeholder="Email Address"

className="
bg-black/50

border

border-white/20

rounded-full

px-6

py-4

text-white

outline-none

focus:border-orange-400

transition

"

/>






<input

type="text"

placeholder="Phone Number"

className="
bg-black/50

border

border-white/20

rounded-full

px-6

py-4

text-white

outline-none

focus:border-orange-400

transition

"

/>






<input

type="text"

placeholder="Subject"

className="
bg-black/50

border

border-white/20

rounded-full

px-6

py-4

text-white

outline-none

focus:border-orange-400

transition

"

/>








<textarea

rows={6}

placeholder="Write Your Message"

className="
md:col-span-2

bg-black/50

border

border-white/20

rounded-3xl

px-6

py-5

text-white

outline-none

focus:border-orange-400

transition

"

/>







<button

type="submit"

className="
md:col-span-2

bg-orange-500

hover:bg-orange-600

text-white

font-semibold

py-4

rounded-full

transition-all

duration-300

hover:scale-105

"


>

Send Message

</button>




</form>




</motion.div>



</div>


</section>

);

}