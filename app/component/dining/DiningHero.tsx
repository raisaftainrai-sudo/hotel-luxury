"use client";

import Image from "next/image";

export default function DiningHero() {

return (

<section
className="
relative
h-[75vh]
flex
items-center
justify-center
overflow-hidden
"
>


{/* Background Image */}

<Image

src="/images (99).jpg"

alt="Luxury Dining"

fill

className="
object-cover
  object-center
"

/>



{/* Overlay */}

<div
className="
absolute
inset-0
bg-black/60
"
/>



{/* Content */}

<div
className="
relative
z-10
text-center
px-6
max-w-4xl
"
>


<p
className="
text-orange-400
uppercase
tracking-[5px]
font-medium
"
>
LUXORA Dining
</p>



<h1
className="
mt-5
text-5xl
md:text-7xl
font-serif
font-bold
text-white
"
>
A Taste Of Luxury
</h1>



<p
className="
mt-6
text-gray-200
text-lg
max-w-2xl
mx-auto
"
>
Experience world-class cuisine,
fine dining atmosphere and unforgettable
culinary moments prepared by our expert chefs.
</p>




<button

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
Explore Menu
</button>



</div>


</section>

)

}