"use client";

import Image from "next/image";
import {
  Sparkles,
  Heart,
  Scissors,
  Gem,
  ArrowRight,
} from "lucide-react";


const services = [

  {
    title: "Luxury Facial",
    image: "/faical1.jpg",
    icon: Sparkles,
    description:
      "Advanced skincare treatment to refresh, hydrate and brighten your skin.",
  },


  {
    title: "Hair Styling",
    image: "/hairimg.jpg",
    icon: Scissors,
    description:
      "Professional hair styling with modern techniques and premium products.",
  },


  {
    title: "Body Care",
    image: "/body1img.jpg",
    icon: Heart,
    description:
      "Complete body care treatments designed for smooth and healthy skin.",
  },


  {
    title: "Bridal Beauty",
    image: "/bridalimg.jpg",
    icon: Gem,
    description:
      "Exclusive bridal packages created for your special luxury moments.",
  },

];



export default function BeautyServices(){


return (

<section className="py-24 bg-[#faf7f2]">


<div className="max-w-7xl mx-auto px-6">



{/* Heading */}

<div className="text-center mb-16">


<p
className="
uppercase
tracking-[5px]
text-orange-500
font-semibold
"
>
Beauty Services
</p>


<h2
className="
mt-5
text-4xl
md:text-5xl
font-serif
font-bold
text-gray-900
"
>

Enhance Your Natural Beauty

</h2>


<p
className="
mt-5
max-w-3xl
mx-auto
text-gray-600
leading-7
"
>

Experience premium beauty treatments
performed by our expert specialists.

</p>


</div>






{/* Cards */}


<div
className="
grid
sm:grid-cols-2
lg:grid-cols-4
gap-8
"
>


{
services.map((service,index)=>{


const Icon = service.icon;


return (

<div
key={index}
className="
bg-white
rounded-[30px]
overflow-hidden
shadow-lg
group
hover:-translate-y-3
transition
duration-500
"
>



{/* Image */}

<div
className="
relative
h-72
overflow-hidden
"
>


<Image

src={service.image}

alt={service.title}

fill

className="
object-cover
group-hover:scale-110
transition
duration-700
"

/>



<div
className="
absolute
inset-0
bg-black/20
opacity-0
group-hover:opacity-100
transition
"
/>


</div>







{/* Content */}

<div className="p-7">



<div
className="
w-14
h-14
rounded-2xl
bg-orange-100
flex
items-center
justify-center
"
>


<Icon
size={28}
className="text-orange-500"
/>


</div>





<h3
className="
mt-5
text-2xl
font-serif
font-bold
text-gray-900
"
>

{service.title}

</h3>




<p
className="
mt-4
text-gray-600
leading-7
"
>

{service.description}

</p>






<button
className="
mt-6
flex
items-center
gap-2
text-orange-500
font-semibold
hover:gap-4
transition-all
"
>

Explore Service

<ArrowRight size={18}/>

</button>




</div>




</div>


)


})


}



</div>




</div>


</section>

);


}