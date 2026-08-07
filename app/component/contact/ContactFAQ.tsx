"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How can I make a room reservation?",
    answer:
      "You can book your room through our website booking form or contact our reservation team directly.",
  },

  {
    question: "What are the check-in and check-out timings?",
    answer:
      "Check-in starts from 2:00 PM and check-out is available until 12:00 PM.",
  },

  {
    question: "Do you provide airport pickup service?",
    answer:
      "Yes, we provide comfortable airport transfer services for our guests.",
  },

  {
    question: "Can I cancel my reservation?",
    answer:
      "Yes, cancellation policies depend on your selected room package.",
  },

  {
    question: "Do you have restaurant and spa facilities?",
    answer:
      "Yes, our hotel offers luxury dining and premium spa services.",
  },
];


export default function ContactFAQ() {

  const [open, setOpen] = useState<number | null>(null);


  return (

    <section className="bg-black py-20">

      <div className="max-w-4xl mx-auto px-6">


        {/* Heading */}

        <motion.div

          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:.7
          }}

          viewport={{
            once:true
          }}

          className="text-center mb-14"

        >

          <p className="
          text-orange-500
          tracking-[8px]
          mb-4
          ">
            FAQ
          </p>


          <h2 className="
          text-white
          text-5xl
          md:text-6xl
          font-serif
          font-bold
          ">
            Frequently Asked Questions
          </h2>


        </motion.div>



        {/* FAQ Cards */}


        <div className="space-y-5">


        {
          faqs.map((item,index)=>(


            <motion.div

              key={index}


              initial={{
                opacity:0,
                y:30
              }}


              whileInView={{
                opacity:1,
                y:0
              }}


              transition={{
                delay:index*0.1
              }}


              viewport={{
                once:true
              }}


              whileHover={{
                scale:1.03,
                y:-5
              }}


              className="
              group
              rounded-3xl
              border
              border-orange-400/30
              bg-white/5
              backdrop-blur-xl
              overflow-hidden

              hover:border-orange-500
              hover:bg-orange-500/10

              transition-all
              duration-300

              hover:shadow-[0_0_25px_rgba(255,140,0,0.25)]
              "

            >



              {/* Question Button */}

              <button

                onClick={()=>setOpen(
                  open === index ? null : index
                )}

                className="
                w-full
                flex
                items-center
                justify-between
                p-6
                text-left
                "

              >


                <h3 className="
                text-white
                font-semibold
                text-lg

                group-hover:text-orange-400

                transition
                duration-300
                ">

                  {item.question}

                </h3>



                <motion.div

                  animate={{
                    rotate: open === index ? 180 : 0
                  }}

                  transition={{
                    duration:.3
                  }}

                  className="
                  text-orange-500
                  "

                >

                {
                  open === index
                  ?
                  <Minus size={25}/>
                  :
                  <Plus size={25}/>
                }


                </motion.div>



              </button>



              {/* Answer */}

              {
                open === index && (


                  <motion.div

                    initial={{
                      height:0,
                      opacity:0
                    }}

                    animate={{
                      height:"auto",
                      opacity:1
                    }}

                    exit={{
                      height:0,
                      opacity:0
                    }}

                    transition={{
                      duration:.4
                    }}


                    className="
                    px-6
                    pb-6
                    text-gray-400
                    leading-7
                    "

                  >

                    {item.answer}


                  </motion.div>


                )
              }



            </motion.div>


          ))
        }


        </div>



      </div>


    </section>

  );
}