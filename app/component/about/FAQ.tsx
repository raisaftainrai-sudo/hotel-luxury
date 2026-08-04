"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";


const faqs = [
  {
    question: "What types of rooms does LUXORA offer?",
    answer:
      "LUXORA offers luxury rooms, premium suites, executive rooms and presidential suites with modern facilities."
  },

  {
    question: "Do you provide room service?",
    answer:
      "Yes, our 24/7 room service team is available to provide food, beverages and guest assistance."
  },

  {
    question: "Is spa and wellness service available?",
    answer:
      "Yes, guests can enjoy premium spa treatments, relaxation therapies and wellness facilities."
  },

  {
    question: "Do you offer airport pickup?",
    answer:
      "Yes, we provide comfortable airport transfer services for our guests."
  },

  {
    question: "Can I cancel my booking?",
    answer:
      "Yes, bookings can be cancelled according to our cancellation policy."
  },

];


export default function FAQ(){

  const [open,setOpen] = useState<number | null>(null);


  return(

    <section className="
    bg-[#080808]
    py-20
    ">


      <div className="
      max-w-5xl
      mx-auto
      px-6
      ">


        <h2 className="
        text-4xl
        md:text-5xl
        text-white
        font-serif
        font-bold
        text-center
        ">
          Frequently Asked Questions
        </h2>


        <p className="
        text-gray-400
        text-center
        mt-5
        mb-12
        ">
          Find answers to common questions about
          our hotel services and facilities.
        </p>



        <div className="
        space-y-5
        ">


        {
          faqs.map((faq,index)=>(


            <div
            key={index}
            className="
            bg-[#111]
            rounded-2xl
            border
            border-orange-500/20
            overflow-hidden
            "
            >


              <button

              onClick={()=> 
                setOpen(open === index ? null : index)
              }

              className="
              w-full
              flex
              justify-between
              items-center
              px-6
              py-5
              text-left
              "
              >


                <span className="
                text-white
                text-lg
                font-medium
                ">
                  {faq.question}
                </span>



                {
                  open === index ?

                  <Minus 
                  className="text-orange-500"
                  />

                  :

                  <Plus
                  className="text-orange-500"
                  />

                }


              </button>




              {
                open === index && (

                  <div className="
                  px-6
                  pb-6
                  text-gray-400
                  leading-relaxed
                  ">

                    {faq.answer}

                  </div>

                )
              }



            </div>


          ))
        }


        </div>



      </div>


    </section>

  )

}