"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  HeartPulse,
  Flower2
} from "lucide-react";


const spaServices = [
  {
    icon: Sparkles,
    title: "Luxury Treatments",
    desc: "Premium beauty and relaxation treatments designed for complete comfort."
  },
  {
    icon: Flower2,
    title: "Relaxing Massage",
    desc: "Experience peaceful massages with professional therapists."
  },
  {
    icon: HeartPulse,
    title: "Wellness Care",
    desc: "Refresh your mind and body with our wellness programs."
  }
];


export default function SpaWellness() {
  return (
    <section className="
    bg-[#0B0B0B]
    py-24
    overflow-hidden
    ">


      <div className="
      max-w-7xl
      mx-auto
      px-6
      ">


        {/* Top Content */}
        <div className="
        grid
        lg:grid-cols-2
        gap-12
        items-center
        ">


          {/* Image */}
          <motion.div
            initial={{
              opacity:0,
              x:-50
            }}
            whileInView={{
              opacity:1,
              x:0
            }}
            transition={{
              duration:0.8
            }}
            className="
            relative
            h-[550px]
            rounded-3xl
            overflow-hidden
            "
          >

            <Image
              src="/img2.avif"
              alt="Luxury Spa"
              fill
              className="
              object-cover
              "
            />

          </motion.div>





          {/* Text */}
          <motion.div
            initial={{
              opacity:0,
              x:50
            }}
            whileInView={{
              opacity:1,
              x:0
            }}
            transition={{
              duration:0.8
            }}
          >

            <p className="
            text-orange-500
            uppercase
            tracking-[6px]
            mb-5
            ">
              Spa & Wellness
            </p>



            <h2 className="
            text-4xl
            md:text-5xl
            font-serif
            font-bold
            text-white
            leading-tight
            ">
              Relax Your Body,
              <span className="
              text-orange-500
              ">
                {" "}Refresh Your Soul
              </span>
            </h2>



            <p className="
            text-gray-300
            mt-6
            text-lg
            leading-relaxed
            ">
              Escape from daily stress and enjoy peaceful
              spa experiences with luxury treatments,
              calming environments and expert care.
            </p>




            {/* Services */}

            <div className="
            mt-8
            space-y-5
            ">

              {spaServices.map((item,index)=>{

                const Icon = item.icon;

                return(

                  <div
                    key={index}
                    className="
                    flex
                    gap-4
                    items-start
                    "
                  >

                    <div className="
                    w-12
                    h-12
                    rounded-full
                    bg-orange-500/10
                    flex
                    items-center
                    justify-center
                    "
                    >

                      <Icon
                        size={24}
                        className="
                        text-orange-500
                        "
                      />

                    </div>



                    <div>

                      <h3 className="
                      text-white
                      text-xl
                      font-semibold
                      ">
                        {item.title}
                      </h3>


                      <p className="
                      text-gray-400
                      mt-1
                      ">
                        {item.desc}
                      </p>

                    </div>


                  </div>

                )

              })}

            </div>





            <Link
              href="/spa"
              className="
              inline-block
              mt-10
              bg-orange-500
              text-black
              px-8
              py-4
              rounded-full
              font-semibold
              hover:bg-orange-400
              hover:scale-105
              transition
              "
            >
              Discover Spa
            </Link>


          </motion.div>


        </div>


      </div>


    </section>
  );
}