"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";


const menu = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Rooms",
    path: "/rooms",
  },
  {
    name: "Dining",
    path: "/dining",
  },
  {
    name: "Spa",
    path: "/spa",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];



function FallingFlowers(){


const [mounted,setMounted] = useState(false);


useEffect(()=>{

setMounted(true);

},[]);



if(!mounted) return null;



const flowers = Array.from({length:30});



return(

<div
className="
fixed
inset-0
pointer-events-none
overflow-hidden
z-[100]
"
>


{
flowers.map((_,i)=>(


<motion.div

key={i}


initial={{

y:-50,

x:Math.random()*window.innerWidth,

rotate:0,

opacity:1,

}}



animate={{

y:window.innerHeight+100,

rotate:360,

x:Math.random()*window.innerWidth,

opacity:0,

}}



transition={{

duration:5+Math.random()*5,

delay:Math.random()*3,

repeat:Infinity,

ease:"linear",

}}



className="
absolute
text-3xl
"

>




</motion.div>


))
}



</div>


)

}




export default function Navbar(){



const pathname = usePathname();



return(

<>


{/* Falling Animation */}

<FallingFlowers />



<header

className="
fixed
top-6
left-0
w-full
z-50
px-6
"

>


<nav

className="
max-w-7xl
mx-auto
bg-black/90
backdrop-blur-xl
border
border-orange-200
rounded-full
shadow-xl
px-10
py-3
flex
items-center
justify-between
"

>



{/* Logo */}


<Link

href="/"

className="
text-3xl
font-serif
tracking-[5px]
font-bold
text-orange-500
"

>

LUXORA

</Link>





{/* Menu */}


<div

className="
hidden
lg:flex
gap-8
text-gray-200
font-medium
"

>


{

menu.map((item)=>(


<Link

key={item.path}

href={item.path}


className={`

relative

transition

duration-300

hover:text-orange-500



after:absolute

after:left-0

after:-bottom-2

after:h-[2px]

after:bg-orange-500

after:transition-all

after:duration-300



${

pathname === item.path

?

"text-orange-500 after:w-full"

:

"after:w-0 hover:after:w-full"

}


`}

>


{item.name}



</Link>


))


}



</div>





{/* Booking Button */}


<Link

href="/booking"

className="
bg-orange-500
text-white
px-8
py-2
rounded-full
font-semibold
hover:bg-orange-600
transition
shadow-lg
"

>

Book Now

</Link>



</nav>


</header>


</>


)

}