"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ChefHat, Star, UtensilsCrossed } from "lucide-react";


const achievements = [
  "15+ Years International Experience",
  "Michelin Star Trained",
  "Award Winning Signature Recipes",
  "Fresh Organic Ingredients Every Day",
];


export default function ChefExperience() {

  return (

    <section className="py-20 bg-[#faf7f2]">

      <div className="max-w-7xl mx-auto px-6">


        <div className="grid lg:grid-cols-2 gap-16 items-center">


          {/* IMAGE SECTION */}

          <motion.div

            initial={{opacity:0,x:-80}}
            whileInView={{
              opacity:1,
              x:0
            }}
            transition={{
              duration:.8
            }}
            viewport={{
              once:true
            }}

            className="relative"

          >


            <motion.div

              whileHover={{
                scale:1.03
              }}

              transition={{
                duration:.5
              }}

              className="
              relative
              h-[650px]
              rounded-3xl
              overflow-hidden
              shadow-2xl
              "

            >


              <Image

                src="/imgmaster.jpg"

                alt="Executive Chef"

                fill

                className="
                object-cover
                transition
                duration-700
                hover:scale-110
                "

              />


            </motion.div>




            {/* AWARD CARD */}


            <motion.div


              animate={{
                y:[0,-10,0]
              }}

              transition={{
                duration:3,
                repeat:Infinity
              }}


              className="
              absolute
              bottom-8
              -right-8
              bg-white
              rounded-3xl
              shadow-xl
              p-6
              w-64
              border
              border-transparent
              hover:border-orange-500
              hover:bg-orange-50
              transition-all
              duration-500
              "


            >


              <div className="flex items-center gap-4">


                <div className="
                w-14
                h-14
                rounded-full
                bg-orange-500
                flex
                items-center
                justify-center
                ">


                  <Award
                    className="text-white"
                    size={28}
                  />


                </div>


                <div>


                  <h3 className="
                  text-2xl
                  font-bold
                  text-gray-900
                  ">
                    25+
                  </h3>


                  <p className="
                  text-gray-500
                  text-sm
                  ">
                    Culinary Awards
                  </p>


                </div>


              </div>


            </motion.div>



          </motion.div>





          {/* CONTENT SECTION */}


          <motion.div


            initial={{
              opacity:0,
              x:80
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            transition={{
              duration:.8
            }}

            viewport={{
              once:true
            }}


          >



            <p className="
            uppercase
            tracking-[5px]
            text-orange-500
            font-semibold
            ">

              Executive Chef

            </p>



            <h2 className="
            mt-4
            text-4xl
            md:text-5xl
            font-serif
            font-bold
            text-gray-900
            ">


              Meet Our

              <span className="text-orange-500">

                {" "}Master Chef

              </span>


            </h2>




            <p className="
            mt-6
            text-gray-600
            leading-8
            ">


              Our Executive Chef brings creativity, passion and international
              culinary expertise to every dish served at LUXORA Hotel.
              Every meal is prepared with premium ingredients and artistic
              presentation to deliver an unforgettable dining experience.


            </p>





            {/* CARDS */}



            <div className="grid sm:grid-cols-2 gap-5 mt-10">



              {/* MASTER CHEF */}


              <motion.div


                whileHover={{
                  y:-10,
                  scale:1.05
                }}


                transition={{
                  duration:.3
                }}


                className="
                bg-white
                rounded-2xl
                p-5
                shadow
                border
                border-transparent
                hover:border-orange-500
                hover:bg-orange-50
                hover:shadow-[0_15px_35px_rgba(249,115,22,0.25)]
                transition-all
                duration-500
                cursor-pointer
                "


              >


                <ChefHat
                  className="text-orange-500"
                  size={30}
                />


                <h4 className="
                mt-4
                text-xl
                font-bold
                ">
                  Master Chef
                </h4>


                <p className="
                mt-2
                text-gray-600
                text-sm
                ">
                  International Fine Dining Specialist
                </p>


              </motion.div>






              {/* STAR CARD */}



              <motion.div


                whileHover={{
                  y:-10,
                  scale:1.05
                }}


                transition={{
                  duration:.3
                }}


                className="
                bg-white
                rounded-2xl
                p-5
                shadow
                border
                border-transparent
                hover:border-orange-500
                hover:bg-orange-50
                hover:shadow-[0_15px_35px_rgba(249,115,22,0.25)]
                transition-all
                duration-500
                cursor-pointer
                "


              >



                <Star

                  className="
                  text-yellow-500
                  fill-yellow-500
                  "

                  size={30}

                />



                <h4 className="
                mt-4
                text-xl
                font-bold
                ">

                  5-Star Rating

                </h4>




                <p className="
                mt-2
                text-gray-600
                text-sm
                ">

                  Guest Favorite Culinary Experience

                </p>



              </motion.div>



            </div>







            {/* ACHIEVEMENTS */}



            <div className="
            mt-10
            space-y-4
            ">


              {
                achievements.map((item,index)=>(


                  <motion.div


                    key={index}


                    initial={{
                      opacity:0,
                      x:50
                    }}


                    whileInView={{
                      opacity:1,
                      x:0
                    }}


                    transition={{
                      delay:index*.1
                    }}


                    whileHover={{
                      x:10
                    }}


                    className="
                    flex
                    items-center
                    gap-4
                    bg-white
                    rounded-2xl
                    p-4
                    shadow-sm
                    border
                    border-transparent
                    hover:border-orange-500
                    hover:bg-orange-50
                    transition-all
                    duration-500
                    "


                  >


                    <div className="
                    w-10
                    h-10
                    rounded-full
                    bg-orange-100
                    flex
                    items-center
                    justify-center
                    ">


                      <UtensilsCrossed

                        className="text-orange-500"

                        size={18}

                      />


                    </div>



                    <p className="
                    text-gray-700
                    font-medium
                    ">

                      {item}

                    </p>



                  </motion.div>


                ))
              }



            </div>






            {/* BUTTON */}



            <motion.button


              whileHover={{
                scale:1.08
              }}


              whileTap={{
                scale:.95
              }}



              className="
              mt-10
              px-8
              py-4
              rounded-full
              bg-orange-500
              text-white
              font-semibold
              hover:bg-orange-600
              hover:shadow-[0_0_30px_rgba(249,115,22,0.6)]
              transition-all
              duration-500
              "


            >

              Meet Our Team


            </motion.button>




          </motion.div>



        </div>


      </div>


    </section>

  );

}