"use client";

import Image from "next/image";
import { Check } from "lucide-react";


const services = [

{
    name:"Luxury Spa Treatment",
    image:"/body1img.jpg",
    price:"$120",
    description:
    "Relax and refresh with our premium spa and wellness treatments."
},


{
    name:"Fine Dining Experience",
    image:"/fasttimg.jpg",
    price:"$80",
    description:
    "Enjoy delicious international cuisine prepared by expert chefs."
},


{
    name:"Airport Pickup",
    image:"/welcomeimg.jpg",
    price:"$50",
    description:
    "Comfortable private transport from airport to hotel."
}

];



export default function ExtraServices(){


return(

<section className="py-20 bg-[#faf7f2]">


<div className="max-w-7xl mx-auto px-6">


{/* Heading */}

<div className="text-center mb-14">


<p className="
text-orange-500
uppercase
tracking-[4px]
font-medium
">
Extra Services
</p>


<h2 className="
text-4xl
md:text-5xl
font-serif
font-bold
text-gray-900
mt-3
">

Make Your Stay Special

</h2>


<p className="
text-gray-600
mt-4
max-w-2xl
mx-auto
">

Add extra comfort and luxury services to your booking.

</p>


</div>





{/* Service Cards */}


<div className="
grid
md:grid-cols-3
gap-8
">


{
services.map((service,index)=>(


<div
key={index}
className="
bg-white
rounded-3xl
overflow-hidden
shadow-lg
hover:-translate-y-2
transition
duration-500
"
>


{/* Image */}


<div className="
relative
h-64
">


<Image

src={service.image}

alt={service.name}

fill

className="
object-cover
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

{service.price}

</div>


</div>





{/* Content */}


<div className="p-6">


<h3 className="
text-2xl
font-serif
font-bold
text-gray-900
">

{service.name}

</h3>



<p className="
text-gray-600
mt-3
text-sm
leading-6
">

{service.description}

</p>





<button

className="
mt-6
flex
items-center
justify-center
gap-2
w-full
py-3
rounded-full
border
border-orange-500
text-orange-600
hover:bg-orange-500
hover:text-white
transition
"

>


<Check size={18}/>

Add Service

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