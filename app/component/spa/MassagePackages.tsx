"use client";

import { Clock, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";


const packages = [

  {
    title: "Relaxation Massage",
    price: "$100",
    duration: "60 Minutes",
    description:
      "A gentle full-body massage designed to release stress and provide deep relaxation.",
    features: [
      "Aromatherapy Oils",
      "Professional Therapist",
      "Relaxing Environment",
    ],
  },


  {
    title: "Royal Spa Massage",
    price: "$180",
    duration: "90 Minutes",
    popular: true,
    description:
      "A luxury massage experience combining premium techniques for complete body wellness.",
    features: [
      "Hot Stone Therapy",
      "Premium Essential Oils",
      "Private Treatment Room",
    ],
  },


  {
    title: "Ultimate Wellness",
    price: "$250",
    duration: "120 Minutes",
    description:
      "Complete wellness package with advanced massage techniques and personalized care.",
    features: [
      "Full Body Treatment",
      "Skin Care Session",
      "Relaxation Lounge Access",
    ],
  },

];



export default function MassagePackages() {


return (

<section className="py-24 bg-white">


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
Massage Packages
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
Choose Your Wellness Journey
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
Discover our exclusive massage packages created
to restore energy, balance, and inner peace.
</p>


</div>






{/* Package Cards */}


<div
className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
"
>


{
packages.map((item,index)=>(


<div
key={index}
className={`
relative
rounded-[30px]
p-8
border
transition
duration-500
hover:-translate-y-3
shadow-lg

${
item.popular
?
"bg-black text-white border-black"
:
"bg-[#faf7f2] border-gray-200"
}

`}
>



{/* Popular Badge */}

{
item.popular && (

<div
className="
absolute
-top-4
left-1/2
-translate-x-1/2
bg-orange-500
text-white
px-6
py-2
rounded-full
text-sm
font-semibold
flex
items-center
gap-2
"
>

<Sparkles size={16}/>

Most Popular

</div>

)

}






<h3
className={`
text-2xl
font-serif
font-bold
mt-4

${
item.popular
?
"text-white"
:
"text-gray-900"
}

`}
>

{item.title}

</h3>





<div className="mt-6">


<span
className="
text-5xl
font-bold
text-orange-500
"
>
{item.price}
</span>


</div>





<div
className={`
mt-5
flex
items-center
gap-2

${
item.popular
?
"text-gray-300"
:
"text-gray-600"
}

`}
>

<Clock size={18}/>

{item.duration}

</div>





<p
className={`
mt-6
leading-7

${
item.popular
?
"text-gray-300"
:
"text-gray-600"
}

`}
>

{item.description}

</p>






{/* Features */}

<div className="mt-8 space-y-4">


{
item.features.map((feature,i)=>(


<div
key={i}
className="
flex
items-center
gap-3
"
>

<CheckCircle2
size={20}
className="text-orange-500"
/>


<span
className={`
text-sm

${
item.popular
?
"text-gray-200"
:
"text-gray-700"
}

`}
>

{feature}

</span>


</div>


))

}


</div>






<button
className={`
mt-10
w-full
py-4
rounded-full
flex
items-center
justify-center
gap-2
transition

${
item.popular
?
"bg-orange-500 hover:bg-orange-600 text-white"
:
"bg-black hover:bg-orange-500 text-white"
}

`}
>


Book Now

<ArrowRight size={18}/>


</button>





</div>


))

}



</div>



</div>


</section>

);


}