"use client";

import Image from "next/image";
import { Percent, CalendarDays, ArrowRight } from "lucide-react";

const offers = [
  {
    title: "Romantic Dinner",
    image: "/imgroman.png",
    discount: "20% OFF",
    price: "$120",
    description:
      "A luxury candlelight dinner with a special 5-course gourmet menu.",
  },
  {
    title: "Weekend Buffet",
    image: "/imgbuffer.png",
    discount: "30% OFF",
    price: "$80",
    description:
      "Unlimited international buffet with live cooking stations and desserts.",
  },
  {
    title: "Family Feast",
    image: "/imgfAMILY.png",
    discount: "15% OFF",
    price: "$180",
    description:
      "Exclusive family dining package including complimentary drinks.",
  },
];

export default function DiningOffer() {
  return (
    <section className="py-20 bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="uppercase tracking-[4px] text-orange-500 font-semibold">
            Exclusive Offers
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-serif font-bold text-gray-900">
            Dining Special Offers
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-600">
            Enjoy premium dining experiences with our exclusive restaurant
            offers available for a limited time.
          </p>
        </div>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {offers.map((offer, index) => (

            <div
              key={index}
              className="
              group
              bg-white 
              rounded-3xl 
              overflow-hidden 
              shadow-lg 
              transition-all 
              duration-500
              hover:-translate-y-4
              hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]
              "
            >

              {/* Image */}

              <div className="relative h-72 overflow-hidden">

                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="
                  object-cover
                  transition duration-700
                  group-hover:scale-110
                  "
                />


                {/* Image Overlay */}

                <div className="
                absolute inset-0 
                bg-black/0
                transition duration-500
                group-hover:bg-black/20
                "/>


                <div className="
                absolute top-5 left-5 
                bg-red-500 
                text-white 
                px-4 py-2 
                rounded-full 
                flex items-center gap-2 
                font-semibold
                transition-all
                duration-500
                group-hover:scale-110
                ">
                  <Percent size={18} />
                  {offer.discount}
                </div>

              </div>



              {/* Content */}

              <div className="p-7">


                <h3 className="
                text-2xl 
                font-serif 
                font-bold 
                text-gray-900
                transition
                duration-300
                group-hover:text-orange-500
                ">
                  {offer.title}
                </h3>


                <p className="text-gray-600 mt-4 leading-7">
                  {offer.description}
                </p>



                <div className="flex justify-between items-center mt-6">

                  <div>

                    <p className="text-sm text-gray-500">
                      Starting From
                    </p>


                    <h4 className="
                    text-3xl 
                    font-bold 
                    text-orange-500
                    transition
                    group-hover:scale-110
                    origin-left
                    ">
                      {offer.price}
                    </h4>

                  </div>


                  <div className="
                  flex items-center gap-2 
                  text-gray-500
                  transition
                  group-hover:text-orange-500
                  ">
                    <CalendarDays size={18}/>
                    Limited
                  </div>


                </div>



                <button className="
                mt-8 
                w-full 
                py-3 
                rounded-full 
                bg-black 
                text-white 
                flex items-center 
                justify-center 
                gap-2
                transition-all
                duration-500
                hover:bg-orange-500
                hover:scale-105
                ">

                  Reserve Now

                  <ArrowRight 
                  size={18}
                  className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-2
                  "
                  />

                </button>


              </div>


            </div>

          ))}


        </div>

      </div>
    </section>
  );
}