export default function DirectionPage(){

return(

<section className="
min-h-screen
bg-black
flex
items-center
justify-center
px-6
">

<div className="
max-w-3xl
text-center
">

<h1 className="
text-white
text-5xl
font-serif
font-bold
mb-6
">
Find Our Location
</h1>


<p className="
text-gray-400
text-lg
leading-8
">
Our luxury hotel is located at
123 Luxury Avenue, New York.
Easy access from city center.
</p>


<iframe
src="https://www.google.com/maps?q=New+York&output=embed"
className="
w-full
h-[450px]
rounded-3xl
mt-10
border
border-orange-500/40
"
/>


</div>

</section>

)

}