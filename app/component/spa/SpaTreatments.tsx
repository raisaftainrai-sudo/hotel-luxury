"use client";

import Image from "next/image";
import { Clock, Sparkles, ArrowRight } from "lucide-react";


const treatments = [

  {
    title: "Aromatherapy Massage",
    image: "/images/aromatherapy.jpg",
    duration: "60 Minutes",
    price: "$120",
    description:
      "A relaxing massage using natural essential oils to reduce stress and restore balance.",
  },

  {
    title: "Luxury Facial Treatment",
    image: "/facialimg.jpg",
    duration: "45 Minutes",
    price: "$90",
    description:
      "Premium skincare treatment designed to refresh and brighten your skin.",
  },

  {
    title: "Hot Stone Therapy",
    image: "/hotstoneimg.jpg",
    duration: "75 Minutes",
    price: "$150",
    description:
      "A deep relaxation therapy combining warm stones with expert massage techniques.",
  },

];


export default function SpaTreatments(){

return(

<section className="py-24 bg-[#faf7f2]">

<div className="max-w-7xl mx-auto px-6">


{/* Heading */}

<div className="text-center mb-14">


<p className="
uppercase
tracking-[5px]
text-orange-500
font-semibold
">
Our Treatments
</p>


<h2 className="
mt-4
text-4xl
md:text-5xl
font-serif
font-bold
text-gray-900
">

Luxury Spa Treatments

</h2>


<p className="
mt-5
max-w-3xl
mx-auto
text-gray-600
leading-7
">

Experience personalized treatments created
to relax your body and refresh your mind.

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
treatments.map((item,index)=>(


<div
key={index}
className="
bg-white
rounded-3xl
overflow-hidden
shadow-lg
hover:-translate-y-3
transition
duration-500
group
"
>


{/* Image */}

<div className="
relative
h-72
overflow-hidden
">


<Image

src={item.image}

alt={item.title}

fill

className="
object-cover
group-hover:scale-110
transition
duration-700
"

/>


<div className="
absolute
top-5
right-5
bg-orange-500
text-white
px-4
py-2
rounded-full
font-semibold
">

{item.price}

</div>


</div>





{/* Content */}

<div className="p-7">


<div className="
flex
items-center
gap-2
text-orange-500
text-sm
font-medium
">


<Sparkles size={18}/>

Premium Service


</div>




<h3 className="
mt-4
text-2xl
font-serif
font-bold
text-gray-900
">

{item.title}

</h3>



<p className="
mt-4
text-gray-600
leading-7
">

{item.description}

</p>





<div className="
mt-6
flex
items-center
gap-2
text-gray-500
">

<Clock size={18}/>

{item.duration}


</div>





<button
className="
mt-8
w-full
py-3
rounded-full
bg-black
text-white
hover:bg-orange-500
transition
flex
items-center
justify-center
gap-2
"
>

Book Treatment

<ArrowRight size={18}/>


</button>



</div>



</div>


))


}



</div>



</div>


</section>

)

}