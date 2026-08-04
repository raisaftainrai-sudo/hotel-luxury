const data=[

{
title:"Our Mission",
text:"To create memorable luxury experiences through excellent hospitality."
},

{
title:"Our Vision",
text:"To become a global symbol of comfort, elegance and premium service."
}

];


export default function MissionVision(){


return(

<section className="
bg-black
py-20
">


<div className="
max-w-7xl
mx-auto
px-6
grid
md:grid-cols-2
gap-8
">


{
data.map((item,index)=>(

<div
key={index}
className="
bg-[#111]
p-10
rounded-3xl
border
border-orange-500/20
hover:border-orange-500
transition
">


<h2 className="
text-3xl
text-orange-500
font-serif
">

{item.title}

</h2>


<p className="
text-gray-400
mt-5
">

{item.text}

</p>


</div>


))
}


</div>


</section>

)

}